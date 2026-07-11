import type { Product } from '@/types';
import { products as staticProducts } from '@/data/products';

interface RawSheetRow {
  id?: string;
  productName?: string;
  slug?: string;
  category?: string;
  subCategory?: string;
  description?: string;
  fullDescription?: string;
  price?: string;
  imageUrl?: string;
  stockStatus?: string;
  featured?: string;
  origin?: string;
  packaging?: string;
  moq?: string;
  [key: string]: string | undefined;
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function mapRowToProduct(row: RawSheetRow, index: number): Product {
  const name = row.productName ?? `Product ${index + 1}`;
  const priceStr = row.price?.trim();
  const price = priceStr ? Number(priceStr) : undefined;
  const featuredStr = row.featured?.trim().toUpperCase();

  return {
    id: row.id ? Number(row.id) : index + 1,
    slug: row.slug?.trim() || toSlug(name),
    productName: name,
    category: row.category?.trim() ?? 'Uncategorized',
    subCategory: row.subCategory?.trim() || undefined,
    description: row.description?.trim() ?? '',
    fullDescription: row.fullDescription?.trim() || undefined,
    price: price !== undefined && !isNaN(price) ? price : undefined,
    imageUrl: row.imageUrl?.trim() ?? '',
    stockStatus: (['In Stock', 'Out of Stock', 'Pre-Order'].includes(row.stockStatus?.trim() ?? '')
      ? (row.stockStatus!.trim() as Product['stockStatus'])
      : 'In Stock'),
    featured: featuredStr === 'TRUE',
    origin: row.origin?.trim() || undefined,
    packaging: row.packaging?.trim() || undefined,
    moq: row.moq?.trim() || undefined,
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const apiUrl = import.meta.env.VITE_SHEETS_API_URL as string | undefined;

  if (!apiUrl) {
    console.warn(
      'VITE_SHEETS_API_URL is not set. Falling back to static product data.'
    );
    return staticProducts;
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Sheets API responded with status ${response.status}`);
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Expected an array of rows from the sheets API');
    }

    if (data.length === 0) {
      console.warn('Sheets API returned empty data. Falling back to static products.');
      return staticProducts;
    }

    return data.map((row: RawSheetRow, index: number) => mapRowToProduct(row, index));
  } catch (err) {
    console.warn(
      'Failed to fetch products from Google Sheets. Falling back to static data.',
      err
    );
    return staticProducts;
  }
}

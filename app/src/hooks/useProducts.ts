import { useState, useEffect, useMemo } from 'react';
import type { Product } from '@/types';
import { fetchProducts } from '@/lib/googleSheets';

interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export function useProducts(category?: string): UseProductsResult {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();
        if (!cancelled) {
          setAllProducts(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : 'Failed to load products'
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const products = useMemo(() => {
    if (!category || category === 'all') return allProducts;
    return allProducts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }, [allProducts, category]);

  return { products, loading, error };
}

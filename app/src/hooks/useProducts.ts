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
    const list = category && category !== 'all'
      ? allProducts.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        )
      : allProducts;

    // Hides & Skins products always listed first; everything else keeps
    // its original (sheet) order behind them. Stable sort preserves order.
    return [...list].sort((a, b) => {
      const aPriority = a.category === 'Hides & Skins' ? 0 : 1;
      const bPriority = b.category === 'Hides & Skins' ? 0 : 1;
      return aPriority - bPriority;
    });
  }, [allProducts, category]);

  return { products, loading, error };
}

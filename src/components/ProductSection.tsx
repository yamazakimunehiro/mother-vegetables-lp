'use client';

import { useEffect, useState } from 'react';

type Product = {
  _id: string;
  name: string;
  description?: string;
  productPageUrl?: {
    base: string;
    path: string;
  };
};

export default function ProductSection() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('API fetch failed');
        const data = await res.json();
        console.log('取得結果:', data);
        setProducts(data.products || []);
      } catch (err) {
        console.error('商品取得エラー:', err);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="product" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">商品ラインナップ</h2>

        {!products ? (
          <p>読み込み中...</p>
        ) : products.length === 0 ? (
          <p>商品が見つかりません。</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => {
              const url =
                product.productPageUrl?.base && product.productPageUrl?.path
                  ? product.productPageUrl.base + product.productPageUrl.path
                  : undefined;

              return (
                <div
                  key={product._id}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{product.description}</p>

                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-[#b8860b] rounded hover:bg-[#d4c4b0] transition"
                    >
                      詳細はこちら
                    </a>
                  ) : (
                    <p className="text-xs text-gray-400 mt-4">
                      リンクが設定されていません
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

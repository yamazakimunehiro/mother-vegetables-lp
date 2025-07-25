"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SharedPage from "@/components/SharedPage";

type Product = {
  _id: string;
  name: string;
  sku?: string;
  description?: string;
  productPageUrl?: {
    base: string;
    path: string;
  };
  stock?: {
    trackInventory: boolean;
    inStock: boolean;
  };
};

export default function BrandPage() {
  const params = useParams();
  const brandId = params?.brandId as string;

  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        const all = data.products || [];

        const filtered = all.filter((p: Product) => {
          const sku = p.sku?.toLowerCase() || "";
          return (
            sku.endsWith(`-${brandId.toLowerCase()}`) &&
            (!p.stock?.trackInventory || p.stock?.inStock)
          );
        });

        setProducts(filtered);
      } catch (err) {
        console.error("商品取得エラー:", err);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [brandId]);

  const DynamicProductSection = () => (
    <section id="product" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          「{brandId.toUpperCase()}」さん向け商品一覧
        </h2>

        {!products ? (
          <p>読み込み中...</p>
        ) : products.length === 0 ? (
          <p>該当する商品が見つかりませんでした。</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const url =
                product.productPageUrl?.base && product.productPageUrl?.path
                  ? product.productPageUrl.base + product.productPageUrl.path
                  : null;

              return (
                <div
                  key={product._id || index}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold mb-4">{product.name}</h3>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-[#b8860b] rounded hover:bg-[#d4c4b0] transition"
                    >
                      詳細はこちら
                    </a>
                  ) : (
                    <p className="text-xs text-gray-400 mt-2">リンク未設定</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );

  return <SharedPage productSection={<DynamicProductSection />} />;
}

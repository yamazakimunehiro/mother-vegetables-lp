// src/app/products/[brandId]/page.tsx

import SharedPage from "@/components/SharedPage";
import { Product } from "@/types";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    brandId: string;
  };
};

async function getFilteredProducts(brandId: string): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    method: "POST",
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("API fetch failed");
    return [];
  }

  const data = await res.json();
  const allProducts = data.products || [];

  return allProducts.filter((product: Product) =>
    product.sku?.toLowerCase().endsWith(`-${brandId.toLowerCase()}`)
  );
}

export default async function BrandPage({ params }: PageProps) {
  const { brandId } = params;
  const products = await getFilteredProducts(brandId);

  if (!products || products.length === 0) {
    return (
      <div className="py-20 text-center text-gray-600">
        <h2 className="text-2xl font-semibold">「{brandId.toUpperCase()}」さん向け商品一覧</h2>
        <p className="mt-4">該当する商品が見つかりませんでした。</p>
      </div>
    );
  }

  const DynamicProductSection = () => (
    <section id="product" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">商品ラインナップ</h2>

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
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

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
                  <p className="text-xs text-gray-400 mt-4">リンクが設定されていません</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  return <SharedPage productSection={<DynamicProductSection />} />;
}

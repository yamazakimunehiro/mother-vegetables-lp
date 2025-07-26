// src/app/products/[brandId]/page.tsx
import { notFound } from "next/navigation";
import SharedPage from "@/components/SharedPage";

type PageProps = {
  params: {
    brandId: string;
  };
};

export const dynamic = "force-dynamic";

export default async function BrandPage({ params }: PageProps) {
  const { brandId } = params;

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://your-deployment.vercel.app";

  const res = await fetch(`${baseUrl}/api/products`, {
    method: "POST",
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const data = await res.json();
  const allProducts = data.products || [];

  const products = allProducts.filter((product: any) =>
    product.sku?.toLowerCase().endsWith(`-${brandId.toLowerCase()}`)
  );

  const DynamicProductSection = () => (
    <section id="product" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">商品ラインナップ</h2>

        {products.length === 0 ? (
          <p>該当する商品が見つかりませんでした。</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product: any) => {
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
                  <p className="text-sm text-gray-500 mt-2">
                    {product.description}
                  </p>
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

  return <SharedPage productSection={<DynamicProductSection />} />;
}

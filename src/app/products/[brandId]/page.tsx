// src/app/products/[brandId]/page.tsx
import { Product } from "@/types"; // または型定義を直書き
import SharedPage from "@/components/SharedPage";

type PageProps = {
  params: {
    brandId: string;
  };
};

async function getFilteredProducts(brandId: string): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });
  const data = await res.json();
  const allProducts = data.products || [];

  return allProducts.filter((product: Product) =>
    product.sku?.toLowerCase().endsWith(`-${brandId.toLowerCase()}`)
  );
}

export async function generateStaticParams() {
  // 任意でプリビルドしたい brandId を返す（例として "kk", "tha"）
  return [{ brandId: "kk" }, { brandId: "tha" }];
}

export default async function BrandPage({ params }: PageProps) {
  const { brandId } = params;
  const products = await getFilteredProducts(brandId);

  const DynamicProductSection = () => (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">「{brandId.toUpperCase()}」さん向け商品一覧</h2>

        {products.length === 0 ? (
          <p>該当する商品が見つかりませんでした。</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => {
              const url =
                product.productPageUrl?.base && product.productPageUrl?.path
                  ? product.productPageUrl.base + product.productPageUrl.path
                  : undefined;

              return (
                <div key={product._id} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-yellow-700 rounded hover:bg-yellow-600 transition"
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
        )}
      </div>
    </section>
  );

  return <SharedPage productSection={<DynamicProductSection />} />;
}

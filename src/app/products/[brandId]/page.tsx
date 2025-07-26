import SharedPage from "@/components/SharedPage";
import { Metadata } from "next";

type Product = {
  _id: string;
  name: string;
  sku?: string;
  description?: string;
  productPageUrl?: {
    base: string;
    path: string;
  };
};

type Params = {
  brandId: string;
};

export async function generateStaticParams(): Promise<{ brandId: string }[]> {
  return []; // 必要に応じて事前生成したいIDを追加
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  return {
    title: `${params.brandId.toUpperCase()}さん向け商品一覧`,
  };
}

async function getFilteredProducts(brandId: string): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("商品取得失敗:", res.statusText);
    return [];
  }

  const data = await res.json();
  return (data.products || []).filter((product: Product) =>
    product.sku?.toLowerCase().endsWith(`-${brandId.toLowerCase()}`)
  );
}

export default async function BrandPage({ params }: { params: Params }) {
  const products = await getFilteredProducts(params.brandId);

  const DynamicProductSection = () => (
    <section id="product" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{params.brandId.toUpperCase()}さん向け商品一覧</h2>

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
                <div
                  key={product._id}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold">{product.name}</h3>

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
                    <p className="text-xs text-gray-400 mt-4">リンク未設定</p>
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

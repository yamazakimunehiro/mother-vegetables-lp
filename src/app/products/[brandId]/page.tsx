// src/app/products/[brandId]/page.tsx
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
    inStock: boolean;
  };
};

type Props = {
  params: {
    brandId: string;
  };
};

async function getFilteredProducts(brandId: string): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("API fetch failed");
    return [];
  }

  const data = await res.json();
  const allProducts: Product[] = data.products || [];

  return allProducts
    .filter((product) => product.sku?.toLowerCase().endsWith(`-${brandId.toLowerCase()}`))
    .filter((product) => product.stock?.inStock !== false);
}

export default async function BrandPage({ params }: Props) {
  const { brandId } = params;
  const products = await getFilteredProducts(brandId);

  return (
    <SharedPage
      productSection={
        <section className="py-20 md:py-24 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-6">{`「${brandId}」さん向け商品一覧`}</h2>
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
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-[#b8860b] rounded hover:bg-[#d4c4b0] transition"
                      >
                        詳細はこちら
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      }
    />
  );
}

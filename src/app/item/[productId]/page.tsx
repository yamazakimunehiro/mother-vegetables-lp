// src/app/item/[productId]/page.tsx
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProductDetailPage({ params }: any) {
  const { productId } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${productId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return notFound();

  const product = await res.json();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
        <p
          className="text-gray-700"
          dangerouslySetInnerHTML={{
            __html: product.descriptionHtml || product.description || "説明なし",
          }}
        />
        {product.productPageUrl?.base && product.productPageUrl?.path && (
          <a
            href={product.productPageUrl.base + product.productPageUrl.path}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-[#b8860b] text-white rounded hover:bg-[#d4c4b0] transition"
          >
            Wixの商品ページを見
          </a>
        )}
      </div>
    </section>
  );
}

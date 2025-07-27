import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string }; // ← URLパラメータを受け取る（例: /product/abc123）
}) {
  // BASE_URL は環境変数から取得（Vercelでも動作するように）
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.productId}`,
    {
      cache: "no-store", // ← データキャッシュを無効化（常に最新情報）
    }
  );

  // 商品が見つからない場合は404ページに遷移
  if (!res.ok) return notFound();

  const product = await res.json();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

        {/* 説明をHTMLとして安全に描画（WixはdescriptionHtmlを返すことが多いため） */}
        <p
          dangerouslySetInnerHTML={{
            __html: product.descriptionHtml || product.description || "説明がありません",
          }}
        />
      </div>
    </section>
  );
}

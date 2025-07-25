// src/app/page.tsx

import SharedPage from "@/components/SharedPage"; // ← 共通レイアウト化したもの
import ProductSection from "@/components/ProductSection"; // ← 通常の商品セクション

export default function Home() {
  return <SharedPage productSection={<ProductSection />} />;
}

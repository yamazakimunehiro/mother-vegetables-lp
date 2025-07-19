import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mother Vegetables Confidence MV-Si002 | 24時間崩れない陶器肌へ",
  description: "35億年前の生命起源から生まれた特殊微粒子配合。朝の5秒で24時間美しさが持続する、医薬部外品認定のフェイスパウダー。",
  keywords: "フェイスパウダー,化粧品,医薬部外品,Mother Vegetables,陶器肌,化粧崩れ防止",
  openGraph: {
    title: "Mother Vegetables Confidence MV-Si002",
    description: "35億年前の生命起源から生まれた特殊微粒子配合フェイスパウダー",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>{children}</body>
    </html>
  );
}

// src/app/api/products/route.ts
import { NextResponse } from "next/server";

const API_KEY = process.env.WIX_API_KEY!;
const SITE_ID = process.env.WIX_SITE_ID!;
const WIX_PRODUCTS_URL = "https://www.wixapis.com/stores/v1/products/query";

export async function GET() {
  const res = await fetch(WIX_PRODUCTS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "wix-site-id": SITE_ID,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {}, // クエリ空でも SITE_ID で絞れる
      paging: {
        limit: 100, // 必要に応じて増やす（100が最大）
      },
    }),
  });

  if (!res.ok) {
    console.error("API fetch failed");
    return NextResponse.json({ products: [] }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}

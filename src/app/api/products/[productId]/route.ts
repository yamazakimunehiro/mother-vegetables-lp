// src/app/api/products/[productId]/route.ts
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.WIX_API_KEY!;
const SITE_ID = process.env.WIX_SITE_ID!;
const WIX_PRODUCTS_URL = "https://www.wixapis.com/stores/v1/products/query";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const segments = url.pathname.split("/");
  const productId = segments[segments.length - 1]; // 動的なIDを末尾から取得

  if (!productId) {
    return NextResponse.json(
      { error: "productId is required" },
      { status: 400 }
    );
  }

  const res = await fetch(WIX_PRODUCTS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "wix-site-id": SITE_ID,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {
        filter: {
          _id: productId,
        },
      },
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: res.status }
    );
  }

  const data = await res.json();
  const product = data.products?.[0];

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

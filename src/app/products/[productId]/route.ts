// src/app/api/products/[productId]/route.ts
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.WIX_API_KEY!;
const SITE_ID = process.env.WIX_SITE_ID!;

export async function GET(req: NextRequest, { params }: { params: { productId: string } }) {
  const { productId } = params;

  const res = await fetch(`https://www.wixapis.com/stores/v1/products/${productId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "wix-site-id": SITE_ID,
    },
  });

  if (!res.ok) {
    return NextResponse.json({ error: "商品が見つかりません" }, { status: res.status });
  }

  const product = await res.json();
  return NextResponse.json(product);
}

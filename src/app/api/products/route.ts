// src/app/api/products/route.ts
import { NextResponse } from "next/server";

const API_KEY = process.env.WIX_API_KEY!;
const SITE_ID = process.env.WIX_SITE_ID!;
const WIX_PRODUCTS_URL = "https://www.wixapis.com/stores/v1/products/query";

export async function POST() {
  try {
    const limit = 100;
    const allProducts: any[] = [];

    for (let offset = 0; offset < 3000; offset += limit) {
      const res = await fetch(WIX_PRODUCTS_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "wix-site-id": SITE_ID,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: {},
          paging: { limit, offset },
        }),
      });

      if (!res.ok) {
        console.error("API fetch failed at offset", offset);
        return NextResponse.json({ products: allProducts }, { status: res.status });
      }

      const data = await res.json();
      const products = data.products || [];

      allProducts.push(...products);

      // データが100件未満なら次ページはない
      if (products.length < limit) break;
    }

    return NextResponse.json({ products: allProducts });
  } catch (err) {
    console.error("Fetch error:", err);
    return NextResponse.json({ products: [] }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Product } from "@/types";

export async function GET() {
  try {
    const result = await sql<Product>`SELECT * FROM products`;
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json([], { status: 500 });
  }
}

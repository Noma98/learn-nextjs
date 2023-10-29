import { getProducts } from '@/service/products';
import { NextResponse } from 'next/server';

//GET, POST,...요청별로 나눠서 구조적으로 코드를 구성해나갈 수 있음
export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}

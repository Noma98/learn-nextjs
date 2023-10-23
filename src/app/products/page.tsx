import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

export default function ProductsPage() {
  //서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와 보여주기
  const products = getProducts();
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

export const revalidate = 10;
export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';
import shopImage from '../../../public/images/shop.png';

export default async function ProductsPage() {
  // throw new Error();
  const products = await getProducts();
  return (
    <>
      <h1>Products Page</h1>
      <Image src={shopImage} alt='shop' priority />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

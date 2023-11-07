import React from 'react';
import MeowArticle from '@/components/MeowArticle';
import { Product, getProducts } from '@/service/products';
import Link from 'next/link';

type Props = {
  products: Product[];
};
//외부에서 데이터를 받아오는데, 이를 서버에서 어떤 함수를 써서 전달해주느냐에 따라 SSG, SSR이 됨
export default function SSGPage({ products }: Props) {
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
      <MeowArticle />
    </>
  );
}
//SSG
export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}

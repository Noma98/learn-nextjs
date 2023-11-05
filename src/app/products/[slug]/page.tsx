import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { getProduct, getProducts } from '@/service/products';

export const revalidate = 10;
type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}
export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return (
    <>
      <h1>{product.name} 제품 안내 페이지</h1>
      <Image
        alt={product.name}
        width={240}
        height={300}
        src={`/images/${product.image}`}
      />
    </>
  );
}
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}

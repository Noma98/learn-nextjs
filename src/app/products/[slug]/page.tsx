import React from 'react';
import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/service/products';

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
export default function Pants({ params: { slug } }: Props) {
  //서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 보여주기
  const product = getProduct(slug);
  if (!product) {
    notFound();
  }
  return <h1>{product} 제품 안내 페이지</h1>;
}
export function generateStaticParams() {
  //모든 제품의 페이지들을 미리 만들어 둘 수 있게 할 예정(SSG)
  const products = getProducts();
  return products.map((product) => ({
    slug: product,
  }));
}

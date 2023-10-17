type Props = {
  params: {
    slug: string;
  };
};
export default function Pants({ params }: Props) {
  return <h1>{params.slug} 제품 안내 페이지</h1>;
}
export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}

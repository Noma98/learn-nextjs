import { Product, getProducts } from '@/service/products';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  //일일이 Method 확인 필요
  if (req.method === 'GET') {
    const products = await getProducts();
    return res.status(200).json(products);
  }
  res.status(200);
}

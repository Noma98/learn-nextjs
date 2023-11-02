//Server Component

import React from 'react';
import Image from 'next/image';
import os from 'os'; //Node APIs

import Counter from '@/components/Counter';

export default function Home() {
  console.log(os.hostname());
  console.log('안녕 - 서버');
  return (
    <>
      <h1>Home page</h1>;
      <Counter />
      <Image
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        alt='shop'
        width={500}
        height={500}
      />
    </>
  );
}

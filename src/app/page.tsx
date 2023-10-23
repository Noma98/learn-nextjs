//Server Component

import React from 'react';
import os from 'os'; //Node APIs
import Counter from '../components/Counter';

export default function Home() {
  console.log(os.hostname());
  console.log('안녕 - 서버');
  return (
    <>
      <h1>Home page</h1>;
      <Counter />
    </>
  );
}

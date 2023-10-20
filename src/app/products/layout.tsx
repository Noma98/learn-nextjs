import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: '제품 사이트 | 전체 제품 확인',
  description: '제품들을 확인해보세요',
};
export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/women'>women</Link>
        <Link href='/products/man'>men</Link>
        <Link href='/products/kids'>kids</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}

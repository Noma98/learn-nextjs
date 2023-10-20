import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

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

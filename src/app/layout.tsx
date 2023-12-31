import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './layout.module.css';
import { Open_Sans } from 'next/font/google';
import { Nanum_Gothic } from 'next/font/google'; //variable font가 아님

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({ weight: '700', subsets: ['latin'] });
export const metadata: Metadata = {
  title: '제품 사이트',
  description: '제품을 판매하는 곳입니다.',
  icons: {
    icon: '/favicon.ico',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className={styles.body}>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note</h1>
          <nav>
            <Link href='/products'>Products</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

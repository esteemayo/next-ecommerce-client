'use client';

import { Inter } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

import Header from '@/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyles />
        <Header />
        {children}
      </body>
    </html>
  );
};

'use client';

import { Roboto } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

import Header from '@/components/Header';
import './globals.css';

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const GlobalStyles = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); */
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    color: #222;
    /* font-family: 'Roboto', sans-serif; */
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GlobalStyles />
        <Header />
        {children}
      </body>
    </html>
  );
};

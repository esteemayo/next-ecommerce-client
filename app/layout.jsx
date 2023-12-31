'use client';

import { Roboto } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

import Header from '@/components/header/Header';
import ClientOnly from '@/components/ClientOnly';

import CartProvider from '@/context/CartContext';
import ToastProvider from '@/providers/ToastProvider';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next eCommerce',
  description: 'This is an app to buy all your goods online at fair prices',
  keywords: 'shop, online, fast, easy, lowest prices, cart, ecommerce',
};

const GlobalStyles = createGlobalStyle`
  :root {
    --clr-white: #fff;
    --clr-primary-black: #000;
    --clr-secondary-black: #222;
    --clr-primary-green: #0d3d29;
  }

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

    @media only screen and (max-width: 75em) {
      font-size: 56.25%;
    }

    @media only screen and (max-width: 56.25em) {
      font-size: 50%;
    }

    @media only screen and (min-width: 112.5em) {
      font-size: 75%;
    }
  }

  body {
    font-size: 1.6rem;
    background-color: #eee;
    color: var(--clr-secondary-black);
    line-height: 1.6;
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <CartProvider>
          <ClientOnly>
            <GlobalStyles />
            <Header />
            <ToastProvider />
          </ClientOnly>
          {children}
        </CartProvider>
      </body>
    </html>
  );
};

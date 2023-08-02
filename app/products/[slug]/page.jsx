'use client';

import styled from 'styled-components';

import ClientOnly from '@/components/ClientOnly';

const Product = () => {
  return (
    <ClientOnly>Product</ClientOnly>
  );
};

export default Product;

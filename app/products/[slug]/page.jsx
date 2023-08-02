'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Center from '@/components/Center';
import ClientOnly from '@/components/ClientOnly';

import { getProductBySlug } from '@/services/productService';

const Product = () => {
  const [product, setProduct] = useState({});

  return (
    <ClientOnly>
      <Container>
        <Center>Product</Center>
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  
`;

export default Product;

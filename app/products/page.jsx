'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Center from '@/components/Center';
import ClientOnly from '@/components/ClientOnly';
import { getProducts } from '@/services/productService';

const Products = () => {
  const [products, setProducts] = useState([]);

  return (
    <ClientOnly>
      <Container>
        <Center>
          <Heading>All products</Heading>
        </Center>
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  
`;

const Heading = styled.h2`
  font-size: 1.5em;
`;

export default Products;

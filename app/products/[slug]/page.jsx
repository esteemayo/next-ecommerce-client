'use client';

import styled from 'styled-components';

import Center from '@/components/Center';
import ClientOnly from '@/components/ClientOnly';

const Product = () => {
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

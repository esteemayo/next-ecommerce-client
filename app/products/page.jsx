'use client';

import styled from 'styled-components';

import Center from '@/components/Center';
import ClientOnly from '@/components/ClientOnly';

const Products = () => {
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

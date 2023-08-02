'use client';

import styled from 'styled-components';
import Center from '@/components/Center';

const Products = () => {
  return (
    <Container>
      <Center>
        <Heading>All products</Heading>
      </Center>
    </Container>
  );
};

const Container = styled.main`
  
`;

const Heading = styled.h2`
  font-size: 1.5em;
`;

export default Products;

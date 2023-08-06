'use client';

import styled from 'styled-components';

import Center from '../Center';
import ProductsGrid from './ProductsGrid';

const NewProducts = ({ products }) => {
  return (
    <Container>
      <Center>
        <Heading>New Arrivals</Heading>
        <ProductsGrid products={products} />
      </Center>
    </Container>
  );
};

const Container = styled.section`
  padding: 6rem 0;
`;

const Heading = styled.h2`
  font-weight: normal;
  font-size: 1.85rem;
  margin: 3rem 0 2rem;
  
  @media only screen and (min-width: 48em) {
    font-size: 2.3rem;
  }
`;

export default NewProducts;

'use client';

import styled from 'styled-components';

import Center from './Center';
import ProductsGrid from './ProductsGrid';

const NewProducts = ({ products }) => {
  return (
    <Center>
      <Heading>New Arrivals</Heading>
      <ProductsGrid products={products} />
    </Center>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const Heading = styled.h2`
  font-weight: normal;
  font-size: 2.3rem;
  margin: 3rem 0 2rem;
`;

export default NewProducts;

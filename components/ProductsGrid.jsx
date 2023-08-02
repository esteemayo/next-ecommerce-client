'use client';

import styled from 'styled-components';
import ProductBox from './ProductBox';

const ProductsGrid = () => {
  return (
    <Container>ProductsGrid</Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export default ProductsGrid;

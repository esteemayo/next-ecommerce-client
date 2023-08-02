'use client';

import styled from 'styled-components';
import ProductBox from './ProductBox';

const ProductsGrid = ({ products }) => {
  return (
    <Container>
      {products?.map((item) => {
        return <ProductBox key={item._id} {...item} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export default ProductsGrid;

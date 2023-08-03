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
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default ProductsGrid;

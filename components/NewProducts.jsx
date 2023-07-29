'use client';

import styled from 'styled-components';

import Center from './Center';
import ProductBox from './ProductBox';

const NewProducts = ({ products }) => {
  return (
    <Center>
      <Container>
        {products?.map((item) => {
          return <ProductBox key={item._id} {...item} />;
        })}
      </Container>
    </Center>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 3rem 0;
`;

export default NewProducts;

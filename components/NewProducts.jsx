'use client';

import styled from 'styled-components';

import Center from './Center';
import ProductBox from './ProductBox';

const NewProducts = ({ products }) => {
  return (
    <Center>
      <Heading>New Arrivals</Heading>
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
`;

const Heading = styled.h2`
  font-weight: 500;
  font-size: 2.3rem;
  margin: 3rem 0 2rem;
`;

export default NewProducts;

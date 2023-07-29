'use client';

import styled from 'styled-components';
import Center from './Center';
import ProductBox from './ProductBox';

const NewProducts = ({ products }) => {
  return (
    <Container>NewProducts</Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default NewProducts;

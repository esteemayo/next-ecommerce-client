'use client';

import styled from 'styled-components';

const ProductBox = ({ title, slug, description, price, images }) => {
  return (
    <Container>ProductBox</Container>
  );
};

const Container = styled.article`
  background-color: var(--clr-white);
  padding: 2rem;
`;

export default ProductBox;

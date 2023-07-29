'use client';

import styled from 'styled-components';
import Image from 'next/image';

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

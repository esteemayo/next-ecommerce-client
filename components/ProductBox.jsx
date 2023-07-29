'use client';

import styled from 'styled-components';
import Image from 'next/image';

const ProductBox = ({ title, slug, description, price, images }) => {
  return (
    <Container>
      <Image src={images[0]} fill alt='' />
    </Container>
  );
};

const Container = styled.article`
  background-color: var(--clr-white);
  padding: 2rem;
  position: relative;

  img {
    max-width: 100%;
    max-height: 15rem;
    object-fit: cover;
  }
`;

export default ProductBox;

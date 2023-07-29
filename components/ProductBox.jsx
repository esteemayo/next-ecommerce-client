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
    width: 100%;
    height: 15rem !important;
    object-fit: cover;
  }
`;

const Wrapper = styled.div`
  
`;

export default ProductBox;

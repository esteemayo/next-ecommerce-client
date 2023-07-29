'use client';

import styled from 'styled-components';
import Image from 'next/image';

const ProductBox = ({ title, slug, description, price, images }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={images[0]} fill alt='' />
      </Wrapper>
      {title}
    </Container>
  );
};

const Container = styled.article`
  
`;

const Wrapper = styled.div`
  background-color: var(--clr-white);
  padding: 2rem;
  width: 100%;
  height: 15rem;
  position: relative;

  img {
    max-width: 100%;
    max-height: 15rem;
    object-fit: cover;
  }
`;

export default ProductBox;

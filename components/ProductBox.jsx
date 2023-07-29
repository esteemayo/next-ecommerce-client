'use client';

import styled from 'styled-components';
import Image from 'next/image';

const ProductBox = ({ title, slug, description, price, images }) => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={images[0]} fill alt='' />
        </ImageWrapper>
      </Wrapper>
      <Title>{title}</Title>
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
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  position: relative;

  img {
    max-width: 100%;
    max-height: 15rem;
    object-fit: contain;
  }
`;

const ImageWrapper = styled.div``;

const Title = styled.h2`
  
`;

export default ProductBox;

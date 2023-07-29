'use client';

import styled from 'styled-components';
import Image from 'next/image';

import Button from './Button';

const ProductBox = ({
  title,
  slug,
  description,
  price,
  images,
}) => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={images[0]}
            width={175}
            height={80}
            alt=''
          />
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
  height: 12rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  img {
    max-width: 100%;
    max-height: 8rem;
    object-fit: cover;
  }
`;

const ImageWrapper = styled.div``;

const Title = styled.h2`
  font-weight: normal;
  font-size: 1.3rem;
`;

export default ProductBox;

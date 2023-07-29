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
      <Button type='button' primary={1}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
          <path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
        </svg>
        Add to cart
      </Button>
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

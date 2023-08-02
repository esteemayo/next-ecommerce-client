'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';

const ProductImages = ({ images }) => {
  return (
    <>
      <StyledImage
        src={images?.[0]}
        width={228}
        height={121}
        alt=''
      />
      <Container>
        {images.map((image, index) => {
          return (
            <Wrapper key={index}>
              <StyledImage
                src={image}
                width={80}
                height={80}
                alt=''
              />
            </Wrapper>
          );
        })}
      </Container>
    </>
  );
};

const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  height: 4rem;
  padding: 2rem;
  border: 2px solid #aaa;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default ProductImages;

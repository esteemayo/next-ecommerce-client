'use client';

import Image from 'next/image';
import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';

const ProductImages = ({ images }) => {
  const [productImages, setProductImages] = useState([]);
  const [activeImage, setActiveImage] = useState(images?.[0]);

  useEffect(() => {
    setProductImages(images);
  }, [images]);

  return (
    <>
      <StyledImage
        src={activeImage}
        width={228}
        height={121}
        alt=''
      />
      <Container>
        {images?.map((image, index) => {
          return (
            <Wrapper
              key={index}
              active={image === activeImage}
              onClick={() => setActiveImage(image)}
            >
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

  ${({ active }) => active && css`
    border-color: #ccc;
  `}

  ${({ active }) => !active && css`
    border-color: transparent;
  `}
`;

export default ProductImages;

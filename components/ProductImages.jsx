'use client';

import Image from 'next/image';
import styled from 'styled-components';

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
                width={228}
                height={121}
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Wrapper = styled.div`
  border: 1px solid #aaa;
`;

export default ProductImages;

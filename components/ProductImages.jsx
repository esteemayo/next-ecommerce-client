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
      <Container></Container>
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
  
`;

const Wrapper = styled.div`
  
`;

export default ProductImages;

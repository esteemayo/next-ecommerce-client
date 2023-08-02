'use client';

import Image from 'next/image';
import styled from 'styled-components';

const ProductImages = ({ images }) => {
  return (
    <StyledImage
      src={images?.[0]}
      width={228}
      height={121}
      alt=''
    />
  );
};

const StyledImage = styled(Image)`
  
`;

export default ProductImages;

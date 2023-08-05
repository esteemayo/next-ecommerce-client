'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Logo = () => {
  return (
    <StyledLogo href='/' passHref>
      Ecommerce
    </StyledLogo>
  );
};

const StyledLogo = styled(Link)`
  
`;

export default Logo;

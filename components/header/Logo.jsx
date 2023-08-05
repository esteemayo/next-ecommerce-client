'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Logo = ({ onClose }) => {
  return (
    <StyledLogo href='/' passHref>
      Ecommerce
    </StyledLogo>
  );
};

const StyledLogo = styled(Link)`
  text-decoration: none;
  color: var(--clr-white);
`;

export default Logo;

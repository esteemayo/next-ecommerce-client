'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <Link href='/' passHref>Ecommerce</Link>
      <nav>
        <Link href='/' passHref>Home</Link>
        <Link href='/products' passHref>All products</Link>
        <Link href='/categories' passHref>Categories</Link>
        <Link href='/account' passHref>Account</Link>
        <Link href='/cart' passHref>Cart (0)</Link>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  
`;

export default Header;

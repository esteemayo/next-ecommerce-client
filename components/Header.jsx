'use client';

import Link from 'next/link';
import styled from 'styled-components';

import Center from './Center';

const Header = () => {
  return (
    <StyledHeader>
      <Logo href='/' passHref>Ecommerce</Logo>
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
  background-color: #222;
`;

const Logo = styled(Link)`
  &:active,
  &:visited {
    text-decoration: none;
    color: #fff;
  }
`;

export default Header;

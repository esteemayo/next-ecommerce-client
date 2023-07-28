'use client';

import Link from 'next/link';
import styled from 'styled-components';

import Center from './Center';

const Header = () => {
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href='/' passHref>Ecommerce</Logo>
          <nav>
            <Link href='/' passHref>Home</Link>
            <Link href='/products' passHref>All products</Link>
            <Link href='/categories' passHref>Categories</Link>
            <Link href='/account' passHref>Account</Link>
            <Link href='/cart' passHref>Cart (0)</Link>
          </nav>
        </Wrapper>
      </Center>
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export default Header;

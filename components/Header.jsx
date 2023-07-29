'use client';

import Link from 'next/link';
import styled from 'styled-components';

import Center from './Center';
import { useGlobalContext } from '@/context/CartContext';

const Header = () => {
  const { cart } = useGlobalContext();

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href='/' passHref>Ecommerce</Logo>
          <Nav>
            <NavLink href='/' passHref>Home</NavLink>
            <NavLink href='/products' passHref>All products</NavLink>
            <NavLink href='/categories' passHref>Categories</NavLink>
            <NavLink href='/account' passHref>Account</NavLink>
            <NavLink href='/cart' passHref>Cart ({cart.length})</NavLink>
          </Nav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #222;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #aaa;
`;

export default Header;

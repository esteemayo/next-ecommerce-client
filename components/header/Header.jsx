'use client';

import Link from 'next/link';
import styled from 'styled-components';

import Center from '../Center';
import MenuItem from './MenuItem';

import { navLinks } from '@/data';
import { useGlobalContext } from '@/context/CartContext';

const Header = () => {
  const { cart } = useGlobalContext();

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href='/' passHref>Ecommerce</Logo>
          <Nav>
            <ListContainer>
              {navLinks.map((link) => {
                const { id, url, label } = link;
                return (
                  <MenuItem
                    key={id}
                    url={url}
                    label={label}
                    cart={cart}
                  />
                );
              })}
            </ListContainer>
          </Nav>
          <NavButton></NavButton>
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

const Nav = styled.nav``;

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavButton = styled.button`
  
`;

export default Header;

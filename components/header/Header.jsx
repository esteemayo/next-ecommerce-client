'use client';

import Link from 'next/link';
import styled from 'styled-components';

import Center from '../Center';
import MenuItem from './MenuItem';
import BarsIcon from '../icons/BarsIcon';

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
          <NavButton>
            <BarsIcon />
          </NavButton>
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
  display: block;
  
  @media only screen and (min-width: 48em) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

const NavButton = styled.button`
  border: none;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  color: var(--clr-white);
  cursor: pointer;

  @media only screen and (min-width: 48em) {
    display: none;
  }
`;

export default Header;

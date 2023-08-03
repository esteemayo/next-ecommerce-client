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
          <NavButton>
            <BarsIcon />
          </NavButton>
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
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: var(--clr-secondary-black);
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background-color: var(--clr-secondary-black);

  @media only screen and (min-width: 40em) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    position: static;
  }
`;

const LogoBox = styled.div`
  
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Nav = styled.nav``;

const ListContainer = styled.ul`
  list-style: none;
  display: block;
  /* position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background-color: var(--clr-secondary-black); */
  
  @media only screen and (min-width: 48em) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: static;
    padding: 0;
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

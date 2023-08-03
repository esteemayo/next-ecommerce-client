'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useCallback, useState } from 'react';

import Center from '../Center';
import MenuItem from './MenuItem';

import BarsIcon from '../icons/BarsIcon';
import CloseIcon from '../icons/CloseIcon';

import { navLinks } from '@/data';
import { useGlobalContext } from '@/context/CartContext';

const Header = () => {
  const { cart } = useGlobalContext();
  const [mobileNavActive, setMobileNavActive] = useState(true);

  const toggleHandler = useCallback((e) => {
    e.stopPropagation();
    setMobileNavActive((value) => !value);
  }, []);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <LogoBox>
            <Logo href='/' passHref>Ecommerce</Logo>
            <NavButton onClick={toggleHandler}>
              {!mobileNavActive ? <BarsIcon /> : <CloseIcon />}
            </NavButton>
          </LogoBox>
          <Nav navigation={mobileNavActive}>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

const LogoBox = styled.div`
  @media only screen and (max-width: 40em) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1000;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #fff;
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

  svg {
    color: currentColor;
  }
`;

const Nav = styled.nav`
  ${({ navigation }) => !navigation ? `
    display: none;
  ` : `
    display: block;
  `}
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5rem 2rem 2rem;
  background-color: var(--clr-secondary-black);

  @media only screen and (min-width: 40em) {
    position: static;
  }
`;

const ListContainer = styled.ul`
  list-style: none;
  display: block;
  padding-top: 7rem;
  
  @media only screen and (min-width: 48em) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: static;
    padding: 0;
  }
`;

export default Header;

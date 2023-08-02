'use client';

import Link from 'next/link';
import styled from 'styled-components';

const MenuItem = ({ url, label, cart }) => {
  return (
    <ListItem>
      <NavLink href={url} passHref>
        {label} {url.includes('/cart') && (cart.length)}
      </NavLink>
    </ListItem>
  );
};

const ListItem = styled.li`
  
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #aaa;
`;

export default MenuItem;

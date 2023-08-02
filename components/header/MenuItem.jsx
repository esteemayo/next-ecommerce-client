'use client';

import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuItem = ({ url, label, cart }) => {
  return (
    <ListItem>
      <NavLink href={url} passHref>
        {url.includes('/cart') ? `${label} (${cart.length})` : label}
      </NavLink>
    </ListItem>
  );
};

const ListItem = styled.li``;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #aaa;
`;

export default MenuItem;

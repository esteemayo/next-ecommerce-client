'use client';

import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuItem = ({ url, label, cart, onClose }) => {
  return (
    <ListItem onClick={onClose}>
      <NavLink href={url} passHref>
        {url.includes('/cart') ? `${label} (${cart.length})` : label}
      </NavLink>
    </ListItem>
  );
};

const ListItem = styled.li`
  @media only screen and (max-width: 40em) {
    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }
`;

const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 1rem 0;
  color: #aaa;
`;

MenuItem.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  cart: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MenuItem;

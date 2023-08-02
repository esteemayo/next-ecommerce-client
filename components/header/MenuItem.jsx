'use client';

import Link from 'next/link';
import styled from 'styled-components';

const MenuItem = ({ url, label }) => {
  return (
    <ListItem>
      <NavLink href={url} passHref>{label}</NavLink>
    </ListItem>
  );
};

const ListItem = styled.li`
  
`;

const NavLink = styled(Link)`
  
`;

export default MenuItem;

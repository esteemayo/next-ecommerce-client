'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { ButtonStyle } from './Button';

const ButtonLink = (props) => {
  return <StyledLink {...props} />;
};

const StyledLink = styled(Link)`
  ${ButtonStyle}
`;

export default ButtonLink;

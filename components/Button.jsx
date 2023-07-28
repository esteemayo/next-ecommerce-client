'use client';

import styled, { css } from 'styled-components';

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest} type='button'>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  ${({ white, outline }) => white && !outline && css`
    background-color: var(--clr-white);
    color: var(--clr-primary-black);
  `}

  ${({ primary }) => primary && css`
    background-color: var(--clr-primary-blue);
    color: var(--clr-white);
  `}

  ${({ size }) => size === 'lg' && css`
    font-size: 2rem;
    padding: 1rem 2rem;
  `}
`;

export default Button;

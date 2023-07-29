'use client';

import styled, { css } from 'styled-components';

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

export const ButtonStyle = css`
  border: none;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  svg {
    height: 1.6rem;
    margin-right: 0.5rem;
  }

  ${({ white, outline }) => white && !outline && css`
    background-color: var(--clr-white);
    color: var(--clr-primary-black);
  `}

  ${({ white, outline }) => white && outline && css`
    background-color: transparent;
    color: var(--clr-white);
    border: 1px solid var(--clr-white);
  `}

  ${({ primary, outline }) => primary && !outline && css`
    background-color: var(--clr-primary-blue);
    color: var(--clr-white);
    border: 1px solid var(--clr-primary-blue);
  `}

  ${({ size }) => size === 'lg' && css`
    font-size: 2rem;
    padding: 1rem 2rem;

    svg {
      height: 2rem;
    }
  `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default Button;

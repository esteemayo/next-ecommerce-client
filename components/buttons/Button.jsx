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
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  svg {
    height: 1.6rem;
    margin-right: 0.5rem;
  }

  ${({ block }) => block && css`
    display: block;
    width: 100%;
  `}

  ${({ white, outline }) => white && !outline && css`
    background-color: var(--clr-white);
    color: var(--clr-primary-black);
  `}

  ${({ white, outline }) => white && outline && css`
    background-color: transparent;
    color: var(--clr-white);
    border: 1px solid var(--clr-white);
  `}

  ${({ black, outline }) => black && !outline && css`
    background-color: var(--clr-primary-black);
    color: var(--clr-white);
  `}

  ${({ black, outline }) => black && outline && css`
    background-color: transparent;
    color: var(--clr-primary-black);
    border: 1px solid var(--clr-primary-black);
  `}

  ${({ primary, outline }) => primary && !outline && css`
    background-color: var(--clr-primary-green);
    color: var(--clr-white);
    border: 1px solid var(--clr-primary-green);
  `}

  ${({ primary, outline }) => primary && outline && css`
    background-color: transparent;
    color: var(--clr-primary-green);
    border: 1px solid var(--clr-primary-green);
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

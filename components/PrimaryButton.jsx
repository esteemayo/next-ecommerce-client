'use client';

import styled, { css } from 'styled-components';

const PrimaryButton = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest} type='button'>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  display: inline-block;
  background-color: #5542f6;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  ${({ size }) => size === 'lg' && css`
    font-size: 2rem;
    padding: 1rem 2rem;
  `}
`;

export default PrimaryButton;

'use client';

import styled from 'styled-components';

const PrimaryButton = ({ children }) => {
  return <Button type='button'>{children}</Button>;
};

const Button = styled.button`
  border: none;
  display: inline-block;
  background-color: #5542f6;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default PrimaryButton;

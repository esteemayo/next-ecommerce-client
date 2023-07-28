'use client';

import styled from 'styled-components';

const PrimaryButton = ({ children }) => {
  return <Button type='button'>{children}</Button>;
};

const Button = styled.button`
  border: none;
  display: inline-block;
  background-color: #5542f6;
`;

export default PrimaryButton;

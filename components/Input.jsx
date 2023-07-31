'use client';

import styled from 'styled-components';

const Input = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  display: inline-block;
  font-family: inherit;
  font-size: 1.4rem;
  width: 100%;
  padding: 0.5rem;
  background-color: transparent;
  color: #999;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  outline-color: #ddd;
  caret-color: #999;

  &::placeholder {
    color: #bbb;
  }
`;

export default Input;

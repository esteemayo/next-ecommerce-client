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
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

export default Input;

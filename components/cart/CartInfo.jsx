'use client';

import styled from 'styled-components';

import Input from '@/components/Input';
import WhiteBox from '@/components/WhiteBox';

const CartInfo = ({ onSubmit }) => {
  return (
    <WhiteBox>
      <Heading>Order information</Heading>
      <Form onSubmit={onSubmit}></Form>
    </WhiteBox>
  );
};

const Heading = styled.h2`
  font-weight: 700;
`;

const Form = styled.form``;

export default CartInfo;

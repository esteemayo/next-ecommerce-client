'use client';

import styled from 'styled-components';

import Input from '@/components/Input';
import WhiteBox from '@/components/WhiteBox';

const CartInfo = () => {
  return (
    <WhiteBox>
      <Heading>Order information</Heading>
    </WhiteBox>
  );
};

const Heading = styled.h2`
  font-weight: 700;
`;

export default CartInfo;

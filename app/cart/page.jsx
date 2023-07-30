'use client';

import styled from 'styled-components';
import ClientOnly from '@/components/ClientOnly';

const Cart = () => {
  return (
    <ClientOnly>
      <Container>Cart</Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  
`;

const Wrapper = styled.div`
  
`;

export default Cart;

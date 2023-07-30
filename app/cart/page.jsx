'use client';

import styled from 'styled-components';
import ClientOnly from '@/components/ClientOnly';

const Cart = () => {
  return (
    <ClientOnly>
      <div>Cart</div>
    </ClientOnly>
  );
};

const Container = styled.main`
  
`;

export default Cart;

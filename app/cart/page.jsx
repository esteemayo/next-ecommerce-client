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

export default Cart;

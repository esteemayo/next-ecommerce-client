'use client';

import styled from 'styled-components';
import ClientOnly from '@/components/ClientOnly';

const Cart = () => {
  return (
    <ClientOnly>
      <Container>
        <Wrapper></Wrapper>
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  
`;

const Wrapper = styled.div`
  
`;

export default Cart;

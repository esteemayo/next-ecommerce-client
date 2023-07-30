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
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 4rem;
`;

const Box = styled.div`
  background-color: var(--clr-white);
  border-radius: 1rem;
`;

export default Cart;

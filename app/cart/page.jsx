'use client';

import styled from 'styled-components';

import Button from '@/components/Button';
import Center from '@/components/Center';
import ClientOnly from '@/components/ClientOnly';

const Cart = () => {
  return (
    <ClientOnly>
      <Container>
        <Center>
          <Wrapper>
            <Box>1</Box>
            <Box>
              <Heading>Order information</Heading>
              <Button type='button' block={1} primary={1}>
                Continue to payment
              </Button>
            </Box>
          </Wrapper>
        </Center>
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  margin-top: 4rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 4rem;
`;

const Box = styled.div`
  background-color: var(--clr-white);
  border-radius: 1rem;
  padding: 3rem;
`;

const Heading = styled.h2`
  
`;

export default Cart;

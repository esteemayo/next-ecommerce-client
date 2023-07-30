'use client';

import styled from 'styled-components';
import { useCallback } from 'react';

import Button from '@/components/Button';
import ClientOnly from '@/components/ClientOnly';
import Center from '@/components/Center';

import { useGlobalContext } from '@/context/CartContext';

const Cart = () => {
  const { cart } = useGlobalContext();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <ClientOnly>
      <Container>
        <Center>
          <Wrapper>
            <Box>
              {!cart?.length && (
                <div>Your cart is empty</div>
              )}
            </Box>
            <Box>
              <Heading>Order information</Heading>
              <Form onSubmit={handleSubmit}>
                <Input type='text' placeholder='Address' />
                <Input type='text' placeholder='Address2' />
              </Form>
              <Button
                type='button'
                black={1}
                block={1}
              >
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
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
`;

const Box = styled.div`
  background-color: var(--clr-white);
  border-radius: 1rem;
  padding: 3rem;
`;

const Heading = styled.h2`
  
`;

const Form = styled.form`
  
`;

const Input = styled.input`
  
`;

export default Cart;

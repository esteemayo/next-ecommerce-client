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
              <Form></Form>
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

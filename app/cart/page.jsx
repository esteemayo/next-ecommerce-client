'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

import Button from '@/components/Button';
import ClientOnly from '@/components/ClientOnly';
import Center from '@/components/Center';

import { getCarts } from '@/services/cartService';
import { useGlobalContext } from '@/context/CartContext';

const Cart = () => {
  const { cart } = useGlobalContext();
  const [products, setProducts] = useState([]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const numberOfProducts = useCallback((productId) => {
    return cart.filter((id) => id === productId).length;
  }, [cart]);

  useEffect(() => {
    if (cart.length > 0) {
      (async () => {
        try {
          const { data } = await getCarts({ ids: cart });
          setProducts(data);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [cart]);

  return (
    <ClientOnly>
      <Container>
        <Center>
          <Wrapper>
            <Box>
              <Heading>Cart</Heading>
              {!cart?.length && (
                <EmptyMessage>Your cart is empty</EmptyMessage>
              )}
              <Table>
                <Thead>
                  <Tr></Tr>
                </Thead>
              </Table>
              {products?.length > 0 && (
                <>
                  {products.map((item, index) => {
                    const { _id: id } = item;
                    return (
                      <div key={index}>
                        {item.title}: {numberOfProducts(id)}
                      </div>
                    )
                  })}
                </>
              )}
            </Box>
            {!!cart?.length && (
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
            )}
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

const EmptyMessage = styled.div`
  
`;

const Table = styled.table`

`;

const Thead = styled.thead`

`;

const Tr = styled.tr`

`;

const Th =styled.hd`

`;

const Form = styled.form`
  
`;

const Input = styled.input`
  
`;

export default Cart;

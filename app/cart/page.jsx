'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import Button from '@/components/Button';
import ClientOnly from '@/components/ClientOnly';
import Table from '@/components/Table';
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
              {products?.length > 0 && (
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Products</Th>
                      <Th>Quantity</Th>
                      <Th>Price</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {products.map((item, index) => {
                      const { _id: id, title, price, images } = item;
                      return (
                        <Tr key={index}>
                          <Td>
                            <ImageContainer>
                              <Image
                                src={images[0]}
                                width={80}
                                height={80}
                                alt=''
                              />
                            </ImageContainer>
                            {title}
                          </Td>
                          <Td>{numberOfProducts(id)}</Td>
                          <Td>{price}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
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

const Thead = styled.thead`

`;

const Tbody = styled.tbody`

`;

const Tr = styled.tr`

`;

const Th = styled.th`

`;

const Td = styled.td`
  
`;

const ImageContainer = styled.div`
  max-width: 10rem;
  max-height: 10rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 8rem;
    max-height: 8rem;
    object-fit: cover;
  }
`;

const Form = styled.form`
  
`;

const Input = styled.input`
  
`;

export default Cart;

'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import Button from '@/components/Button';
import ClientOnly from '@/components/ClientOnly';
import Center from '@/components/Center';
import CartItems from '@/components/cart/CartItems';
import Input from '@/components/Input';

import { useGlobalContext } from '@/context/CartContext';

const initialState = {
  name: '',
  email: '',
  city: '',
  postalCode: '',
  streetAddress: '',
  country: '',
};

const Cart = () => {
  const {
    cart,
    products,
    total,
    addProduct,
    removeProduct,
  } = useGlobalContext();

  const [data, setData] = useState(initialState);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const numberOfProducts = useCallback((productId) => {
    return cart.filter((id) => id === productId).length;
  }, [cart]);

  const totalPrice = useCallback((price, productId) => {
    return price * numberOfProducts(productId);
  }, [numberOfProducts]);

  const handleIncrement = useCallback((productId) => {
    addProduct(productId);
  }, [addProduct]);

  const handleDecrement = useCallback((productId) => {
    removeProduct(productId);
  }, [removeProduct]);

  return (
    <ClientOnly>
      <Container>
        <Center>
          <Wrapper>
            <Box>
              <CartItems
                cart={cart}
                products={products}
                total={total}
                totalPrice={totalPrice}
                numberOfProducts={numberOfProducts}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            </Box>
            {!!cart?.length && (
              <Box>
                <Heading>Order information</Heading>
                <Form onSubmit={handleSubmit} action='/api/checkout'>
                  <Input
                    type='text'
                    name='name'
                    value={name}
                    placeholder='Name'
                    onChange={handleChange}
                  />
                  <Input
                    type='email'
                    name='email'
                    value={email}
                    placeholder='Email'
                    onChange={handleChange}
                  />
                  <CityHolder>
                    <Input
                      type='text'
                      name='city'
                      value={city}
                      placeholder='City'
                      onChange={handleChange}
                    />
                    <Input
                      type='text'
                      name='postalCode'
                      value={postalCode}
                      placeholder='Postal Code'
                      onChange={handleChange}
                    />
                  </CityHolder>
                  <Input
                    type='text'
                    name='streetAddress'
                    value={streetAddress}
                    placeholder='Street Address'
                    onChange={handleChange}
                  />
                  <Input
                    type='text'
                    name='country'
                    value={country}
                    placeholder='Country'
                    onChange={handleChange}
                  />
                  <Input
                    type='hidden'
                    name='products'
                    value={cart.join(',')}
                  />
                  <Button
                    type='submit'
                    black={1}
                    block={1}
                  >
                    Continue to payment
                  </Button>
                </Form>
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
  font-weight: 700;
`;

const Form = styled.form``;

const CityHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default Cart;

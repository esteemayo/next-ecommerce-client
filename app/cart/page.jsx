'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

import Center from '@/components/Center';
import ClientOnly from '@/components/ClientOnly';
import WhiteBox from '@/components/WhiteBox';
import CartItems from '@/components/cart/CartItems';
import CartInfo from '@/components/cart/CartInfo';

import { useGlobalContext } from '@/context/CartContext';
import { createCheckout } from '@/services/checkoutService';

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
    clearCart,
  } = useGlobalContext();

  const [data, setData] = useState(initialState);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleClear = useCallback(() => {
    setData(initialState);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const newOrder = {
      ...data,
      cart,
    };

    try {
      const res = await createCheckout({ ...newOrder });

      if (res.data.url) {
        window.location = res.data.url;
      }

      handleClear();
    } catch (err) {
      console.log(err);
    }
  }, [cart, data, handleClear]);

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

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.location.href.includes('success')) {
      clearCart();
      setIsSuccess(true);
    }
  }, []);

  if (isSuccess) {
    return (
      <ClientOnly>
        <Container>
          <Center>
            <Wrapper>
              <WhiteBox>
                <SuccessHeading>Thanks for your order!</SuccessHeading>
                <SuccessText>We will email you when your order will be sent.</SuccessText>
              </WhiteBox>
            </Wrapper>
          </Center>
        </Container>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <Center>
          <Wrapper>
            <WhiteBox>
              <CartItems
                cart={cart}
                products={products}
                total={total}
                totalPrice={totalPrice}
                numberOfProducts={numberOfProducts}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            </WhiteBox>
            {!!cart?.length && (
              <CartInfo
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
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
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media only screen and (min-width: 48em) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`;

const SuccessHeading = styled.h1`
  font-weight: 500;
`;

const SuccessText = styled.p``;

export default Cart;

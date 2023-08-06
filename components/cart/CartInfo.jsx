'use client';

import styled from 'styled-components';

import Input from '@/components/Input';
import Button from '@/components/buttons/Button';
import WhiteBox from '@/components/WhiteBox';

const CartInfo = ({ onChange, onSubmit }) => {
  return (
    <WhiteBox>
      <Container>
        <Heading>Order information</Heading>
        <Form onSubmit={onSubmit}>
          <Input
            type='text'
            name='name'
            placeholder='Name'
            onChange={onChange}
          />
          <Input
            type='email'
            name='email'
            placeholder='Email'
            onChange={onChange}
          />
          <CityHolder>
            <Input
              type='text'
              name='city'
              placeholder='City'
              onChange={onChange}
            />
            <Input
              type='text'
              name='postalCode'
              placeholder='Postal Code'
              onChange={onChange}
            />
          </CityHolder>
          <Input
            type='text'
            name='streetAddress'
            placeholder='Street Address'
            onChange={onChange}
          />
          <Input
            type='text'
            name='country'
            placeholder='Country'
            onChange={onChange}
          />
          <Button type='submit' black={1} block={1}>
            Continue to payment
          </Button>
        </Form>
      </Container>
    </WhiteBox>
  );
};

const Container = styled.div`
  
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

export default CartInfo;

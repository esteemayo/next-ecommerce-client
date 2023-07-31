'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';

import CartItem from './CartItem';
import Table from '@/components/Table';

const CartItems = ({
  cart,
  products,
  total,
  totalPrice,
  numberOfProducts,
  onIncrement,
  onDecrement,
}) => {
  return (
    <Container>
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
            {products.map((item) => {
              return (
                <CartItem
                  {...item}
                  key={item._id}
                  totalPrice={totalPrice}
                  total={total}
                  numberOfProducts={numberOfProducts}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                />
              );
            })}
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td>
                <NumericFormat
                  value={total}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      )}
    </Container>
  );
};

const Container = styled.div`
  
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

CartItems.propTypes = {
  cart: PropTypes.array.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.array.isRequired,
    }),
  ),
  totalPrice: PropTypes.func.isRequired,
  numberOfProducts: PropTypes.func.isRequired,
};

export default CartItems;

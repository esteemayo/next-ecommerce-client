'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import CartItem from './CartItem';
import Table from '@/components/Table';

const CartItems = ({
  cart,
  products,
  totalPrice,
  numberOfProducts,
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
                  numberOfProducts={numberOfProducts}
                />
              );
            })}
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

const ProductInfoCell = styled.td`
  padding: 1rem 0;
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

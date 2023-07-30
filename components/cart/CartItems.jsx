'use client';

import styled from 'styled-components';
import { useCallback } from 'react';
import { NumericFormat } from 'react-number-format';
import Image from 'next/image';

import Table from '@/components/Table';

const CartItems = ({ cart, products }) => {
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
            {products.map((item, index) => {
              const { _id: id, title, price, images } = item;
              return (
                <Tr key={index}>
                  <ProductInfoCell>
                    <ImageContainer>
                      <Image
                        src={images[0]}
                        width={80}
                        height={80}
                        alt=''
                      />
                    </ImageContainer>
                    {title}
                  </ProductInfoCell>
                  <Td>{numberOfProducts(id)}</Td>
                  <Td>
                    <NumericFormat
                      value={price}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                    />
                  </Td>
                </Tr>
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

const ImageContainer = styled.div`
  max-width: 10rem;
  max-height: 10rem;
  padding: 1rem;
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

export default CartItems;

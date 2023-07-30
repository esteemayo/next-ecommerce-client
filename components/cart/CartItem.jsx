'use client';

import styled from 'styled-components';

const CartItem = () => {
  return (
    <div>CartItem</div>
  );
};

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

export default CartItem;

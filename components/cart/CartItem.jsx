'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';

const CartItem = ({ title, price, images }) => {
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

'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';
import PropTypes from 'prop-types';

import Button from '@/components/Button';

const CartItem = ({
  _id: id,
  title,
  price,
  images,
  totalPrice,
  numberOfProducts,
}) => {
  return (
    <Tr>
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
      <Td>
        <Button type='button'>-</Button>
        <QuantityLabel>{numberOfProducts(id)}</QuantityLabel>
        <Button type='button'>+</Button>
      </Td>
      <Td>
        <NumericFormat
          value={totalPrice(price, id)}
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

const QuantityLabel = styled.span`
  
`;

CartItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  totalPrice: PropTypes.func.isRequired,
  numberOfProducts: PropTypes.func.isRequired,
};

export default CartItem;

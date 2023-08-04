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
  onIncrement,
  onDecrement,
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
        <Button type='button' onClick={() => onDecrement(id)}>-</Button>
        <QuantityLabel>{numberOfProducts(id)}</QuantityLabel>
        <Button type='button' onClick={() => onIncrement(id)}>+</Button>
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

const Tr = styled.tr``;

const Td = styled.td``;

const ProductInfoCell = styled.td`
  padding: 1rem 0;
`;

const ImageContainer = styled.div`
  max-width: 10rem;
  max-height: 10rem;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    padding: 1rem;
  }

  img {
    max-width: 6rem;
    max-height: 6rem;
    object-fit: cover;

    @media only screen and (min-width: 768px) {
      max-width: 8rem;
      max-height: 8rem;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 1rem;

  @media only screen and (max-width: 18.75em) {
    display: block;
    padding: 3px 1.5rem;
  }
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

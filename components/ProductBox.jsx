'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';

import Button from './Button';
import CartIcon from './icons/CartIcon';

const ProductBox = ({
  title,
  slug,
  description,
  price,
  images,
}) => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={images[0]}
            width={175}
            height={80}
            alt=''
          />
        </ImageWrapper>
      </Wrapper>
      <ProductInfoContainer>
        <Title>{title}</Title>
        <PriceContainer>
          <Price>
            <NumericFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </Price>
          <Button type='button' primary={1}>
            <CartIcon />
          </Button>
        </PriceContainer>
      </ProductInfoContainer>
    </Container>
  );
};

const Container = styled.article`
  
`;

const Wrapper = styled.div`
  background-color: var(--clr-white);
  padding: 2rem;
  height: 12rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  img {
    max-width: 100%;
    max-height: 8rem;
    object-fit: cover;
  }
`;

const ImageWrapper = styled.div``;

const Title = styled.h2`
  font-weight: normal;
  font-size: 1.3rem;
`;

const ProductInfoContainer = styled.div`
  margin-top: 0.5rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

export default ProductBox;

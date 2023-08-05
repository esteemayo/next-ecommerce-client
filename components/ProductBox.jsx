'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import Button from './buttons/Button';
import { useGlobalContext } from '@/context/CartContext';

const ProductBox = ({ _id: id, title, slug, price, images }) => {
  const { addProduct } = useGlobalContext();

  const url = useMemo(() => {
    return `/product/${encodeURIComponent(slug)}`;
  }, [slug]);

  return (
    <Container>
      <Wrapper href={url} passHref>
        <ImageWrapper>
          <Image
            src={images?.[0]}
            width={175}
            height={80}
            alt=''
          />
        </ImageWrapper>
      </Wrapper>
      <ProductInfoContainer>
        <Title href={url} passHref>{title}</Title>
        <PriceContainer>
          <Price>
            <NumericFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </Price>
          <Button
            type='button'
            primary={1}
            outline={1}
            onClick={() => addProduct(id)}
          >
            Add to cart
          </Button>
        </PriceContainer>
      </ProductInfoContainer>
    </Container>
  );
};

const Container = styled.article``;

const Wrapper = styled(Link)`
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

const Title = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  font-size: 1.3rem;
  color: inherit;
`;

const ProductInfoContainer = styled.div`
  margin-top: 0.5rem;
`;

const PriceContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
  
  @media only screen and (min-width: 48em) {
    display: flex;
    gap: 0.5rem;
  }

  button {
    @media only screen and (max-width: 48em) {
      width: 100%;
    }
  }
`;

const Price = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  text-align: right;
  
  @media only screen and (min-width: 48em) {
    font-size: 1.8rem;
    font-weight: 700;
    text-align: left;;
  }
`;

ProductBox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
};

export default ProductBox;

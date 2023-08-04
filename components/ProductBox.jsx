'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import Button from './Button';
import { useGlobalContext } from '@/context/CartContext';

const ProductBox = ({ _id: id, title, slug, price, images }) => {
  const { addProduct } = useGlobalContext();

  const url = useMemo(() => {
    return `/products/${encodeURIComponent(slug)}`;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2px;
  
  @media only screen and (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
  }
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

ProductBox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
};

export default ProductBox;

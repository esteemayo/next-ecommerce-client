'use client';

import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';
import { useEffect, useState } from 'react';

import Center from '@/components/Center';
import ClientOnly from '@/components/ClientOnly';
import Heading from '@/components/Heading';
import ProductImages from '@/components/ProductImages';
import Button from '@/components/buttons/Button';
import CartIcon from '@/components/icons/CartIcon';
import WhiteBox from '@/components/WhiteBox';

import { useGlobalContext } from '@/context/CartContext';
import { getProductBySlug } from '@/services/productService';

const Product = ({ params: { slug } }) => {
  const { addProduct } = useGlobalContext();
  const [product, setProduct] = useState({});

  useEffect(() => {
    slug && (async () => {
      try {
        const { data } = await getProductBySlug(slug);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [slug]);

  return (
    <ClientOnly>
      <Container>
        <Center>
          <Wrapper>
            <WhiteBox>
              <ImageContainer>
                <ProductImages images={product?.images} />
              </ImageContainer>
            </WhiteBox>
            <ProductContainer>
              <Heading>{product.title}</Heading>
              <Description>{product.description}</Description>
              <PriceRow>
                <Price>
                  <NumericFormat
                    value={product.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </Price>
                <Button
                  type='button'
                  primary
                  onClick={() => addProduct(product._id)}
                >
                  <CartIcon />
                  Add to cart
                </Button>
              </PriceRow>
            </ProductContainer>
          </Wrapper>
        </Center>
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  margin: 4rem 0;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media only screen and (min-width: 48em) {
    grid-template-columns: 0.8fr 1.2fr;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ProductContainer = styled.div``;

const Description = styled.p`
  text-align: justify;
  line-height: 1.4;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const Price = styled.span`
  font-size: 2rem;
`;

export default Product;

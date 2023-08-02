'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Center from '@/components/Center';
import ClientOnly from '@/components/ClientOnly';
import Heading from '@/components/Heading';

import ProductImages from '@/components/ProductImages';
import WhiteBox from '@/components/WhiteBox';
import { getProductBySlug } from '@/services/productService';

const Product = ({ params: { slug } }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
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
            <div>
              <Heading>{product.title}</Heading>
              <p>{product.description}</p>
            </div>
          </Wrapper>
        </Center>
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  margin-top: 4rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 4rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Description = styled.p`
  
`;

export default Product;

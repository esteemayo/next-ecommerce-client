'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Center from '@/components/Center';
import ClientOnly from '@/components/ClientOnly';
import Heading from '@/components/Heading';

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
            <Heading>{product.title}</Heading>
          </Wrapper>
        </Center>
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main``;

const Wrapper = styled.div`
  
`;

export default Product;

'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Center from '@/components/Center';
import ClientOnly from '@/components/ClientOnly';

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
        <Center>Product</Center>
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  
`;

export default Product;

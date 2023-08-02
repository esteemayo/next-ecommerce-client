'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Center from '@/components/Center';
import ClientOnly from '@/components/ClientOnly';
import ProductsGrid from '@/components/ProductsGrid';

import { getProducts } from '@/services/productService';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <ClientOnly>
      <Container>
        <Center>
          <Heading>All products</Heading>
          <ProductsGrid products={products} />
        </Center>
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  
`;

const Heading = styled.h2`
  font-size: 1.5em;
`;

export default Products;

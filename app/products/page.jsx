'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Center from '@/components/Center';
import ProductsGrid from '@/components/products/ProductsGrid';
import Heading from '@/components/Heading';
import ClientOnly from '@/components/ClientOnly';

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
  padding: 6rem 0;
`;

export default Products;

'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Featured from '@/components/Featured';
import NewProducts from '@/components/products/NewProducts';
import ClientOnly from '@/components/ClientOnly';

import { getNewProducts, getProductById } from '@/services/productService';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState({});
  const productId = '64c3d809744e41a377324a5f';

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProductById(productId);
        setFeaturedProduct(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getNewProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <ClientOnly>
      <Container>
        <Featured product={featuredProduct} />
        <NewProducts products={products} />
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  
`;

export default Home;

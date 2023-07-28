'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Featured from '@/components/Featured';
import { getProductById } from '@/services/productService';

const Home = () => {
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

  return (
    <Container>
      <Featured />
    </Container>
  );
};

const Container = styled.main`
  
`;

export default Home;

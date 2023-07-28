'use client';

import styled from 'styled-components';
import { useState } from 'react';

import Featured from '@/components/Featured';

const Home = () => {
  const [featuredProduct, setFeaturedProduct] = useState({});

  return (
    <Container>
      <Featured />
    </Container>
  );
};

const Container = styled.main`
  
`;

export default Home;

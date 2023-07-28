'use client';

import styled from 'styled-components';
import Center from './Center';

const Featured = () => {
  return (
    <Container>
      <Center>
        <Heading>Pro anywhere</Heading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam velit corrupti
          vitae eius consequuntur sint quam alias expedita ipsa eum ut at, aut animi, quo reiciendis
          deleniti totam. Minus!
        </Description>
      </Center>
    </Container>
  );
};

const Container = styled.main`
  padding: 5rem 0;
  background-color: #222;
  color: #fff;
`;

const Heading = styled.h1`
  font-weight: normal;
`;

const Description = styled.p`
  color: #aaa;
  font-size: 1.5rem;
`;

const Wrapper = styled.div`
  
`;

export default Featured;

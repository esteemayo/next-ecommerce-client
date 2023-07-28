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
  background-color: #222;
`;

const Heading = styled.h1`
  
`;

const Description = styled.p`
  
`;

export default Featured;

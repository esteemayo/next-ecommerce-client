'use client';

import styled from 'styled-components';
import Image from 'next/image';

import Center from './Center';

const Featured = () => {
  return (
    <Container>
      <Center>
        <Wrapper>
          <Left>
            <Heading>Pro anywhere</Heading>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam velit corrupti
              vitae eius consequuntur sint quam alias expedita ipsa eum ut at, aut animi, quo reiciendis
              deleniti totam. Minus!
            </Description>
          </Left>
          <Right>
            <Image
              src='https://dawid-next-ecommerce.s3.amazonaws.com/1678631582100.jpeg'
              width={500}
              height={500}
              alt=''
            />
          </Right>
        </Wrapper>
      </Center>
    </Container>
  );
};

const Container = styled.main`
  padding: 5rem 0;
  background-color: #222;
  color: #fff;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
`;

const Left = styled.div`
  
`;

const Heading = styled.h1`
  font-weight: normal;
`;

const Description = styled.p`
  color: #aaa;
  font-size: 1.5rem;
`;

const Right = styled.div`
  img {
    max-width: 100%;
  }
`;

export default Featured;

'use client';

import styled from 'styled-components';
import Image from 'next/image';

import Center from './Center';
import PrimaryButton from './PrimaryButton';

const Featured = () => {
  return (
    <Container>
      <Center>
        <Wrapper>
          <Left>
            <LeftWrapper>
              <Heading>Pro anywhere</Heading>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam velit corrupti
                vitae eius consequuntur sint quam alias expedita ipsa eum ut at, aut animi, quo reiciendis
                deleniti totam. Minus!
              </Description>
              <ButtonContainer>
                <Button type='button'>Read more</Button>
                <PrimaryButton size='lg'>Add to cart</PrimaryButton>
              </ButtonContainer>
            </LeftWrapper>
          </Left>
          <Right>
            <Image
              src='https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png'
              width={500}
              height={250}
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
  grid-template-columns: 0.8fr 1.2fr;
  gap: 4rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

const Left = styled.div`
  
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const Heading = styled.h1`
  font-weight: normal;
`;

const Description = styled.p`
  color: #aaa;
  font-size: 1.5rem;
`;

const ButtonContainer = styled.div`
  
`;

const Button = styled.button`
  
`;

const Right = styled.div`
  img {
    max-width: 100%;
    object-fit: cover;
  }
`;

export default Featured;

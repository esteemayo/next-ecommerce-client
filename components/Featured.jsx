'use client';

import styled from 'styled-components';
import Image from 'next/image';

import Button from './Button';
import ButtonLink from './ButtonLink';
import Center from './Center';

const Featured = ({ product }) => {
  return (
    <Container>
      <Center>
        <Wrapper>
          <Left>
            <LeftWrapper>
              <Heading>{product.title}</Heading>
              <Description>{product.description}</Description>
              <ButtonWrapper>
                <ButtonLink
                  href={`/products/${encodeURIComponent(product.slug)}`}
                  passHref
                  outline
                  white
                >
                  Read more
                </ButtonLink>
                <Button primary type='button'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
                  </svg>
                  Add to cart
                </Button>
              </ButtonWrapper>
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
  grid-template-columns: 1.1fr 0.9fr;
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
  font-size: 4rem;
`;

const Description = styled.p`
  color: #aaa;
  font-size: 1.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Right = styled.div`
  img {
    max-width: 100%;
    object-fit: cover;
  }
`;

export default Featured;

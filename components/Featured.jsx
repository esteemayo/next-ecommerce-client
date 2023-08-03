'use client';

import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from './Button';
import ButtonLink from './ButtonLink';
import Center from './Center';
import CartIcon from './icons/CartIcon';

import { useGlobalContext } from '@/context/CartContext';

const Featured = ({ product }) => {
  const { addProduct } = useGlobalContext();

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
                  outline={1}
                  white={1}
                >
                  Read more
                </ButtonLink>
                <Button
                  white={1}
                  type='button'
                  onClick={() => addProduct(product._id)}
                >
                  <CartIcon />
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

const Container = styled.section`
  padding: 5rem 0;
  background-color: #222;
  color: #fff;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  div:nth-child(1) {
    order: 2;
  }
  
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;

    div:nth-child(1) {
      order: 0;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

const Left = styled.div``;

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
  max-width: 100%;
  max-height: 20rem;
  object-fit: cover;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 768px) {
    img {
      max-width: 100%;
    }
  }
`;

Featured.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Featured;

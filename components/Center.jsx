import styled from 'styled-components';

const Center = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 80rem;
  margin: 0 2rem;
`;

export default Center;

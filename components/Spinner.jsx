'use client';

import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <Container>
      <ClipLoader
        size={30}
        color='#0d3d29'
        speedMultiplier={false}
      />
    </Container>
  );
};

const Container = styled.section`
  
`;

export default Spinner;

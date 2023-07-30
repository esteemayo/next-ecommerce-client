'use client';

import styled from 'styled-components';
import Image from 'next/image';

const Table = (props) => {
  return <StyledTable {...props} />;
};

const StyledTable = styled.table`
  width: 100%;

  th {
    text-align: left;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    color: #ccc;
  }
`;

export default Table;

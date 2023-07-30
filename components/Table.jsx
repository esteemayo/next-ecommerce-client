'use client';

import styled from 'styled-components';

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

  td {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default Table;

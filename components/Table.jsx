'use client';

import styled from 'styled-components';

const Table = (props) => {
  return <StyledTable {...props} />;
};

const StyledTable = styled.table`
  width: 100%;
`;

export default Table;

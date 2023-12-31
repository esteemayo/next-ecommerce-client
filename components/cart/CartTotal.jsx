'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';

const CartTotal = ({ total }) => {
  return (
    <Container>
      <NumericFormat
        value={total}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  font-weight: 700;
  color: inherit;
`;

CartTotal.propTypes = {
  total: PropTypes.number.isRequired,
};

export default CartTotal;

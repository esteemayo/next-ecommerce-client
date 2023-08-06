'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';

const CartTotal = ({ total }) => {
  return (
    <NumericFormat
      value={total}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
    />
  );
};

CartTotal.propTypes = {
  total: PropTypes.number.isRequired,
};

export default CartTotal;

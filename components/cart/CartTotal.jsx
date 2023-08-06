'use client';

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

export default CartTotal;

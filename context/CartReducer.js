import { ADD_TO_CART } from './CartTypes';

const CartReducer = (state, { payload, type }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    default:
      return state;
  };
};

export default CartReducer;

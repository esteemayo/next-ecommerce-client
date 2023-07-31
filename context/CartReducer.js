import { ADD_TO_CART, FETCH_CART_PRODUCT, GET_TOTALS, REMOVE_FROM_CART } from './CartTypes';

const CartReducer = (state, { payload, type }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case FETCH_CART_PRODUCT:
      return {
        ...state,
        products: payload,
      };

    case REMOVE_FROM_CART:
      let newCart;
      const index = state.cart.indexOf(payload);
      if (index !== -1) {
        newCart = state.cart.filter((cartItem, cartIndex) => cartIndex !== index);
      }

      return {
        ...state,
        cart: newCart,
      };

    case GET_TOTALS:
      let total;
      for (const productId of state.cart) {
        total = state.products.find((item) => item === productId).price || 0;
      }

      return {
        ...state,
        total,
      };

    default:
      return state;
  };
};

export default CartReducer;

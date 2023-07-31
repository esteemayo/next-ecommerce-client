import * as actions from './CartTypes';

const CartReducer = (state, { payload, type }) => {
  switch (type) {
    case actions.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case actions.FETCH_CART_PRODUCT:
      return {
        ...state,
        products: payload,
      };

    case actions.REMOVE_FROM_CART:
      let newCart;
      const index = state.cart.indexOf(payload);
      if (index !== -1) {
        newCart = state.cart.filter((_, cartIndex) => cartIndex !== index);
      }

      return {
        ...state,
        cart: newCart,
      };

    case actions.CLEAR_CART_PRODUCT:
      return {
        ...state,
        products: [],
      };

    case actions.GET_TOTALS:
      let total;
      for (const productId of state.cart) {
        const price = state.products.find((item) => item._id === productId)?.price || 0;
        state.total += price;
        total = state.total;
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

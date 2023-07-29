import { createContext, useContext, useReducer } from 'react';

import CartReducer from './CartReducer';
import { ADD_TO_CART } from './CartTypes';

const INITIAL_STATE = {
  cart: [],
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  const addToCart = (productId) => {
    dispatch({
      type: ADD_TO_CART,
      payload: productId,
    });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CartContext);
};

export default CartProvider;

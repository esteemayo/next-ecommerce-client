import { createContext, useContext, useReducer } from 'react';
import CartReducer from './CartReducer';

const INITIAL_STATE = {
  cart: [],
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  return (
    <CartContext.Provider value={{ ...state }}>
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CartContext);
};

export default CartProvider;

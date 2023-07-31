import { createContext, useContext, useEffect, useReducer } from 'react';

import CartReducer from './CartReducer';
import { ADD_TO_CART, FETCH_CART_PRODUCT, REMOVE_FROM_CART } from './CartTypes';

import { getCarts } from '@/services/cartService';
import { cartKey, getFromStorage, setToStorage } from '@/utils';

const cart = getFromStorage(cartKey);

const INITIAL_STATE = {
  cart: cart ?? [],
  products: [],
  total: 0,
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  const addProduct = (productId) => {
    dispatch({
      type: ADD_TO_CART,
      payload: productId,
    });
  };

  const removeProduct = (productId) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });
  };

  useEffect(() => {
    if (state.cart?.length > 0) {
      setToStorage(cartKey, state.cart);
    }
  }, [state.cart]);

  useEffect(() => {
    if (state.cart.length > 0) {
      (async () => {
        try {
          const { data } = await getCarts({ ids: state.cart });
          dispatch({
            type: FETCH_CART_PRODUCT,
            payload: data,
          });
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CartContext);
};

export default CartProvider;

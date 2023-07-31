import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import * as actions from './CartTypes';
import CartReducer from './CartReducer';

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
      type: actions.ADD_TO_CART,
      payload: productId,
    });
  };

  const removeProduct = (productId) => {
    dispatch({
      type: actions.REMOVE_FROM_CART,
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
            type: actions.FETCH_CART_PRODUCT,
            payload: data,
          });
        } catch (err) {
          console.log(err);
        }
      })();
    } else {
      dispatch({
        type: actions.CLEAR_CART_PRODUCT,
      });
    }
  }, [state.cart]);

  useEffect(() => {
    dispatch({
      type: actions.GET_TOTALS,
    });
  }, [state.products]);

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

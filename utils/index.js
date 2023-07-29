export const cartKey = 'cart';

export const getFromStorage = (key) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key));
  }
}

export const setToStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
}

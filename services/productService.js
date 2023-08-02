import http from './httpService';

const apiEndpoint = '/products';

export const getProducts = () => http.get(apiEndpoint);

export const getNewProducts = () => http.get(`${apiEndpoint}/new`);

export const getProductById = (productId) =>
  http.get(`${apiEndpoint}/${productId}`);

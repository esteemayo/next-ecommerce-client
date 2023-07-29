import http from './httpService';

const apiEndpoint = '/products';

export const getNewProducts = () => http.get(`${apiEndpoint}/new`);

export const getProductById = (productId) =>
  http.get(`${apiEndpoint}/${productId}`);

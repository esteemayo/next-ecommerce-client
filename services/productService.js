import http from './httpService';

const apiEndpoint = '/products';

export const getProductById = (productId) =>
  http.get(`${apiEndpoint}/${productId}`);

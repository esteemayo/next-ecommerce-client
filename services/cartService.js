import http from './httpService';

const apiEndpoint = '/carts';

export const getCarts = (productId) => http.post(apiEndpoint, productId);

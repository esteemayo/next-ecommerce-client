import http from './httpService';

const apiEndpoint = '/products';

const productUrl = (productId) => `${apiEndpoint}/${productId}`;

export const getProducts = () => http.get(apiEndpoint);

export const getNewProducts = () => http.get(`${apiEndpoint}/new`);

export const getProductById = (productId) =>
  http.get(productUrl(productId));

export const getProductBySlug = (slug) =>
  http.get(`${apiEndpoint}/details/${slug}`);

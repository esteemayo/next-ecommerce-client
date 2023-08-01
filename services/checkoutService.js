import http from './httpService';

const apiEndpoint = '/checkout';

export const createCheckout = (data) => http.post(apiEndpoint, data);

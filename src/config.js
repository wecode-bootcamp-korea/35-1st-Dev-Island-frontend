const BASE_URL = 'http://10.58.3.58:8000';

const API = {
  signin: `${BASE_URL}/users/login`,
  signup: `${BASE_URL}/users/signup`,
  product: `${BASE_URL}/products`,
  productDetail: `${BASE_URL}/products/`,
  cart: `${BASE_URL}/carts`,
  order: `${BASE_URL}/myorder`,
  moveOrder: `${BASE_URL}/orders/neworder`,
};

export default API;

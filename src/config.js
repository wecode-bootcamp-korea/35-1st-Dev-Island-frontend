const BASE_URL = 'http://10.58.6.177:8000';

const API = {
  signin: `${BASE_URL}/users/login`,
  signup: `${BASE_URL}/users/signup`,
  product: `${BASE_URL}/product`,
  productDetail: `${BASE_URL}/product/detail/`,
  cart: `${BASE_URL}/cart`,
};

export default API;

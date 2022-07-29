const BASE_URL = 'http://3.39.230.223:8000';
const API = {
  signin: `${BASE_URL}/users/login`,
  signup: `${BASE_URL}/users/signup`,
  product: `${BASE_URL}/products`,
  productDetail: `${BASE_URL}/products`,
  cart: `${BASE_URL}/carts`,
  order: `${BASE_URL}/myorder`,
};

export default API;

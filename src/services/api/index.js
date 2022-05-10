const API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
  auth: {
    login: `${API}/api/${API_VERSION}/auth/login`,
    profile: `${API}/api/${API_VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${API_VERSION}/products/${id}`,
  },
};

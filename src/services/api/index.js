const API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export const endpoints = {
  auth: {
    login: `${API}/api/${API_VERSION}/auth/login`,
    profile: `${API}/api/${API_VERSION}/auth/profile`,
  },
  products: {
    getAllProducts: `${API}/api/${API_VERSION}/products`,
    getProducts: (limit, offset) =>
      `${API}/api/${API_VERSION}/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/${API_VERSION}/products/${id}`,
    addProduct: `${API}/api/${API_VERSION}/products`,
    updateProduct: (id) => `${API}/api/${API_VERSION}/products/${id}/`,
    deleteProduct: (id) => `${API}/api/${API_VERSION}/products/${id}/`,
  },
  categories: {
    getCategoriesList: `${API}/api/${API_VERSION}/categories/`,
    addCategory: `${API}/api/${API_VERSION}/categories/`,
    getCategoryItems: (id) =>
      `${API}/api/${API_VERSION}/categories/${id}/products/`,
    updateCategory: (id) => `${API}/api/${API_VERSION}/categories/${id}/`,
  },
  files: {
    addImage: `${API}/api/${API_VERSION}/files/upload/`,
  },
};

import axios from "axios";
import { endpoints } from ".";

export const getAllProducts = async () => {
  return await axios.get(endpoints.products.getAllProducts);
};

export const addProduct = async (product) => {
  const config = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.post(
    endpoints.products.addProduct,
    product,
    config
  );

  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await axios.delete(endpoints.products.deleteProduct(id));
  return data;
};

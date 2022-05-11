import axios from "axios";
import { endpoints } from ".";

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

export const getAllProducts = async () => {
  return await axios.get(endpoints.products.getAllProducts);
};

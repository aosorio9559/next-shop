import ProductForm from "@components/ProductForm";
import { endpoints } from "@services/api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProduct() {
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    if (!router.isReady) return;

    const getProduct = async () => {
      try {
        const { data } = await axios.get(endpoints.products.getProduct(id));
        setProduct(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    getProduct();
  }, [router?.isReady]);
  return product ? (
    <ProductForm product={product} />
  ) : (
    <div>Product not found</div>
  );
}

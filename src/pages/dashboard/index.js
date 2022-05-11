import { Chart } from "@common/Chart";
import { useFetch } from "@hooks/useFetch";
import { endpoints } from "@services/api";
import Products from "./products";

export default function Dashboard() {
  const PRODUCT_LIMIT = 10;
  const PRODUCT_OFFSET = 0;
  const products = useFetch(
    endpoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET)
  );

  const categoryNames = products.map((product) => product.category.name);
  const categoryOcurrences = categoryNames.reduce(
    (acc, category) => ({
      ...acc,
      [category]: acc[category] ? acc[category] + 1 : 1,
    }),
    {}
  );

  const chartData = {
    datasets: [
      {
        label: "Categories",
        data: categoryOcurrences,
        borderWidth: 2,
        backgroundColor: [
          "#FFBB11",
          "#C0C0C0",
          "#50AF95",
          "#F3BA2F",
          "#2A71D0",
        ],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={chartData} />
      {/* <Products products={products} /> */}
    </>
  );
}

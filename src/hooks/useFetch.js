import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(endpoint);
    setData(data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return data;
};

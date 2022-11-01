import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setLoading(false);
        setProducts(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  console.log(products);
  return !loading ? products.length : <Spinner />;
};
export default Home;

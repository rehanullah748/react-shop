import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
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
  return !loading ? (
    <div className="flex flex-wrap -mx-4">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  ) : (
    <Spinner />
  );
};
export default Home;

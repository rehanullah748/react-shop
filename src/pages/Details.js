import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
const Details = () => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(({ data }) => {
        setLoader(false);
        setProduct(data);
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  }, []);
  console.log(product);
  return !loader ? (
    <div className="my-10 flex flex-wrap -mx-5">
      <div className="w-full md:w-4/12 p-5">
        <img
          src={product.image}
          alt="product image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-8/12 p-5">
        <h1 className="text-2xl font-medium">{product.title}</h1>
        <h1 className="text-indigo-700 font-medium text-2xl mt-2">
          ${product.price}
        </h1>
        <div className="flex mt-2">
          <span className="text-gray-400 capitalize mr-3">category:</span>
          <span className="capitalize font-medium">{product.category}</span>
        </div>
        <p className="mt-2">{product.description}</p>
        <button className="bg-indigo-600 text-white capitalize font-medium px-7 py-3 mt-4">
          add to cart
        </button>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default Details;

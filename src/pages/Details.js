import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import axios from "axios";
import Spinner from "../components/Spinner";
const Details = ({ addProduct }) => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const [quantities, setQuantities] = useState(1);
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
  const inc = () => {
    setQuantities(quantities + 1);
  };
  const dec = () => {
    if (quantities > 1) {
      setQuantities(quantities - 1);
    }
  };
  const addToCart = () => {
    addProduct({ ...product, quantities });
  };
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
        <div className="my-3">
          <label
            htmlFor="quantities"
            className="block mb-2 capitalize font-medium"
          >
            quantities
          </label>
          <div className="flex items-center">
            <span
              className="bg-indigo-600 h-12 flex justify-center items-center text-white w-12 cursor-pointer"
              onClick={dec}
            >
              <AiOutlineMinus />
            </span>
            <input
              type="text"
              name=""
              id="quantities"
              className="border outline-none w-full px-3 h-12"
              placeholder="Quantities"
              value={quantities}
            />
            <span
              className="bg-indigo-600 h-12 flex justify-center items-center text-white w-12 cursor-pointer"
              onClick={inc}
            >
              <AiOutlinePlus />
            </span>
          </div>
        </div>

        <button
          className="bg-indigo-600 text-white capitalize font-medium px-7 py-3 mt-4"
          onClick={addToCart}
        >
          add to cart
        </button>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default Details;

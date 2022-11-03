import { Link } from "react-router-dom";
const Product = ({ product }) => {
  //   const { product } = props;
  return (
    <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-4">
      <Link
        to={`/product/${product.id}`}
        className="border px-3 py-6 rounded block "
      >
        <div className="w-full h-[300px] md:h-[220px] overflow-hidden">
          <img
            src={product.image}
            className="w-full h-full object-cover"
            alt="product image"
          />
        </div>
        <h1 className="mt-3 font-medium">{product.title.slice(0, 40)}...</h1>
        <h4 className="mt-1 font-medium text-lg text-indigo-800">
          ${product.price}
        </h4>
      </Link>
    </div>
  );
};

export default Product;

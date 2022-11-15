import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const CartItems = ({ items }) => {
  return (
    <tbody>
      {items.map((product) => (
        <tr key={product.id} className="even:bg-indigo-50">
          <td className=" p-3 text-left">
            <img
              src={product.image}
              alt={product.title}
              className="w-12 h-12 object-cover rounded"
            />
          </td>
          <td className=" p-3 text-left text-indigo-900">
            {product.title.slice(0, 20)}...
          </td>
          <td className=" p-3 text-left text-indigo-800 font-semibold">
            ${product.price}.00
          </td>
          <td className=" p-3 text-left flex items-center justify-evenly">
            <span className="flex items-center justify-center bg-emerald-600 rounded-full w-8 h-8 cursor-pointer">
              <AiOutlineMinus color="white" />
            </span>
            <span>{product.quantities}</span>
            <span className="flex items-center justify-center bg-orange-600 rounded-full w-8 h-8 cursor-pointer">
              <AiOutlinePlus color="white" />
            </span>
          </td>
          <td className=" p-3 text-left">
            <button className="bg-rose-600 px-5 py-2 text-white rounded cursor-pointer capitalize text-sm font-bold shadow-lg shadow-rose-600/50 ">
              delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CartItems;

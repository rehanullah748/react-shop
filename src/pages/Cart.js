import { useState, useEffect } from "react";
import CartItems from "../components/CartItems";
const Cart = ({ items }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let count = 0;
    items.forEach((item) => {
      count += item.price * item.quantities;
    });
    setTotal(count);
  }, []);
  return (
    <div className="my-5 overflow-x-auto">
      {items.length > 0 ? (
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-indigo-100 p-3 text-left uppercase text-sm font-medium">
                  image
                </th>
                <th className="bg-indigo-100 p-3 text-left uppercase text-sm font-medium">
                  name
                </th>
                <th className="bg-indigo-100 p-3 text-left uppercase text-sm font-medium">
                  price
                </th>
                <th className="bg-indigo-100 p-3 text-left uppercase text-sm font-medium">
                  total price
                </th>
                <th className="bg-indigo-100 p-3 text-left uppercase text-sm font-medium">
                  quantities
                </th>
                <th className="bg-indigo-100 p-3 text-left uppercase text-sm font-medium">
                  delete
                </th>
              </tr>
            </thead>
            <CartItems items={items} setTotal={setTotal} total={total} />
          </table>
          <div className="p-5 my-5 bg-rose-50 flex justify-between items-center border-l-[4px] border-l-rose-600">
            <div className="space-x-4">
              <span className="capitalize font-medium text-rose-900">
                total price
              </span>
              <span className="font-bold">${total}</span>
            </div>
            <a
              href=""
              className="capitalize inline-block font-semibold bg-indigo-600 rounded px-6 py-2.5 text-white"
            >
              checkout
            </a>
          </div>
        </div>
      ) : (
        <p className="bg-rose-50 text-rose-800 border-rose-100 rounded px-4 py-3 font-medium">
          cart is empty!
        </p>
      )}
    </div>
  );
};

export default Cart;

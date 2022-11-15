import CartItems from "../components/CartItems";
const Cart = ({ items }) => {
  return (
    <div className="my-5 overflow-x-auto">
      {items.length > 0 ? (
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
                quantities
              </th>
              <th className="bg-indigo-100 p-3 text-left uppercase text-sm font-medium">
                delete
              </th>
            </tr>
          </thead>
          <CartItems items={items} />
        </table>
      ) : (
        <p className="bg-rose-50 text-rose-800 border-rose-100 rounded px-4 py-3 font-medium">
          cart is empty!
        </p>
      )}
    </div>
  );
};

export default Cart;

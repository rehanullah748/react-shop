const Cart = ({ items }) => {
  return (
    <div className="my-5">
      {items.length > 0 ? (
        <table className="border w-full">
          <thead>
            <tr>
              <th className="border p-3 text-left uppercase text-sm font-medium">
                image
              </th>
              <th className="border p-3 text-left uppercase text-sm font-medium">
                name
              </th>
              <th className="border p-3 text-left uppercase text-sm font-medium">
                price
              </th>
              <th className="border p-3 text-left uppercase text-sm font-medium">
                quantities
              </th>
              <th className="border p-3 text-left uppercase text-sm font-medium">
                delete
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.id} className="odd:bg-gray-50">
                <td className="border p-3 text-left">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="border p-3 text-left">{product.title}</td>
                <td className="border p-3 text-left">{product.price}</td>
                <td className="border p-3 text-left">{product.quantities}</td>
                <td className="border p-3 text-left">
                  <button className="bg-rose-600 px-5 py-2 text-white rounded cursor-pointer capitalize text-sm font-bold">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
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

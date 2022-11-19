import List from "./List";
const CartItems = ({ items, setTotal, total }) => {
  return (
    <tbody>
      {items.map((product) => (
        <List
          product={product}
          key={product.id}
          setTotal={setTotal}
          total={total}
        />
      ))}
    </tbody>
  );
};

export default CartItems;

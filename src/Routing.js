import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
const Routing = () => {
  const [cart, setCart] = useState([]);
  const addProduct = (data) => {
    const product = cart.find((pr) => pr.id === data.id);
    if (!product) {
      setCart([...cart, data]);
    }
  };
  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <div className="max-w-screen-lg mx-auto px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:id"
            element={<Details addProduct={addProduct} />}
          />
          <Route path="/cart" element={<Cart items={cart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routing;

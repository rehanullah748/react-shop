import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import toast, { Toaster } from "react-hot-toast";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
const Routing = () => {
  const [cart, setCart] = useState([]);
  const addProduct = (data) => {
    const product = cart.find((pr) => pr.id === data.id);
    if (!product) {
      setCart([...cart, data]);
      toast.success("You have added product in the cart");
    } else {
      toast.error("Product is already in the cart!");
    }
  };
  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Toaster position="top-left" />
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

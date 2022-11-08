import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Details from "./pages/Details";
const Routing = () => {
  const [cart, setCart] = useState([]);
  const addProduct = (data) => {
    setCart([...cart, data]);
  };
  console.log("cart: ", cart);
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
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routing;

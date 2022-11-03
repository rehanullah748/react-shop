import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Details from "./pages/Details";
const Routing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="max-w-screen-lg mx-auto px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routing;

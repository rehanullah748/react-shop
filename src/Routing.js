import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
const Routing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="max-w-screen-lg mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routing;

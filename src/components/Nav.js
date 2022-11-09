import { Link } from "react-router-dom";
import { BsHandbagFill } from "react-icons/bs";
const Nav = ({ cart }) => {
  return (
    <nav className="border-b border-b-gray-100 ">
      <div className="h-[70px] max-w-screen-lg mx-auto flex justify-between items-center px-6">
        <Link to="/" className="capitalize font-medium text-sm text-gray-800">
          home
        </Link>
        <Link to="/cart" className="relative">
          <BsHandbagFill size={22} />
          <span className="flex items-center justify-center font-medium text-white absolute -top-3 -right-4 bg-indigo-600 w-7 h-7 rounded-full text-xs">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

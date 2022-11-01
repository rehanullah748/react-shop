import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="border-b border-b-gray-100">
      <div className="h-[70px] max-w-screen-lg mx-auto flex items-center">
        <Link to="/" className="capitalize font-medium text-sm text-gray-800">
          home
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

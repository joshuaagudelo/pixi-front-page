import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="lg:mx-4 lg:mt-3 mt-2 mx-2">
      <div className="flex flex-row lg:px-12 px-3 py-2 justify-between bg-slate-white text-white shadow-md rounded-full bg-white items-center">
        <div className="flex flex-row items-center">
          <div>
            <h1 className="text-black font-bold text-2xl mr-10">PIXI</h1>
          </div>
          <div className="text-black lg:flex flex-row gap-10 hidden">
            <Link to="/">Home</Link>
            <Link to="/">Get started</Link>
            <Link to="/">About</Link>
            <Link to="/">Forum</Link>
          </div>
        </div>
        <div className="bg-[#D1FF97] px-2 py-1 rounded-lg text-black font-semibold">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

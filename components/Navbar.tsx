import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link className="text-white font-bold text-xl" href="/">
            𝘼𝘿𝘿-𝙈𝙀
          </Link>
        </div>
        <div className="space-x-4">
          <Link
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
            href="/"
          >
            {" "}
            Home{" "}
          </Link>

          <Link
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="/About"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

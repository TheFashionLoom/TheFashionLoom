import { Link } from "react-router-dom";
import logo from "../assets/tfl_logo_cropped.jpg"; // Import the logo image
export default function Header() {
  return (
    <header className="bg-white shadow-md top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col  justify-between items-center gap-2">
        <Link to="/" className="flex items-center">
          <img
            src={logo} // Replace with your logo's path
            alt="Logo"
            className="h-25 md:h-30 items-center mr-2 " // Adjust the height of the logo (h-8 is 2rem)
          />
          {/* <span className="text-2xl font-bold text-gray-800">
            The Fashion Loom
          </span> */}
        </Link>
        {/* <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <a href="#visit-store" className="text-gray-600 hover:text-black">
            Visit Store
          </a>
        </nav> */}
      </div>
    </header>
  );
}

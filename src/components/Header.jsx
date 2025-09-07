import { Link } from "react-router-dom";
import logo from "../assets/tfl_logo_cropped.jpg";

export default function Header() {
  return (
    <header className="bg-white shadow-md top-0 z-50 w-full">
      {/* NAVBAR */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col justify-between items-center gap-2">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-20 md:h-24 items-center mr-2"
          />
        </Link>
      </div>

      {/* MARQUEE MESSAGE BELOW NAVBAR */}
      <div className="bg-red-600 overflow-hidden">
        <div className="text-white font-bold text-center py-2 whitespace-nowrap animate-[scroll_20s_linear_infinite]">
          This website is currently in testing phase.
        </div>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          The Fashion Loom
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <a href="#visit-store" className="text-gray-600 hover:text-black">
            Visit Store
          </a>
        </nav>
      </div>
    </header>
  );
}

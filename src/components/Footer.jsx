import logo from "../assets/tfl_logo_cropped.jpg"; // Import the logo image

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-gray-700">
        {/* About with Logo on the left */}
        <div className="flex items-center space-x-4 justify-center ">
          <img
            src={logo}
            alt="The Fashion Loom Logo"
            className="h-16 sm:h-20 md:h-25"
          />
          <div>
            <h3 className="text-lg font-semibold mb-2">The Fashion Loom</h3>
            <p>
              Bringing trendy fashion to your doorstep. Quality wear for every
              occasion.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center ">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>📞 +91 9001768592</p>
          <p>✉️ support@thefashionloom.com</p>
        </div>

        {/* Social Links */}
        <div className="text-center ">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-6">
        &copy; {new Date().getFullYear()} The Fashion Loom. All rights reserved.
      </div>
    </footer>
  );
}

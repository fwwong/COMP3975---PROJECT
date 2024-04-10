export default function Navbar() {
    return (
      <nav className="bg-gray-800">
        <div className="mx-auto px-4 py-2 max-w-7xl flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-lg font-semibold">
              Your Logo
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-white hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

function Header() {
    return (
      <header className="shadow-2xl">
        <div className="container flex items-center justify-between py-6">
          <a href="/" className="inline-block">
            <img src="/react.svg" alt="Logo" className="w-12 h-12" />
          </a>
          <nav>
            <ul className="flex gap-3">
              <li>
                <a href="/pricing" className="text-blue-500 hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/about" className="text-blue-500 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-500 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;  // Correct export statement
  
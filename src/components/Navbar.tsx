import { Link } from "react-router-dom";
import { Menu, Search, Bell, User, PlaySquare, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isMobile: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

function Navbar({ isMenuOpen, toggleMenu, isMobile, isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0f0f0f] h-14 flex items-center justify-between px-2 md:px-4 z-50">
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-[#272727] rounded-full"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobile && isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        <Link to="/" className="flex items-center gap-1">
          <PlaySquare className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
          <span className={`font-semibold ${isMobile ? 'hidden xs:inline text-base' : 'inline text-xl'}`}>
            YouTube Clone
          </span>
        </Link>
      </div>

      <div className="flex-1 max-w-2xl mx-2 md:mx-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-2 md:px-4 py-1 md:py-2 bg-[#121212] border border-[#303030] rounded-l-full focus:outline-none focus:border-blue-500"
          />
          <button className="px-3 md:px-6 bg-[#222222] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#272727]">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-4">
        <button className="p-1 md:p-2 hover:bg-[#272727] rounded-full hidden sm:block">
          <Bell className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-1 md:p-2 hover:bg-[#272727] rounded-full"
          >
            <User className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-[#222222] shadow-lg rounded-lg py-2 z-50">
              <button className="block w-full text-left px-4 py-2 hover:bg-[#303030]" onClick={() => (window.location.href = "/settings")} >Settings</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-[#303030]" onClick={() => (window.location.href = "/help")}>Help</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-[#303030]" onClick={() => (window.location.href = "/signout")}>Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
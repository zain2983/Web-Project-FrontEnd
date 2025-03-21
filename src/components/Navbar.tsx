import { Link } from 'react-router-dom';
import { Menu, Search, Bell, User, PlaySquare } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0f0f0f] h-14 flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-[#272727] rounded-full">
          <Menu className="w-6 h-6" />
        </button>
        <Link to="/" className="flex items-center gap-1">
          <PlaySquare className="w-8 h-8 text-red-600" />
          <span className="text-xl font-semibold">YouTube Clone</span>
        </Link>
      </div>
      
      <div className="flex-1 max-w-2xl mx-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 bg-[#121212] border border-[#303030] rounded-l-full focus:outline-none focus:border-blue-500"
          />
          <button className="px-6 bg-[#222222] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#272727]">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-[#272727] rounded-full">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-[#272727] rounded-full">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

export default Navbar; 
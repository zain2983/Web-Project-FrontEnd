import { Link } from 'react-router-dom';
import { HomeIcon, PlaySquare, LibraryIcon, HistoryIcon, Clock, ThumbsUp , Info, Mail , NotebookText} from 'lucide-react';

interface SidebarProps {
  isMenuOpen: boolean;
}

function Sidebar({ isMenuOpen }: SidebarProps) {
  return (
    <aside className={`fixed left-0 top-14 h-full bg-[#0f0f0f] transition-all ${isMenuOpen ? 'w-60' : 'w-20'}`}>
      <div className="p-2">
        <Link to="/" className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
          <HomeIcon className="w-6 h-6" />
          {isMenuOpen && <span>Home</span>}
        </Link>
        <Link to="/shorts" className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
          <PlaySquare className="w-6 h-6" />
          {isMenuOpen && <span>Shorts</span>}
        </Link>
        <Link to="/history" className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
          <HistoryIcon className="w-6 h-6" />
          {isMenuOpen && <span>History</span>}
        </Link>
        <Link to="/watch-later" className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
          <Clock className="w-6 h-6" />
          {isMenuOpen && <span>Watch Later</span>}
        </Link>
        <Link to="/liked-videos" className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
          <ThumbsUp className="w-6 h-6" />
          {isMenuOpen && <span>Liked Videos</span>}
        </Link>

        <Link to="/library" className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
          <LibraryIcon className="w-6 h-6" />
          {isMenuOpen && <span>Library</span>}
        </Link>
        {/* Separator */}
        <div className="my-4 border-t border-gray-600"></div>

        {/* Contact and About Links with Icons */}
        <Link to="/contact" className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
          <Mail className="w-6 h-6" />
          {isMenuOpen && <span>Contact Us</span>}
        </Link>
        <Link to="/about" className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
          <Info className="w-6 h-6" />
          {isMenuOpen && <span>About Us</span>}
        </Link>
        <Link to="/blog" className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
          <NotebookText className="w-6 h-6" />
          {isMenuOpen && <span>Blog</span>}
        </Link>




      </div>
    </aside>
  );
}

export default Sidebar; 
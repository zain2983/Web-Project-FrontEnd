import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, Search, Bell, User, HomeIcon, Compass, LibraryIcon, HistoryIcon, PlaySquare, Clock, ThumbsUp, ChevronDown } from 'lucide-react';
import HomePage from './pages/Home';
import Shorts from './pages/Shorts';
import LibraryPage from './pages/Library';
import HistoryPage from './pages/History';
import WatchLater from './pages/WatchLater';
import LikedVideos from './pages/LikedVideos';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-[#0f0f0f] text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-[#0f0f0f] h-14 flex items-center justify-between px-4 z-50">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-[#272727] rounded-full">
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center gap-1">
              <PlaySquare className="w-8 h-8 text-red-600" />
              <span className="text-xl font-semibold">YouTube</span>
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

        {/* Main Content */}
        <div className="flex pt-14">
          {/* Sidebar */}
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
              <Link to="/library" className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
                <LibraryIcon className="w-6 h-6" />
                {isMenuOpen && <span>Library</span>}
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
              {isMenuOpen && (
                <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
                  <ChevronDown className="w-6 h-6" />
                  <span>Show More</span>
                </button>
              )}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className={`flex-1 p-6 ${isMenuOpen ? 'ml-60' : 'ml-20'}`}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/watch-later" element={<WatchLater />} />
              <Route path="/liked-videos" element={<LikedVideos />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
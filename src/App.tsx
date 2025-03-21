import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
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
        {/* Navbar Component */}
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <div className="flex pt-14">
          {/* Sidebar Component */}
          <Sidebar isMenuOpen={isMenuOpen} />

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
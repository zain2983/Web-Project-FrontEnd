import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/Home';
import Shorts from './pages/Shorts';
import LibraryPage from './pages/Library';
import HistoryPage from './pages/History';
import WatchLater from './pages/WatchLater';
import LikedVideos from './pages/LikedVideos';
import ContactUs from './pages/ContactUse';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if the screen is mobile size on initial load and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsMenuOpen(false);
      } else {
        setIsMenuOpen(true);
        setIsMobileMenuOpen(false);
      }
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Clean up the event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Toggle sidebar for desktop
  const toggleDesktopSidebar = () => {
    if (!isMobile) {
      setIsMenuOpen(!isMenuOpen);
    } else {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#0f0f0f] text-white">
        {/* Navbar Component */}
        <Navbar 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleDesktopSidebar} 
          isMobile={isMobile}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <div className={`flex ${isMobile ? 'pt-16' : 'pt-14'} relative`}>
          {/* Sidebar Component - hidden on mobile unless mobile menu is open */}
          {(!isMobile && (
            <Sidebar isMenuOpen={isMenuOpen} />
          )) || (isMobile && isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-64 h-full bg-[#0f0f0f] pt-16" onClick={(e) => e.stopPropagation()}>
                <Sidebar isMenuOpen={true} />
              </div>
            </div>
          ))}

          {/* Main Content Area */}
          <main 
            className={`flex-1 ${isMobile ? 'p-2' : 'p-4 md:p-6'} ${
              !isMobile && isMenuOpen ? 'md:ml-60' : !isMobile && !isMenuOpen ? 'md:ml-20' : ''
            }`}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/watch-later" element={<WatchLater />} />
              <Route path="/liked-videos" element={<LikedVideos />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />

            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
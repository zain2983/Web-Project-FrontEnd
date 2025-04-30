import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import AuthPage from './pages/Auth';
import ProtectedRoute from './components/ProtectedRoute';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsMenuOpen(window.innerWidth >= 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleDesktopSidebar = () => {
    if (!isMobile) {
      setIsMenuOpen(!isMenuOpen);
    } else {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {!isAuthPage && (
        <Navbar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleDesktopSidebar}
          isMobile={isMobile}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
      <div className={`flex ${!isAuthPage ? (isMobile ? 'pt-16' : 'pt-14') : ''} relative`}>
        {!isAuthPage && (
          <>
            {(!isMobile && (
              <Sidebar isMenuOpen={isMenuOpen} />
            )) || (isMobile && isMobileMenuOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="w-64 h-full bg-[#0f0f0f] pt-16" onClick={(e) => e.stopPropagation()}>
                  <Sidebar isMenuOpen={true} />
                </div>
              </div>
            ))}
          </>
        )}
        <main
          className={`flex-1 ${isMobile ? 'p-2' : 'p-4 md:p-6'} ${
            !isAuthPage
              ? !isMobile && isMenuOpen
                ? 'md:ml-60'
                : !isMobile && !isMenuOpen
                ? 'md:ml-20'
                : ''
              : ''
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Route */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/watch-later" element={<WatchLater />} />
            <Route path="/liked-videos" element={<LikedVideos />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

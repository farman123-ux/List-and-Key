import { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import ExamplesPage from './pages/ExamplesPage';
import MistakesPage from './pages/MistakesPage';
import AboutPage from './pages/AboutPage';

// Component to handle scroll restoration and hash scrolling
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active route name for navbar
  const getActiveRoute = () => {
    const path = location.pathname.replace('/', '');
    if (!path) return 'home';
    if (path.startsWith('learn')) return 'learn';
    if (path.startsWith('examples')) return 'examples';
    if (path.startsWith('mistakes')) return 'mistakes';
    if (path.startsWith('about')) return 'about';
    return 'home';
  };

  const handleNavigate = (routeId, targetHash) => {
    let targetPath = '/';
    if (routeId === 'learn') targetPath = '/learn';
    else if (routeId === 'examples') targetPath = '/examples';
    else if (routeId === 'mistakes') targetPath = '/mistakes';
    else if (routeId === 'about') targetPath = '/about';

    if (targetHash) {
      navigate(`${targetPath}#${targetHash}`);
    } else {
      navigate(targetPath);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1C1917] selection:bg-blue-100 selection:text-blue-900">
      <ScrollManager />

      {/* Sticky Navbar */}
      <Navbar activeRoute={getActiveRoute()} onNavigate={handleNavigate} />

      {/* Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/mistakes" element={<MistakesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<HomePage onNavigate={handleNavigate} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

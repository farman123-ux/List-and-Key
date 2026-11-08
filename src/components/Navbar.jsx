import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { topicsData } from '../data/topicsData';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Learn', path: '/learn' },
  { name: 'Examples', path: '/examples' },
  { name: 'About', path: '/about' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Simple topic search filter
  const searchResults = searchQuery.trim()
    ? topicsData.filter((topic) =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 gap-3 sm:gap-4">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center gap-2 text-stone-900 group flex-shrink-0"
          >
            <div>
              <span className="font-bold text-base sm:text-lg leading-none block">React Learn</span>
              <span className="text-[10px] font-mono uppercase text-stone-400 font-semibold block mt-0.5">Lists & Keys</span>
            </div>
          </Link>

          {/* Desktop & Tablet Navigation */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-1 justify-end">
            
            {/* Nav Links */}
            <nav className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 font-semibold'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Search Input */}
            <div className="relative w-48 lg:w-56">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-100 focus:bg-white text-stone-900 placeholder:text-stone-400 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              />

              {/* Search Dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute top-full mt-1.5 left-0 right-0 bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden z-50 divide-y divide-stone-100">
                  {searchResults.map((topic) => (
                    <Link
                      key={topic.id}
                      to={`/learn#${topic.id}`}
                      onClick={() => setSearchQuery('')}
                      className="block px-3 py-2 text-xs text-stone-800 hover:bg-blue-50 hover:text-blue-600 transition-colors truncate"
                    >
                      {topic.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:bg-stone-100 active:bg-stone-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-stone-200 space-y-2.5">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-xs bg-stone-100 rounded-lg border border-stone-200 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {searchResults.length > 0 && (
              <div className="bg-white rounded-lg border border-stone-200 divide-y divide-stone-100 shadow-sm">
                {searchResults.map((topic) => (
                  <Link
                    key={topic.id}
                    to={`/learn#${topic.id}`}
                    onClick={handleLinkClick}
                    className="block p-2.5 text-xs text-stone-800 hover:bg-blue-50 truncate"
                  >
                    {topic.title}
                  </Link>
                ))}
              </div>
            )}

            <nav className="flex flex-col space-y-1 pt-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 font-semibold'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}

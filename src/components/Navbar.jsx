import { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, ArrowUpRight, BookOpen, Play, AlertTriangle } from 'lucide-react';
import { topicsData } from '../data/topicsData';
import { mistakesData } from '../data/mistakesData';

export default function Navbar({ activeRoute, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchContainerRef = useRef(null);

  // Close search dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter searchable items
  const query = searchQuery.trim().toLowerCase();
  const searchResults = query
    ? [
        ...topicsData
          .filter(
            (t) =>
              t.title.toLowerCase().includes(query) ||
              t.definition.toLowerCase().includes(query) ||
              t.badge.toLowerCase().includes(query)
          )
          .map((t) => ({ ...t, type: 'Learn', icon: BookOpen, target: 'learn', hash: t.id })),
        ...mistakesData
          .filter(
            (m) =>
              m.title.toLowerCase().includes(query) ||
              m.description.toLowerCase().includes(query)
          )
          .map((m) => ({ ...m, type: 'Mistake', icon: AlertTriangle, target: 'mistakes', hash: m.id })),
        {
          id: 'demo-1',
          title: 'Example 1: Student List',
          type: 'Example',
          icon: Play,
          target: 'examples',
          hash: 'example-1'
        },
        {
          id: 'demo-2',
          title: 'Example 2: Add and Delete Students',
          type: 'Example',
          icon: Play,
          target: 'examples',
          hash: 'example-2'
        },
        {
          id: 'demo-3',
          title: 'Example 3: Update Student Name',
          type: 'Example',
          icon: Play,
          target: 'examples',
          hash: 'example-3'
        }
      ].slice(0, 6)
    : [];

  const handleSelectResult = (item) => {
    onNavigate(item.target, item.hash);
    setSearchQuery('');
    setSearchOpen(false);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Learn', id: 'learn' },
    { label: 'Examples', id: 'examples' },
    { label: 'Mistakes', id: 'mistakes' },
    { label: 'About', id: 'about' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            >
              {/* Custom React Atom Logo */}
              <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                <svg
                  viewBox="-11.5 -10.23174 23 20.46348"
                  className="w-5 h-5 fill-none stroke-current"
                  strokeWidth="1.6"
                >
                  <circle cx="0" cy="0" r="2.1" fill="currentColor" />
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </svg>
              </div>

              <div>
                <span className="font-bold text-lg text-stone-900 tracking-tight block leading-none font-sans">
                  React Learn
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-semibold block mt-0.5">
                  Lists & Keys
                </span>
              </div>
            </button>
          </div>

          {/* Search Field & Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
            
            {/* Small Search Field */}
            <div className="relative w-64" ref={searchContainerRef}>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search topics, keys, map()..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchOpen(true);
                  }}
                  onFocus={() => setSearchOpen(true)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-100/80 hover:bg-stone-100 focus:bg-white text-stone-900 placeholder:text-stone-400 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans"
                />
              </div>

              {/* Live Search Dropdown */}
              {searchOpen && searchQuery.trim() && (
                <div className="absolute top-full mt-1.5 left-0 right-0 bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden z-50">
                  <div className="p-2 border-b border-stone-100 text-[10px] font-mono uppercase text-stone-400 font-bold px-3">
                    Search Results ({searchResults.length})
                  </div>
                  {searchResults.length > 0 ? (
                    <div className="max-h-72 overflow-y-auto divide-y divide-stone-100">
                      {searchResults.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleSelectResult(item)}
                            className="w-full px-3 py-2 text-left hover:bg-stone-50 flex items-center justify-between gap-2 text-xs transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-2 overflow-hidden">
                              <Icon className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                              <span className="font-medium text-stone-800 truncate">
                                {item.title}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded flex-shrink-0">
                              {item.type}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-stone-500">
                      No matching topics found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Desktop Navigation Links */}
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeRoute === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/80 font-semibold'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200 space-y-3">
            {/* Mobile Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topics, keys, map()..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm bg-stone-100 rounded-lg text-stone-900 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Mobile Search Results */}
            {searchQuery.trim() && searchResults.length > 0 && (
              <div className="bg-white rounded-lg border border-stone-200 divide-y divide-stone-100">
                {searchResults.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectResult(item)}
                    className="w-full p-2.5 text-left text-xs text-stone-800 flex justify-between items-center"
                  >
                    <span className="font-medium truncate">{item.title}</span>
                    <span className="text-[10px] text-stone-400 font-mono">{item.type}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Mobile Links */}
            <nav className="flex flex-col space-y-1 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg text-left text-sm font-medium ${
                    activeRoute === link.id
                      ? 'text-blue-600 bg-blue-50 font-semibold'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}

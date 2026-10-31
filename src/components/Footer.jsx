export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-stone-200/90 bg-[#FAF9F5] text-stone-600 text-sm py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600">
                <svg
                  viewBox="-11.5 -10.23174 23 20.46348"
                  className="w-4 h-4 fill-none stroke-current"
                  strokeWidth="1.6"
                >
                  <circle cx="0" cy="0" r="2.1" fill="currentColor" />
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </svg>
              </div>
              <span className="font-bold text-stone-900 tracking-tight text-base font-sans">
                React Learn
              </span>
            </div>

            <p className="text-stone-500 text-xs md:text-sm leading-relaxed max-w-sm">
              An open, beginner-friendly educational guide built to demystify dynamic list rendering, reconciliation, and key management in React 19.
            </p>

            <div className="text-xs text-stone-400 font-mono">
              Designed & crafted for frontend developers.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-mono">
              Curriculum
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="text-stone-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('learn')}
                  className="text-stone-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  9 Fundamental Topics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('examples')}
                  className="text-stone-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  3 Interactive Playgrounds
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('mistakes')}
                  className="text-stone-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Common Pitfalls & Fixes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="text-stone-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  About the Project
                </button>
              </li>
            </ul>
          </div>

          {/* Built With Technologies */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-mono">
              Built With
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                React 19
              </span>
              <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                JavaScript (ES6+)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                Tailwind CSS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                React Router DOM
              </span>
              <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                Lucide React
              </span>
              <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                Vite 8
              </span>
            </div>

            <p className="text-xs text-stone-400 pt-2 leading-relaxed">
              No UI kits or heavy CSS frameworks. Clean, semantic HTML and vanilla Tailwind utility composition.
            </p>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <div>
            Copyright © 2026 React Learn. All rights reserved.
          </div>
          <div>
            Educational Portfolio Project
          </div>
        </div>

      </div>
    </footer>
  );
}

export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-stone-200/80 bg-[#FAF9F5] text-stone-600 text-xs py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600">
                <svg
                  viewBox="-11.5 -10.23174 23 20.46348"
                  className="w-3.5 h-3.5 fill-none stroke-current"
                  strokeWidth="1.6"
                >
                  <circle cx="0" cy="0" r="2.1" fill="currentColor" />
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </svg>
              </div>
              <span className="font-bold text-stone-900 tracking-tight text-sm font-sans">
                React Learn
              </span>
            </div>

            <p className="text-stone-500 text-xs leading-relaxed max-w-sm">
              An open, beginner-friendly educational guide built to demystify dynamic list rendering, reconciliation, and key management in React 19.
            </p>

            <div className="text-[11px] text-stone-400 font-mono">
              Designed & crafted for frontend developers.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-900 font-mono">
              Curriculum
            </h4>
            <ul className="space-y-1.5 text-xs">
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
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-900 font-mono">
              Built With
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                React 19
              </span>
              <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                JavaScript (ES6+)
              </span>
              <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                Tailwind CSS
              </span>
              <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                React Router DOM
              </span>
              <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                Lucide React
              </span>
              <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200 font-mono">
                Vite 8
              </span>
            </div>

            <p className="text-[11px] text-stone-400 pt-1 leading-relaxed">
              No bloated UI libraries. Semantic HTML and intentional Tailwind utility tokens.
            </p>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-4 border-t border-stone-200/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-500 font-mono">
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

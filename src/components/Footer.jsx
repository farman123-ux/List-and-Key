import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/80 bg-[#FAF9F5] text-stone-600 text-xs py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-stone-900 tracking-tight text-sm">
                React Learn
              </span>
            </Link>

            <p className="text-stone-500 text-xs leading-relaxed max-w-sm">
              An open, beginner-friendly educational guide built to demystify dynamic list rendering, reconciliation, and key management in React.
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
                <Link to="/" className="text-stone-600 hover:text-blue-600 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-stone-600 hover:text-blue-600 transition-colors">
                  9 Fundamental Topics
                </Link>
              </li>
              <li>
                <Link to="/examples" className="text-stone-600 hover:text-blue-600 transition-colors">
                  3 Interactive Playgrounds
                </Link>
              </li>
              <li>
                <Link to="/mistakes" className="text-stone-600 hover:text-blue-600 transition-colors">
                  Common Pitfalls & Fixes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-600 hover:text-blue-600 transition-colors">
                  About the Project
                </Link>
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
                React Router
              </span>
            </div>

            <p className="text-[11px] text-stone-400 pt-1 leading-relaxed">
              Clean, simple, and semantic React components.
            </p>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-4 border-t border-stone-200/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-500 font-mono">
          <div>Copyright © 2026 React Learn. All rights reserved.</div>
          <div>Educational Portfolio Project</div>
        </div>

      </div>
    </footer>
  );
}

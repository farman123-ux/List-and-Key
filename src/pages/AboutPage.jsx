import { Code, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-10">
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
          About React Learn
        </h2>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed">
          A frontend developer's educational project crafted to provide an intuitive, visual, and technically precise reference for React's list rendering and reconciliation algorithm.
        </p>
      </div>

      {/* Main Philosophy Card */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6 shadow-xs">
        <h3 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <span>The Philosophy Behind This Project</span>
        </h3>
        
        <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
          Most beginner tutorials either gloss over keys as "something you just add to silence the console warning" or plunge into complex virtual DOM mathematics without practical examples.
        </p>

        <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
          <strong>React Learn</strong> bridges this gap by presenting React Lists & Keys through three connected pillars:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2">
            <span className="font-mono text-xs font-bold text-blue-600">01. MENTAL MODELS</span>
            <h4 className="font-semibold text-stone-900 text-sm">Visual Understanding</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Clear diagrams showing how in-memory JavaScript arrays flow through <code className="font-mono">.map()</code> to produce discrete React Elements.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2">
            <span className="font-mono text-xs font-bold text-blue-600">02. LIVE PLAYGROUNDS</span>
            <h4 className="font-semibold text-stone-900 text-sm">Tangible Experience</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Interactive examples demonstrating additions, deletes, and inline updates where you can inspect keys in real time.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2 sm:col-span-2 md:col-span-1">
            <span className="font-mono text-xs font-bold text-blue-600">03. DEFENSIVE CODING</span>
            <h4 className="font-semibold text-stone-900 text-sm">Zero Pitfalls</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Side-by-side Before & After comparisons revealing why mutations and array indexes break production applications.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6 shadow-xs">
        <h3 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <span>Technical Architecture</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200/60">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-stone-900 block font-semibold">React 19 Core</strong>
              <span className="text-stone-500">Utilizing the latest React compiler optimizations and pure functional component patterns.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200/60">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-stone-900 block font-semibold">Tailwind CSS</strong>
              <span className="text-stone-500">Crafted with a custom palette (warm off-white surfaces, deep charcoal typography, electric blue accents).</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200/60">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-stone-900 block font-semibold">React Router DOM</strong>
              <span className="text-stone-500">Declarative client-side routing allowing quick jumps between guide topics, demos, and mistakes.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200/60">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-stone-900 block font-semibold">Lucide React</strong>
              <span className="text-stone-500">Clean, crisp, lightweight icons for purposeful visual hierarchy without generic fluff.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

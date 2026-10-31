import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { mistakesData } from '../data/mistakesData';
import MistakeCard from '../components/MistakeCard';

export default function MistakesPage() {
  return (
    <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <AlertTriangle className="w-3.5 h-3.5" />
          Gotchas & Anti-Patterns
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
          Common Mistakes & How to Avoid Them
        </h2>
        <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
          Rendering lists in React is simple once you master keys and immutability. Here are the 5 most frequent mistakes developers make, with side-by-side Before & After code corrections.
        </p>
      </div>

      {/* Cards list */}
      <div className="space-y-8">
        {mistakesData.map((mistake) => (
          <div key={mistake.id} id={mistake.id} className="scroll-mt-24">
            <MistakeCard mistake={mistake} />
          </div>
        ))}
      </div>

      {/* Summary Box */}
      <div className="p-6 md:p-8 rounded-2xl bg-white border border-stone-200 text-stone-700 space-y-4 shadow-2xs">
        <div className="flex items-center gap-2.5 text-stone-900 font-bold text-base">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>The 3-Point Production Safety Checklist</span>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
          <li className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
            <strong className="block text-stone-900 mb-1">1. Stable IDs</strong>
            Always use database IDs, UUIDs, or slug values. Never use array index unless the list is 100% static.
          </li>
          <li className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
            <strong className="block text-stone-900 mb-1">2. Pure Updaters</strong>
            Never call <code className="text-stone-800 font-mono">push()</code> or <code className="text-stone-800 font-mono">splice()</code> on state arrays. Return new array copies with <code className="text-stone-800 font-mono">[...prev]</code>.
          </li>
          <li className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
            <strong className="block text-stone-900 mb-1">3. Implicit Returns</strong>
            Be vigilant with arrow syntax: <code className="text-stone-800 font-mono">() =&gt; (&lt;li /&gt;)</code> auto-returns, while <code className="text-stone-800 font-mono">() =&gt; {"{ return <li />; }"}</code> needs the keyword.
          </li>
        </ul>
      </div>
    </div>
  );
}

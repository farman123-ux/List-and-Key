import { ArrowRight, BookOpen, AlertTriangle, CheckCircle2, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import InteractiveShowcaseCard from '../components/InteractiveShowcaseCard';

export default function HomePage({ onNavigate }) {
  return (
    <div className="space-y-10 md:space-y-12">
      {/* 1. Hero Section */}
      <Hero
        onStartLearning={() => {
          const el = document.getElementById('demo-card');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreExamples={() => {
          const el = document.getElementById('demo-card');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. The Card (Unified Interactive Demonstration) */}
      <section id="demo-card" className="max-w-5xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono uppercase text-blue-600 font-semibold tracking-wider">
              Interactive Card
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              Lists & Keys in Action
            </h2>
          </div>
          <span className="text-xs text-stone-400 font-mono hidden sm:inline">
            Live Preview + Source Code
          </span>
        </div>

        {/* The Card Component */}
        <InteractiveShowcaseCard />
      </section>

      {/* 3. Essential Key Rules (Concise 3-Card Summary) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          
          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Stable Keys</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900">Why Keys Matter</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Keys provide permanent identity so React only updates elements that actually changed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-rose-600 font-semibold text-xs">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Avoid Index</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900">Never Index as Key</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Using array index breaks state when items are sorted, deleted, or inserted at top.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Immutability</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900">Pure State Updates</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Use <code className="font-mono text-stone-800">[...prev]</code> to add and <code className="font-mono text-stone-800">.filter()</code> to delete. Never call <code className="font-mono text-stone-800">.push()</code>.
            </p>
          </div>

        </div>

        {/* Quick links to deep guides */}
        <div className="mt-4 flex items-center justify-between text-xs text-stone-500 px-1">
          <button
            type="button"
            onClick={() => onNavigate('learn')}
            className="hover:text-blue-600 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <BookOpen className="w-3 h-3 text-blue-600" />
            <span>Read 9 Fundamental Topics Guide</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('mistakes')}
            className="hover:text-rose-600 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <AlertTriangle className="w-3 h-3 text-rose-600" />
            <span>Explore 5 Common Mistakes</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </section>
    </div>
  );
}

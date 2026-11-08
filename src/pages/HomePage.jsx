import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Play, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import InteractiveShowcaseCard from '../components/InteractiveShowcaseCard';

export default function HomePage() {
  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-10">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Interactive Demonstration Card */}
      <section id="demo-card" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 scroll-mt-20">
        <div className="mb-3 sm:mb-4 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
            Lists & Keys in Action
          </h2>
          <span className="text-xs text-stone-400 font-mono hidden sm:inline">
            Live Preview + Source Code
          </span>
        </div>

        <InteractiveShowcaseCard />
      </section>

      {/* 3. Essential Key Rules Summary */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          
          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Stable Keys</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900">Why Keys Matter</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Keys provide permanent identity so React only updates elements that actually changed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-rose-600 font-semibold text-xs">
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Avoid Index</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900">Never Index as Key</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Using array index breaks state when items are sorted, deleted, or inserted at top.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1.5 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-xs">
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Immutability</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900">Pure State Updates</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Use <code className="font-mono text-stone-800">[...prev]</code> to add and <code className="font-mono text-stone-800">.filter()</code> to delete. Never call <code className="font-mono text-stone-800">.push()</code>.
            </p>
          </div>

        </div>

        {/* Quick links */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-500 px-1">
          <Link
            to="/learn"
            className="hover:text-blue-600 flex items-center gap-1.5 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
            <span>Read 9 Fundamental Topics Guide</span>
            <ArrowRight className="w-3 h-3 flex-shrink-0" />
          </Link>

          <Link
            to="/examples"
            className="hover:text-emerald-600 flex items-center gap-1.5 transition-colors"
          >
            <Play className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Explore 3 Interactive Playgrounds</span>
            <ArrowRight className="w-3 h-3 flex-shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
}

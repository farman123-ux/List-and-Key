import { ArrowRight, BookOpen, Play, AlertTriangle, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import StudentListDemo from '../components/examples/StudentListDemo';
import AddDeleteDemo from '../components/examples/AddDeleteDemo';
import UpdateStudentDemo from '../components/examples/UpdateStudentDemo';
import { topicsData } from '../data/topicsData';
import { mistakesData } from '../data/mistakesData';
import MistakeCard from '../components/MistakeCard';

export default function HomePage({ onNavigate }) {
  return (
    <div className="space-y-20 md:space-y-28">
      {/* 1. Hero Section */}
      <Hero
        onStartLearning={() => onNavigate('learn')}
        onExploreExamples={() => onNavigate('examples')}
      />

      {/* 2. Highlights / Curriculum Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              Foundations
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-sans">
              9 Core Concepts You Need to Master
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-xl">
              From raw JavaScript loops to React's Virtual DOM reconciliation engine.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('learn')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer self-start md:self-auto group"
          >
            <span>View Full Editorial Guide</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 9 Concepts Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topicsData.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onNavigate('learn', topic.id)}
              className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-blue-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-stone-400 group-hover:text-blue-600 transition-colors">
                    {topic.number}
                  </span>
                  <span className="text-[11px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
                    {topic.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-stone-900 group-hover:text-blue-600 transition-colors mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {topic.definition}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-blue-600 font-medium">
                <span>Read explanation & code</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Examples Section */}
      <section className="bg-stone-100/60 py-16 md:py-24 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 mb-2">
                <Play className="w-3.5 h-3.5" />
                Live Demos
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-sans">
                Three Interactive Demonstrations
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-xl">
                Test the actual behavior of React lists in real time. Switch tabs to inspect the underlying source code.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('examples')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer self-start md:self-auto group"
            >
              <span>View All Playgrounds</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-10">
            <StudentListDemo />
            <AddDeleteDemo />
            <UpdateStudentDemo />
          </div>
        </div>
      </section>

      {/* 4. Common Mistakes Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200/60 mb-2">
              <AlertTriangle className="w-3.5 h-3.5" />
              Pitfalls & Best Practices
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-sans">
              Common Mistakes in React Lists
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-xl">
              Avoid subtle bugs, mismatched input states, and unneeded DOM thrashing.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('mistakes')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-700 hover:text-rose-800 cursor-pointer self-start md:self-auto group"
          >
            <span>See All 5 Pitfalls & Fixes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Show first two mistakes with link to all */}
        <div className="space-y-6">
          {mistakesData.slice(0, 2).map((m) => (
            <MistakeCard key={m.id} mistake={m} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => onNavigate('mistakes')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-stone-300 hover:border-stone-400 text-stone-800 text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            <span>Explore remaining 3 common mistakes (Indexes as keys, State mutations, Missing returns)</span>
            <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
          </button>
        </div>
      </section>
    </div>
  );
}

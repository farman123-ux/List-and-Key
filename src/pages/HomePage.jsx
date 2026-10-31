import { useState } from 'react';
import { ArrowRight, BookOpen, Play, AlertTriangle, CheckCircle2, Sparkles, Filter, Plus, Edit3 } from 'lucide-react';
import Hero from '../components/Hero';
import StudentListDemo from '../components/examples/StudentListDemo';
import AddDeleteDemo from '../components/examples/AddDeleteDemo';
import UpdateStudentDemo from '../components/examples/UpdateStudentDemo';
import { topicsData } from '../data/topicsData';
import { mistakesData } from '../data/mistakesData';
import MistakeCard from '../components/MistakeCard';
import TopicCard from '../components/TopicCard';

export default function HomePage({ onNavigate }) {
  const [activeDemoCard, setActiveDemoCard] = useState('all'); // 'all' | 'ex1' | 'ex2' | 'ex3'

  return (
    <div className="space-y-12 md:space-y-16">
      {/* 1. Hero Section (with small text and custom Array -> map() -> React Elements illustration) */}
      <Hero
        onStartLearning={() => {
          const el = document.getElementById('learning-cards');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else onNavigate('learn');
        }}
        onExploreExamples={() => {
          const el = document.getElementById('interactive-cards');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else onNavigate('examples');
        }}
      />

      {/* 2. The Cards Section: Interactive Demonstrations */}
      <section id="interactive-cards" className="max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3 border-b border-stone-200/80 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 mb-1.5">
              <Play className="w-3 h-3" />
              Interactive Cards
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight font-sans">
              Live React Demonstrations
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Three functional cards showcasing list rendering, immutable state additions, deletions, and updates.
            </p>
          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="inline-flex p-1 rounded-lg bg-stone-100 border border-stone-200/70 text-xs font-medium self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveDemoCard('all')}
              className={`px-2.5 py-1 rounded-md transition-all text-xs cursor-pointer ${
                activeDemoCard === 'all'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All 3 Cards
            </button>
            <button
              type="button"
              onClick={() => setActiveDemoCard('ex1')}
              className={`px-2.5 py-1 rounded-md transition-all text-xs cursor-pointer ${
                activeDemoCard === 'ex1'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              1. Student List
            </button>
            <button
              type="button"
              onClick={() => setActiveDemoCard('ex2')}
              className={`px-2.5 py-1 rounded-md transition-all text-xs cursor-pointer ${
                activeDemoCard === 'ex2'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              2. Add / Delete
            </button>
            <button
              type="button"
              onClick={() => setActiveDemoCard('ex3')}
              className={`px-2.5 py-1 rounded-md transition-all text-xs cursor-pointer ${
                activeDemoCard === 'ex3'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              3. Update Name
            </button>
          </div>
        </div>

        {/* Displaying the Cards */}
        <div className="space-y-8">
          {(activeDemoCard === 'all' || activeDemoCard === 'ex1') && (
            <StudentListDemo />
          )}

          {(activeDemoCard === 'all' || activeDemoCard === 'ex2') && (
            <AddDeleteDemo />
          )}

          {(activeDemoCard === 'all' || activeDemoCard === 'ex3') && (
            <UpdateStudentDemo />
          )}
        </div>
      </section>

      {/* 3. The Learning Cards: 9 Core Concepts Overview */}
      <section id="learning-cards" className="max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3 border-b border-stone-200/80 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60 mb-1.5">
              <BookOpen className="w-3 h-3" />
              Foundations (9 Topics)
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight font-sans">
              Understand the Fundamentals
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Clean editorial explanations with concise definitions, code snippets, and expected outputs.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('learn')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer self-start sm:self-auto group"
          >
            <span>Open Dedicated Guide View</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Grid of Concept Cards with small text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topicsData.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onNavigate('learn', topic.id)}
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-blue-300 hover:shadow-2xs transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] font-bold text-stone-400 group-hover:text-blue-600 transition-colors">
                    {topic.number}
                  </span>
                  <span className="text-[10px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
                    {topic.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-stone-900 group-hover:text-blue-600 transition-colors mb-1.5">
                  {topic.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {topic.definition}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-blue-600 font-medium">
                <span>View definition & code</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Common Mistake Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3 border-b border-stone-200/80 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200/60 mb-1.5">
              <AlertTriangle className="w-3 h-3" />
              Gotchas & Pitfalls
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight font-sans">
              Common Mistakes in React Lists
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Before & After comparisons showing how to avoid state bugs and console warnings.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('mistakes')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 hover:text-rose-800 cursor-pointer self-start sm:self-auto group"
          >
            <span>View All 5 Pitfalls</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="space-y-4">
          {mistakesData.slice(0, 2).map((m) => (
            <MistakeCard key={m.id} mistake={m} />
          ))}
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { topicsData } from '../data/topicsData';
import TopicCard from '../components/TopicCard';

export default function LearnPage() {
  const [activeTopicId, setActiveTopicId] = useState(topicsData[0].id);

  const scrollToTopic = (id) => {
    setActiveTopicId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-6 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
          Understand the Fundamentals
        </h2>
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed">
          Master the core mechanics of how React renders collections, identifies elements with keys, and reconciles the DOM efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Sticky Table of Contents (Desktop) */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-4">
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                Curriculum
              </span>
             
            </div>

            <nav className="space-y-1">
              {topicsData.map((topic) => {
                const isActive = activeTopicId === topic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => scrollToTopic(topic.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-semibold shadow-2xs border border-blue-200/50'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-mono text-[11px] text-stone-400">
                        {topic.number}
                      </span>
                      <span className="truncate">{topic.title}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick study tip callout */}
          <div className="p-4 rounded-xl bg-stone-100/70 border border-stone-200/80 text-xs text-stone-600">
            <span className="font-semibold text-stone-800 block mb-1">
              Pro Developer Tip
            </span>
            Keys only need to be unique among sibling elements. They do not need to be globally unique across your whole app.
          </div>
        </aside>

        {/* Editorial Topics List */}
        <main className="lg:col-span-8 space-y-12">
          {topicsData.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </main>

      </div>
    </div>
  );
}

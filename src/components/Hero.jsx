import { useState } from 'react';
import { ArrowRight, Sparkles, Shuffle, CheckCircle2, Layers, Cpu } from 'lucide-react';

export default function Hero({ onStartLearning, onExploreExamples }) {
  const [students, setStudents] = useState([
    { id: 'std-01', name: 'Alex Rivera', role: 'Frontend Dev', active: true },
    { id: 'std-02', name: 'Sarah Chen', role: 'UI Engineer', active: true },
    { id: 'std-03', name: 'Devin Taylor', role: 'Fullstack', active: false }
  ]);
  const [highlightKey, setHighlightKey] = useState(null);

  const handleShuffle = () => {
    setStudents((prev) => [...prev].reverse());
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-stone-200/80 overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-[#FAF9F5] to-stone-50/50">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/60 border border-stone-300/80 text-stone-700 text-xs font-mono tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              REACT FUNDAMENTALS / 03
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.1] font-sans">
              Lists & Keys, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Made Simple.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-stone-600 max-w-xl leading-relaxed font-normal">
              Learn how React renders dynamic lists, identifies elements with keys, and manages data through simple, practical examples.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onStartLearning}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExploreExamples}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-semibold text-base transition-all border border-stone-300 shadow-2xs hover:border-stone-400 cursor-pointer"
              >
                <span>Explore Examples</span>
              </button>
            </div>

            {/* Quick feature badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-stone-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>React 19 Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>9 Clean Guides</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>3 Live Playgrounds</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Visual Illustration (Array → map() → React Elements) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-lg p-6 sm:p-7 relative">
              {/* Illustration Top Label */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200/80">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-stone-800 tracking-wide uppercase font-mono">
                    The Mental Model: Data to DOM
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleShuffle}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer border border-stone-200"
                  title="Reverse array to watch keys stay with items"
                >
                  <Shuffle className="w-3 h-3 text-stone-500" />
                  <span>Reverse Array</span>
                </button>
              </div>

              {/* Step 1: Array Data Box */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span className="font-semibold text-stone-700">1. JavaScript Array</span>
                  <span>in-memory data</span>
                </div>
                <div className="p-3 bg-[#16161a] rounded-xl font-mono text-xs text-stone-200 border border-stone-800 overflow-x-auto shadow-inner">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">students</span> = [
                  <div className="pl-4 text-stone-300">
                    {students.map((s, idx) => (
                      <div
                        key={s.id}
                        onMouseEnter={() => setHighlightKey(s.id)}
                        onMouseLeave={() => setHighlightKey(null)}
                        className={`transition-colors py-0.5 cursor-pointer rounded px-1 ${
                          highlightKey === s.id ? 'bg-blue-900/40 text-blue-200' : ''
                        }`}
                      >
                        {'{ '}
                        <span className="text-stone-400">id:</span>{' '}
                        <span className="text-amber-300">'{s.id}'</span>,{' '}
                        <span className="text-stone-400">name:</span>{' '}
                        <span className="text-emerald-300">'{s.name}'</span>
                        {' }'}
                        {idx < students.length - 1 ? ',' : ''}
                      </div>
                    ))}
                  </div>
                  ];
                </div>
              </div>

              {/* Step 2: The Map Transformer Bridge */}
              <div className="my-3 py-2 flex flex-col items-center justify-center relative">
                <div className="w-full flex items-center justify-center">
                  <div className="h-px bg-stone-200 w-full" />
                  <div className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-mono font-semibold flex items-center gap-1.5 whitespace-nowrap shadow-xs">
                    <Cpu className="w-3.5 h-3.5 text-blue-600" />
                    <span>.map((student) =&gt; &lt;StudentCard key={'{student.id}'} /&gt;)</span>
                  </div>
                  <div className="h-px bg-stone-200 w-full" />
                </div>
              </div>

              {/* Step 3: Rendered React Elements */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span className="font-semibold text-stone-700">3. Rendered React Elements</span>
                  <span className="text-emerald-600 font-medium">Reconciled DOM</span>
                </div>

                <div className="space-y-2">
                  {students.map((student) => {
                    const isHighlighted = highlightKey === student.id;

                    return (
                      <div
                        key={student.id}
                        onMouseEnter={() => setHighlightKey(student.id)}
                        onMouseLeave={() => setHighlightKey(null)}
                        className={`p-3 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                          isHighlighted
                            ? 'border-blue-500 bg-blue-50/40 shadow-xs ring-1 ring-blue-400/30'
                            : 'border-stone-200 bg-stone-50/50 hover:bg-white hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-stone-900 block leading-tight">
                              {student.name}
                            </span>
                            <span className="text-[11px] text-stone-500">{student.role}</span>
                          </div>
                        </div>

                        {/* Visual Key Badge */}
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-xs px-2.5 py-1 rounded-md border font-semibold transition-all ${
                              isHighlighted
                                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                                : 'bg-white text-blue-700 border-blue-200'
                            }`}
                          >
                            key="{student.id}"
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom explanatory footer */}
              <div className="mt-4 pt-3 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Hover over any item to trace its ID to its DOM node
                </span>
                <span className="font-mono text-stone-400">stable identity</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

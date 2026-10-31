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
    <section className="relative pt-8 pb-12 md:pt-12 md:pb-16 border-b border-stone-200/80 overflow-hidden bg-[#FAF9F5]">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading and CTAs with refined small text */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {/* Small label */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-200/70 border border-stone-300 text-stone-700 text-[11px] font-mono tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              REACT FUNDAMENTALS / 03
            </div>

            {/* Main Heading with refined small size */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight font-sans">
              Lists & Keys, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Made Simple.
              </span>
            </h1>

            {/* Description with small text */}
            <p className="text-xs sm:text-sm text-stone-600 max-w-lg leading-relaxed font-normal">
              Learn how React renders dynamic lists, identifies elements with keys, and manages data through simple, practical examples.
            </p>

            {/* Action Buttons with compact small sizes */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={onStartLearning}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-xs sm:text-sm transition-all shadow-xs cursor-pointer group"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExploreExamples}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-stone-50 text-stone-700 font-medium text-xs sm:text-sm transition-all border border-stone-300 shadow-2xs hover:border-stone-400 cursor-pointer"
              >
                <span>Explore Examples</span>
              </button>
            </div>

            {/* Quick feature badges with small text */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-[11px] text-stone-500 font-medium">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>React 19</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>9 Clean Guides</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>3 Live Playgrounds</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Visual Illustration (Array → map() → React Elements) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl border border-stone-200 shadow-xs p-4 sm:p-5 relative">
              {/* Illustration Top Label */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-[11px] font-bold text-stone-800 tracking-wide uppercase font-mono">
                    Array → map() → React Elements
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleShuffle}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono font-medium rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer border border-stone-200"
                  title="Reverse array to watch keys stay attached to elements"
                >
                  <Shuffle className="w-2.5 h-2.5 text-stone-500" />
                  <span>Reverse Array</span>
                </button>
              </div>

              {/* Step 1: Array Data Box */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-500">
                  <span className="font-semibold text-stone-700">1. JavaScript Array</span>
                  <span>in-memory data</span>
                </div>
                <div className="p-2.5 bg-[#16161a] rounded-lg font-mono text-[11px] text-stone-200 border border-stone-800 overflow-x-auto shadow-inner leading-relaxed">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">students</span> = [
                  <div className="pl-3 text-stone-300">
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
              <div className="my-2 py-1 flex flex-col items-center justify-center relative">
                <div className="w-full flex items-center justify-center">
                  <div className="h-px bg-stone-200 w-full" />
                  <div className="px-2.5 py-0.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-[10px] font-mono font-semibold flex items-center gap-1 whitespace-nowrap shadow-xs">
                    <Cpu className="w-3 h-3 text-blue-600" />
                    <span>.map((student) =&gt; &lt;StudentCard key={'{student.id}'} /&gt;)</span>
                  </div>
                  <div className="h-px bg-stone-200 w-full" />
                </div>
              </div>

              {/* Step 3: Rendered React Elements */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-500">
                  <span className="font-semibold text-stone-700">3. Rendered React Elements</span>
                  <span className="text-emerald-600 font-medium">Reconciled DOM</span>
                </div>

                <div className="space-y-1.5">
                  {students.map((student) => {
                    const isHighlighted = highlightKey === student.id;

                    return (
                      <div
                        key={student.id}
                        onMouseEnter={() => setHighlightKey(student.id)}
                        onMouseLeave={() => setHighlightKey(null)}
                        className={`p-2 rounded-lg border transition-all duration-150 flex items-center justify-between gap-2 ${
                          isHighlighted
                            ? 'border-blue-500 bg-blue-50/50 shadow-2xs ring-1 ring-blue-400/30'
                            : 'border-stone-200 bg-stone-50/60 hover:bg-white hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-stone-900 block leading-tight">
                              {student.name}
                            </span>
                            <span className="text-[10px] text-stone-500">{student.role}</span>
                          </div>
                        </div>

                        {/* Visual Key Badge */}
                        <div className="flex items-center gap-1">
                          <span
                            className={`font-mono text-[10px] px-1.5 py-0.5 rounded border font-semibold transition-all ${
                              isHighlighted
                                ? 'bg-blue-600 text-white border-blue-600'
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
              <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Hover to trace student identity to DOM node
                </span>
                <span className="font-mono text-stone-400">stable keys</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

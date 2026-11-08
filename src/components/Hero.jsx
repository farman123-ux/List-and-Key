import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shuffle, CheckCircle2, Layers, Cpu } from 'lucide-react';

export default function Hero() {
  const [students, setStudents] = useState([
    { id: 'std-01', name: 'Farman Khan', role: 'Frontend Dev' },
    { id: 'std-02', name: 'Imran', role: 'UI Engineer' },
    { id: 'std-03', name: 'Ali', role: 'Fullstack' }
  ]);

  // Simple reverse array to demonstrate stable keys in action
  const handleReverse = () => {
    setStudents([...students].reverse());
  };

  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-14 border-b border-stone-200/80 overflow-hidden bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Description & CTAs */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Lists & Keys, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Made Simple.
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 max-w-lg leading-relaxed">
              Learn how React renders dynamic lists, identifies elements with unique keys, and updates state cleanly without bugs.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <a
                href="#demo-card"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm transition-all shadow-xs cursor-pointer group"
              >
                <span>Try Demo Below</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <Link
                to="/examples"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-stone-50 text-stone-700 font-medium text-xs sm:text-sm transition-all border border-stone-300 shadow-2xs hover:border-stone-400 cursor-pointer"
              >
                <span>Explore Examples</span>
              </Link>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] text-stone-500 font-medium">
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
                <span>Simple Code Logic</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Demonstration */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-xl border border-stone-200 shadow-xs p-3.5 sm:p-5">
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100 gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Layers className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span className="text-[11px] font-bold text-stone-800 tracking-wide uppercase font-mono truncate">
                    Array → map() → Elements
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleReverse}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-medium rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer border border-stone-200 flex-shrink-0"
                >
                  <Shuffle className="w-3 h-3 text-stone-500" />
                  <span>Reverse</span>
                </button>
              </div>

              {/* Step 1: Raw Array */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-stone-500 font-semibold">
                  1. JavaScript Array
                </div>
                <div className="p-2.5 bg-[#16161a] rounded-lg font-mono text-[11px] sm:text-xs text-stone-200 overflow-x-auto">
                  <span className="text-purple-400">const</span> <span className="text-blue-300">students</span> = [
                  <div className="pl-3">
                    {students.map((s, idx) => (
                      <div key={s.id} className="whitespace-nowrap">
                        {'{ '}id: <span className="text-amber-300">'{s.id}'</span>, name: <span className="text-emerald-300">'{s.name}'</span>{' }'}
                        {idx < students.length - 1 ? ',' : ''}
                      </div>
                    ))}
                  </div>
                  ];
                </div>
              </div>

              {/* Step 2: The Map Transform */}
              <div className="my-2.5 text-center">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-[10px] font-mono font-semibold max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                  <Cpu className="w-3 h-3 text-blue-600 flex-shrink-0" />
                  <span className="truncate">students.map((s) =&gt; &lt;StudentCard key={'{s.id}'} /&gt;)</span>
                </div>
              </div>

              {/* Step 3: Rendered Elements */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono text-stone-500 font-semibold">
                  2. Rendered React Elements
                </div>
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="p-2 rounded-lg border border-stone-200 bg-stone-50/60 flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {student.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-semibold text-stone-900 block leading-tight truncate">
                          {student.name}
                        </span>
                        <span className="text-[10px] text-stone-500 block truncate">{student.role}</span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold flex-shrink-0">
                      key="{student.id}"
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

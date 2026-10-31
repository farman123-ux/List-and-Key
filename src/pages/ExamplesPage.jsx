import { Play, Sparkles } from 'lucide-react';
import StudentListDemo from '../components/examples/StudentListDemo';
import AddDeleteDemo from '../components/examples/AddDeleteDemo';
import UpdateStudentDemo from '../components/examples/UpdateStudentDemo';

export default function ExamplesPage() {
  return (
    <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <Play className="w-3.5 h-3.5" />
          Interactive Playgrounds
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
          Functional Demonstrations
        </h2>
        <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
          Explore three complete, interactive React implementations. Test each interface directly and toggle the source code tab to see how state and keys interact.
        </p>
      </div>

      {/* 3 Demonstrations */}
      <div className="space-y-12">
        {/* Example 1: Student List */}
        <div id="example-1" className="scroll-mt-24">
          <StudentListDemo />
        </div>

        {/* Example 2: Add & Delete Students */}
        <div id="example-2" className="scroll-mt-24">
          <AddDeleteDemo />
        </div>

        {/* Example 3: Update Student Name */}
        <div id="example-3" className="scroll-mt-24">
          <UpdateStudentDemo />
        </div>
      </div>
    </div>
  );
}

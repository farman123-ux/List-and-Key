import { useState } from 'react';
import { UserCheck, Tag, Code2, Play } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const INITIAL_STUDENTS = [
  { id: 'std-101', name: 'Farman khan', major: 'Frontend Eng', year: 'Year 2' },
  { id: 'std-102', name: 'Ali', major: 'Fullstack Dev', year: 'Year 3' },
  { id: 'std-103', name: 'Haseeb', major: 'UI Systems', year: 'Year 1' },
  { id: 'std-104', name: 'Abdullah', major: 'React Specialist', year: 'Year 4' }
];

const CODE_STRING = `import { useState } from 'react';

const INITIAL_STUDENTS = [
  { id: 'std-101', name: 'Farman khan', major: 'Frontend Eng' },
  { id: 'std-102', name: 'Ali', major: 'Fullstack Dev' },
  { id: 'std-103', name: 'Haseeb', major: 'UI Systems' },
  { id: 'std-104', name: 'Abdullah', major: 'React Specialist' }
];

export default function StudentList() {
  const [students] = useState(INITIAL_STUDENTS);

  return (
    <ul className="space-y-2">
      {students.map((student) => (
        // Key is placed on outermost element of the map iteration
        <li
          key={student.id}
          className="p-3 bg-white border border-stone-200 rounded-lg flex justify-between"
        >
          <div>
            <span className="font-medium text-stone-900">{student.name}</span>
            <span className="text-xs text-stone-500 ml-2">{student.major}</span>
          </div>
          <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded">
            key={student.id}
          </span>
        </li>
      ))}
    </ul>
  );
}`;

export default function StudentListDemo() {
  const [students] = useState(INITIAL_STUDENTS);
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'code'
  const [filterQuery, setFilterQuery] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    student.major.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden">
      {/* Card Header with tabs */}
      <div className="px-6 py-4 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 bg-stone-50/50">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
              Example 01
            </span>
            <h3 className="text-lg font-bold text-stone-900">Student List</h3>
          </div>
          <p className="text-sm text-stone-600 mt-0.5">
            Render dynamic arrays using <code className="text-xs bg-stone-100 text-stone-800 px-1 py-0.5 rounded font-mono">.map()</code> with stable, unique keys.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 rounded-lg bg-stone-200/60 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'demo'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            Interactive Demo
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'code'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Source Code
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {activeTab === 'demo' ? (
          <div>
            {/* Filter toolbar */}
            <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Filter by name or major..."
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  className="text-sm px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all w-64 placeholder:text-stone-400"
                />
                {filterQuery && (
                  <button
                    onClick={() => setFilterQuery('')}
                    className="text-xs text-stone-500 hover:text-stone-800 underline"
                  >
                    Clear
                  </button>
                )}
              </div>
              <span className="text-xs text-stone-500 font-mono">
                Showing {filteredStudents.length} of {students.length} students
              </span>
            </div>

            {/* List Container */}
            <div className="space-y-2.5">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    className="p-3.5 rounded-xl border border-stone-200/80 bg-white hover:border-blue-300 hover:shadow-xs transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm flex items-center justify-center border border-blue-100 flex-shrink-0">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-stone-900 text-sm flex items-center gap-2">
                          {student.name}
                          <span className="text-[11px] font-normal text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                            {student.year}
                          </span>
                        </div>
                        <p className="text-xs text-stone-500">{student.major}</p>
                      </div>
                    </div>

                    {/* Key badge */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-stone-100 text-stone-700 border border-stone-200/80 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors">
                        <Tag className="w-3 h-3 text-stone-400 group-hover:text-blue-500" />
                        key="{student.id}"
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center border border-dashed border-stone-200 rounded-xl text-stone-500 text-sm">
                  No students match "{filterQuery}".
                </div>
              )}
            </div>

            {/* Educational Note */}
            <div className="mt-5 p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 text-xs text-stone-600 flex items-start gap-2.5">
              <UserCheck className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-stone-800">Why this works:</strong> Each student has an unchanging string ID (<code className="font-mono text-stone-800">std-101</code>). When you filter, React uses the <code className="font-mono text-stone-800">key</code> to know which DOM elements to keep, avoid reconstructing, and maintain in memory.
              </div>
            </div>
          </div>
        ) : (
          <CodeBlock code={CODE_STRING} title="StudentList.jsx" />
        )}
      </div>
    </div>
  );
}

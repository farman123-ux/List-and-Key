import { useState } from 'react';
import { Plus, Trash2, RotateCcw, AlertCircle, Code2, Play, CheckCircle2 } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const DEFAULT_STUDENTS = [
  { id: 's-1', name: 'Farman khan', grade: 'A+' },
  { id: 's-2', name: 'Ali', grade: 'A' },
  { id: 's-3', name: 'Haseeb', grade: 'B+' }
];

const CODE_STRING = `import { useState } from 'react';

export default function StudentManager() {
  const [students, setStudents] = useState([
    { id: 's-1', name: 'Farman khan', grade: 'A+' },
    { id: 's-2', name: 'Ali', grade: 'A' },
    { id: 's-3', name: 'Haseeb', grade: 'B+' }
  ]);
  const [inputName, setInputName] = useState('');

  // 1. ADD: Immutable array creation with spread operator [...]
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!inputName.trim()) return;

    const newStudent = {
      id: 's-' + Date.now().toString().slice(-4),
      name: inputName.trim(),
      grade: 'A'
    };

    // Correct: returns a new array reference
    setStudents((prev) => [...prev, newStudent]);
    setInputName('');
  };

  // 2. DELETE: Filter out item by ID without mutating original array
  const handleDeleteStudent = (idToDelete) => {
    setStudents((prev) => prev.filter((item) => item.id !== idToDelete));
  };

  return (
    <div>
      <form onSubmit={handleAddStudent}>
        <input
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Student full name..."
        />
        <button type="submit">Add Student</button>
      </form>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => handleDeleteStudent(student.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`;

export default function AddDeleteDemo() {
  const [students, setStudents] = useState(DEFAULT_STUDENTS);
  const [inputName, setInputName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'code'
  const [lastAction, setLastAction] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = inputName.trim();
    if (!trimmed) {
      setErrorMsg('Please enter a student name before adding.');
      return;
    }
    if (trimmed.length < 2) {
      setErrorMsg('Name should be at least 2 characters.');
      return;
    }

    const newStudent = {
      id: 's-' + Math.floor(100 + Math.random() * 900),
      name: trimmed,
      grade: 'A'
    };

    // Immutably append
    setStudents((prev) => [...prev, newStudent]);
    setInputName('');
    setErrorMsg('');
    setLastAction(`Added "${newStudent.name}" with ID key="${newStudent.id}"`);
  };

  const handleDelete = (id, name) => {
    // Immutably filter
    setStudents((prev) => prev.filter((s) => s.id !== id));
    setLastAction(`Deleted "${name}" (ID: ${id})`);
  };

  const handleReset = () => {
    setStudents(DEFAULT_STUDENTS);
    setInputName('');
    setErrorMsg('');
    setLastAction('Reset roster to default students');
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 bg-stone-50/50">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
              Example 02
            </span>
            <h3 className="text-base sm:text-lg font-bold text-stone-900">Add & Delete Students</h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            Use <code className="text-xs bg-stone-100 text-stone-800 px-1 py-0.5 rounded font-mono">[...prev, newItem]</code> to add and <code className="text-xs bg-stone-100 text-stone-800 px-1 py-0.5 rounded font-mono">filter()</code> to remove items immutably.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 rounded-lg bg-stone-200/60 text-xs font-medium max-w-full overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all whitespace-nowrap ${
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
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all whitespace-nowrap ${
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

      {/* Main Container */}
      <div className="p-4 sm:p-6">
        {activeTab === 'demo' ? (
          <div>
            {/* Form */}
            <form onSubmit={handleAdd} className="mb-5">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputName}
                    onChange={(e) => {
                      setInputName(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="Enter student name (e.g., Alex Rivers)..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none ${
                      errorMsg
                        ? 'border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400/20'
                        : 'border-stone-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                  />
                  {errorMsg && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errorMsg}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm rounded-xl transition-colors shadow-xs flex-shrink-0 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Add Student
                </button>
              </div>
            </form>

            {/* List Header Info */}
            <div className="flex items-center justify-between mb-3 text-xs text-stone-500">
              <span className="font-semibold text-stone-700">
                Current Class Roster ({students.length})
              </span>
              {students.length !== DEFAULT_STUDENTS.length && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 text-stone-600 hover:text-stone-900 underline text-xs cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset to default
                </button>
              )}
            </div>

            {/* Student List */}
            <div className="space-y-2">
              {students.length > 0 ? (
                students.map((student) => (
                  <div
                    key={student.id}
                    className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-stone-300 transition-all flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center border border-emerald-100">
                        {student.grade}
                      </div>
                      <div>
                        <p className="font-semibold text-stone-900 text-sm">{student.name}</p>
                        <span className="text-[11px] font-mono text-stone-500">
                          id: <span className="text-blue-600 font-semibold">{student.id}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-block text-[11px] font-mono text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                        key="{student.id}"
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDelete(student.id, student.name)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/80 transition-colors border border-red-200/50 cursor-pointer"
                        title="Delete student"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center border-2 border-dashed border-stone-200 rounded-xl bg-stone-50/50">
                  <p className="text-sm text-stone-600 font-medium">All students removed!</p>
                  <p className="text-xs text-stone-400 mt-1">
                    Add a new student above, or click below to restore sample records.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 cursor-pointer shadow-2xs"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Restore Default List
                  </button>
                </div>
              )}
            </div>

            {/* Last Action Toast / Log */}
            {lastAction && (
              <div className="mt-4 px-3 py-2 rounded-lg bg-stone-100/80 border border-stone-200/80 text-xs text-stone-600 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>
                  <strong className="text-stone-800">State Transition:</strong> {lastAction}
                </span>
              </div>
            )}
          </div>
        ) : (
          <CodeBlock code={CODE_STRING} title="AddDeleteStudents.jsx" />
        )}
      </div>
    </div>
  );
}

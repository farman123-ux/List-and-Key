import { useState } from 'react';
import { Edit3, Check, X, RotateCcw, Code2, Play, Sparkles } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const INITIAL_ROSTER = [
  { id: 'usr-1', name: 'Farman khan', role: 'Team Lead', attendance: '98%' },
  { id: 'usr-2', name: 'Ali', role: 'UI Architect', attendance: '95%' },
  { id: 'usr-3', name: 'Haseeb', role: 'DevOps Engineer', attendance: '92%' }
];

const CODE_STRING = `import { useState } from 'react';

export default function UpdateStudentList() {
  const [students, setStudents] = useState([
    { id: 'usr-1', name: 'Farman khan', role: 'Team Lead' },
    { id: 'usr-2', name: 'Ali', role: 'UI Architect' },
    { id: 'usr-3', name: 'Haseeb', role: 'DevOps Engineer' }
  ]);
  const [editingId, setEditingId] = useState(null);
  const [tempName, setTempName] = useState('');

  // Start editing a specific student
  const startEdit = (student) => {
    setEditingId(student.id);
    setTempName(student.name);
  };

  // UPDATE: Map over array and update matching object immutably
  const saveUpdate = (id) => {
    if (!tempName.trim()) return;

    setStudents((prev) =>
      prev.map((student) => {
        if (student.id === id) {
          // Return new object with updated name
          return { ...student, name: tempName.trim() };
        }
        // Return untouched object
        return student;
      })
    );

    setEditingId(null);
  };

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {editingId === student.id ? (
            <div>
              <input
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
              />
              <button onClick={() => saveUpdate(student.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <span>{student.name}</span>
              <button onClick={() => startEdit(student)}>Edit Name</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}`;

export default function UpdateStudentDemo() {
  const [students, setStudents] = useState(INITIAL_ROSTER);
  const [editingId, setEditingId] = useState(null);
  const [tempName, setTempName] = useState('');
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'code'
  const [updatedHighlightId, setUpdatedHighlightId] = useState(null);

  const handleStartEdit = (student) => {
    setEditingId(student.id);
    setTempName(student.name);
  };

  const handleSave = (id) => {
    const trimmed = tempName.trim();
    if (!trimmed) return;

    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, name: trimmed } : student
      )
    );
    setEditingId(null);
    setUpdatedHighlightId(id);
    setTimeout(() => setUpdatedHighlightId(null), 2500);
  };

  const handleCancel = () => {
    setEditingId(null);
    setTempName('');
  };

  const handleReset = () => {
    setStudents(INITIAL_ROSTER);
    setEditingId(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 bg-stone-50/50">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/60">
              Example 03
            </span>
            <h3 className="text-base sm:text-lg font-bold text-stone-900">Update Student Name</h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            Modify state cleanly using <code className="text-xs bg-stone-100 text-stone-800 px-1 py-0.5 rounded font-mono">.map()</code> and object spread <code className="text-xs bg-stone-100 text-stone-800 px-1 py-0.5 rounded font-mono">{"{ ...item, name }"}</code>.
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

      {/* Main Area */}
      <div className="p-4 sm:p-6">
        {activeTab === 'demo' ? (
          <div>
            <div className="flex items-center justify-between mb-4 text-xs text-stone-500">
              <span className="font-semibold text-stone-700">
                Click "Edit" on any student to update their record:
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1 text-stone-600 hover:text-stone-900 underline cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Data
              </button>
            </div>

            <div className="space-y-3">
              {students.map((student) => {
                const isEditing = editingId === student.id;
                const isJustUpdated = updatedHighlightId === student.id;

                return (
                  <div
                    key={student.id}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      isEditing
                        ? 'border-blue-400 bg-blue-50/20 ring-2 ring-blue-500/10'
                        : isJustUpdated
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    {isEditing ? (
                      /* Inline Edit Mode */
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <div className="flex-1">
                          <label className="block text-[11px] font-semibold text-blue-700 uppercase tracking-wider mb-1">
                            Editing Name for {student.id}
                          </label>
                          <input
                            type="text"
                            value={tempName}
                            onChange={(e) => setTempName(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleSave(student.id);
                              if (e.key === 'Escape') handleCancel();
                            }}
                            autoFocus
                            className="w-full px-3 py-1.5 text-sm rounded-lg border border-blue-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                          />
                        </div>
                        <div className="flex items-center gap-2 self-end sm:self-center">
                          <button
                            type="button"
                            onClick={() => handleSave(student.id)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium cursor-pointer transition-colors shadow-2xs"
                          >
                            <Check className="w-3.5 h-3.5" />
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={handleCancel}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-medium cursor-pointer transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Normal Display Mode */
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-700 font-bold text-xs flex items-center justify-center border border-purple-100 flex-shrink-0">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-stone-900 text-sm">
                                {student.name}
                              </span>
                              {isJustUpdated && (
                                <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded-full animate-fade">
                                  <Sparkles className="w-2.5 h-2.5" />
                                  Saved
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-xs text-stone-500">{student.role}</span>
                              <span className="text-[11px] text-stone-400">•</span>
                              <span className="text-[11px] font-mono text-stone-400">
                                key="{student.id}"
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleStartEdit(student)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 border border-stone-200/70 transition-colors cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-stone-500" />
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mental Model Callout */}
            <div className="mt-5 p-3.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs text-stone-600 flex items-start gap-2.5">
              <span className="font-mono text-purple-600 font-bold">💡</span>
              <div>
                <strong className="text-stone-800">The Immutability Rule:</strong> Notice how <code className="font-mono text-stone-800">.map()</code> returns a new array, and <code className="font-mono text-stone-800">{"{ ...student, name }"}</code> creates a new object for ONLY the edited student. All other students retain their exact identity.
              </div>
            </div>
          </div>
        ) : (
          <CodeBlock code={CODE_STRING} title="UpdateStudent.jsx" />
        )}
      </div>
    </div>
  );
}

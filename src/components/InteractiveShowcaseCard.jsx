import { useState } from 'react';
import { Play, Code2, Plus, Trash2, Edit3, Check, X, Tag, RotateCcw, Search, Sparkles } from 'lucide-react';
import CodeBlock from './CodeBlock';

const INITIAL_DATA = [
  { id: 's-101', name: 'Sophia Taylor', role: 'Frontend Dev', grade: 'A+' },
  { id: 's-102', name: 'Liam Patel', role: 'Fullstack Dev', grade: 'A' },
  { id: 's-103', name: 'Emma Watson', role: 'UI Systems', grade: 'A-' }
];

export default function InteractiveShowcaseCard() {
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'add-delete' | 'update'
  const [viewMode, setViewMode] = useState('both'); // 'demo' | 'code' | 'both'
  const [students, setStudents] = useState(INITIAL_DATA);

  // Example 1: Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Example 2: Add student
  const [newStudentName, setNewStudentName] = useState('');
  const [addError, setAddError] = useState('');

  // Example 3: Update student
  const [editingId, setEditingId] = useState(null);
  const [editNameText, setEditNameText] = useState('');
  const [lastEditedId, setLastEditedId] = useState(null);

  // Handlers
  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = newStudentName.trim();
    if (!trimmed) {
      setAddError('Enter a name');
      return;
    }
    const newEntry = {
      id: `s-${Math.floor(100 + Math.random() * 900)}`,
      name: trimmed,
      role: 'Student',
      grade: 'A'
    };
    // Immutable spread
    setStudents((prev) => [...prev, newEntry]);
    setNewStudentName('');
    setAddError('');
  };

  const handleDelete = (id) => {
    // Immutable filter
    setStudents((prev) => prev.filter((item) => item.id !== id));
  };

  const handleStartEdit = (student) => {
    setEditingId(student.id);
    setEditNameText(student.name);
  };

  const handleSaveEdit = (id) => {
    const trimmed = editNameText.trim();
    if (!trimmed) return;
    // Immutable map
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, name: trimmed } : s))
    );
    setEditingId(null);
    setLastEditedId(id);
    setTimeout(() => setLastEditedId(null), 2000);
  };

  const handleReset = () => {
    setStudents(INITIAL_DATA);
    setEditingId(null);
    setSearchQuery('');
    setNewStudentName('');
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Code snippets for each tab
  const CODE_SNIPPETS = {
    list: `// 1. Rendering Lists with .map() & Keys
const students = [
  { id: 's-101', name: 'Sophia Taylor' },
  { id: 's-102', name: 'Liam Patel' }
];

export default function StudentList() {
  return (
    <ul>
      {students.map((student) => (
        // Key uniquely identifies each list item
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}`,
    'add-delete': `// 2. Immutable Add & Delete Operations
const handleAdd = (name) => {
  const newItem = { id: crypto.randomUUID(), name };
  // Spread operator creates a fresh array reference
  setStudents(prev => [...prev, newItem]);
};

const handleDelete = (idToDelete) => {
  // Filter creates a new array without the target ID
  setStudents(prev => prev.filter(s => s.id !== idToDelete));
};`,
    update: `// 3. Immutable Item Update with .map()
const handleUpdate = (id, newName) => {
  setStudents(prev =>
    prev.map(student => {
      if (student.id === id) {
        // Return new object with updated name
        return { ...student, name: newName };
      }
      // Return unchanged item
      return student;
    })
  );
};`
  };

  return (
    <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm overflow-hidden text-stone-800">
      {/* Top Bar: Tabs for the 3 Examples */}
      <div className="px-4 py-3 border-b border-stone-200 bg-stone-50/70 flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-stone-200/60 p-1 rounded-lg text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('list')}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'list'
                ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            1. Student List
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('add-delete')}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'add-delete'
                ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            2. Add & Delete
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('update')}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'update'
                ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            3. Update Name
          </button>
        </div>

        {/* View Toggle / Reset */}
        <div className="flex items-center gap-2">
          {students.length !== INITIAL_DATA.length && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-[11px] text-stone-500 hover:text-stone-800 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}

          <div className="hidden sm:inline-flex bg-stone-200/60 p-0.5 rounded-md text-[11px] font-medium text-stone-600">
            <button
              type="button"
              onClick={() => setViewMode('both')}
              className={`px-2 py-0.5 rounded cursor-pointer ${
                viewMode === 'both' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : ''
              }`}
            >
              Split View
            </button>
            <button
              type="button"
              onClick={() => setViewMode('demo')}
              className={`px-2 py-0.5 rounded cursor-pointer ${
                viewMode === 'demo' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : ''
              }`}
            >
              UI Only
            </button>
            <button
              type="button"
              onClick={() => setViewMode('code')}
              className={`px-2 py-0.5 rounded cursor-pointer ${
                viewMode === 'code' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : ''
              }`}
            >
              Code Only
            </button>
          </div>
        </div>

      </div>

      {/* Main Body: Grid with Demo UI + Code Side-by-Side */}
      <div className={`p-4 sm:p-5 grid gap-5 ${viewMode === 'both' ? 'lg:grid-cols-12' : 'grid-cols-1'}`}>
        
        {/* Left Side: Interactive Demo UI */}
        {(viewMode === 'both' || viewMode === 'demo') && (
          <div className={viewMode === 'both' ? 'lg:col-span-6 space-y-3' : 'space-y-3'}>
            
            {/* Contextual control toolbar for each tab */}
            {activeTab === 'list' && (
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Filter students by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500"
                />
              </div>
            )}

            {activeTab === 'add-delete' && (
              <form onSubmit={handleAdd} className="flex gap-1.5">
                <input
                  type="text"
                  placeholder="Student name..."
                  value={newStudentName}
                  onChange={(e) => {
                    setNewStudentName(e.target.value);
                    if (addError) setAddError('');
                  }}
                  className={`flex-1 px-3 py-1.5 text-xs rounded-lg border bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 ${
                    addError ? 'border-red-400 ring-red-400' : 'border-stone-200 focus:ring-blue-500'
                  }`}
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </form>
            )}

            {activeTab === 'update' && (
              <div className="text-xs text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-200/70">
                Click <strong>Edit</strong> on any student row below to modify their name.
              </div>
            )}

            {/* Student List Items */}
            <div className="space-y-1.5">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => {
                  const isEditing = editingId === student.id;
                  const isJustUpdated = lastEditedId === student.id;

                  return (
                    <div
                      key={student.id}
                      className={`p-2.5 rounded-lg border transition-all flex items-center justify-between gap-2 ${
                        isEditing
                          ? 'bg-blue-50/40 border-blue-400'
                          : isJustUpdated
                          ? 'bg-emerald-50/30 border-emerald-300'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {/* Normal View or Inline Edit */}
                      {isEditing ? (
                        <div className="flex-1 flex items-center gap-2">
                          <input
                            type="text"
                            value={editNameText}
                            onChange={(e) => setEditNameText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleSaveEdit(student.id);
                              if (e.key === 'Escape') setEditingId(null);
                            }}
                            autoFocus
                            className="flex-1 px-2 py-1 text-xs border border-blue-300 rounded bg-white focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => handleSaveEdit(student.id)}
                            className="p-1 text-emerald-600 hover:bg-emerald-50 rounded cursor-pointer"
                            title="Save"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingId(null)}
                            className="p-1 text-stone-400 hover:bg-stone-100 rounded cursor-pointer"
                            title="Cancel"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                              {student.name.charAt(0)}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 leading-none">
                                <span className="text-xs font-semibold text-stone-900">
                                  {student.name}
                                </span>
                                {isJustUpdated && (
                                  <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded">
                                    Saved
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-stone-400">
                                {student.role}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {/* Key Tag */}
                            <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">
                              key="{student.id}"
                            </span>

                            {/* Actions per tab */}
                            {activeTab === 'add-delete' && (
                              <button
                                type="button"
                                onClick={() => handleDelete(student.id)}
                                className="p-1 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded cursor-pointer transition-colors"
                                title="Delete student"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}

                            {activeTab === 'update' && (
                              <button
                                type="button"
                                onClick={() => handleStartEdit(student)}
                                className="p-1 text-stone-500 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer transition-colors"
                                title="Edit name"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="p-4 text-center text-xs text-stone-400 border border-dashed rounded-lg">
                  No students in list.
                </div>
              )}
            </div>

            {/* Quick status bar */}
            <div className="pt-2 text-[11px] text-stone-400 flex items-center justify-between border-t border-stone-100">
              <span>{students.length} students enrolled</span>
              <span className="font-mono text-blue-600 font-medium">
                {activeTab === 'list' && 'Stable keys prevent re-rendering'}
                {activeTab === 'add-delete' && 'Pure immutability ([...prev] & filter)'}
                {activeTab === 'update' && 'Object spread inside .map()'}
              </span>
            </div>

          </div>
        )}

        {/* Right Side: Exact React Code for Active Tab */}
        {(viewMode === 'both' || viewMode === 'code') && (
          <div className={viewMode === 'both' ? 'lg:col-span-6' : ''}>
            <CodeBlock
              code={CODE_SNIPPETS[activeTab]}
              title={
                activeTab === 'list'
                  ? 'RenderList.jsx'
                  : activeTab === 'add-delete'
                  ? 'AddDelete.jsx'
                  : 'UpdateStudent.jsx'
              }
            />
          </div>
        )}

      </div>
    </div>
  );
}

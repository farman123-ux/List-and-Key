import { useState } from 'react';
import { Plus, Trash2, Edit3, Check, X, RotateCcw, Search } from 'lucide-react';
import CodeBlock from './CodeBlock';

const INITIAL_STUDENTS = [
  { id: 's-101', name: 'Farman Ullah', role: 'Frontend Dev' },
  { id: 's-102', name: 'Ali khan', role: 'Fullstack Dev' },
  { id: 's-103', name: 'Sanan Yousaf', role: 'UI Systems' }
];

const CODE_SNIPPETS = {
  list: `// 1. Rendering Lists with .map() & Keys
export default function StudentList() {
  const students = [
    { id: 's-101', name: 'Farman Ullah' },
    { id: 's-102', name: 'Ali khan' },
    { id: 's-103', name: 'Sanan Yousaf' }
  ];

  return (
    <ul>
      {students.map((student) => (
        // Key uniquely identifies each element
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}`,
  addDelete: `// 2. Add & Delete with Immutability
// ADD: Spread array and append new item
const handleAdd = (name) => {
  const newStudent = { id: 's-104', name };
  setStudents([...students, newStudent]);
};

// DELETE: Filter out item by its unique ID
const handleDelete = (id) => {
  setStudents(students.filter((s) => s.id !== id));
};`,
  update: `// 3. Update an Item with .map()
const handleUpdate = (id, newName) => {
  setStudents(
    students.map((student) =>
      student.id === id
        ? { ...student, name: newName } // update matching item
        : student                        // keep unchanged
    )
  );
};`
};

export default function InteractiveShowcaseCard() {
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'addDelete' | 'update'
  const [students, setStudents] = useState(INITIAL_STUDENTS);

  // Input states
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [search, setSearch] = useState('');

  // 1. Add student (spread operator)
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newStudent = {
      id: `s-${Math.floor(100 + Math.random() * 900)}`,
      name: newName.trim(),
      role: 'Developer'
    };

    setStudents([...students, newStudent]);
    setNewName('');
  };

  // 2. Delete student (.filter)
  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // 3. Update student (.map)
  const handleStartEdit = (student) => {
    setEditingId(student.id);
    setEditName(student.name);
  };

  const handleSaveEdit = (id) => {
    if (!editName.trim()) return;
    setStudents(
      students.map((s) => (s.id === id ? { ...s, name: editName.trim() } : s))
    );
    setEditingId(null);
  };

  // Reset to initial data
  const handleReset = () => {
    setStudents(INITIAL_STUDENTS);
    setEditingId(null);
    setNewName('');
    setSearch('');
  };

  // Filtered list for list tab
  const displayedStudents = activeTab === 'list' && search.trim()
    ? students.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
    : students;

  return (
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden text-stone-800">
      
      {/* Top Tab Bar */}
      <div className="px-4 py-3 border-b border-stone-200 bg-stone-50/70 flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Tabs */}
        <div className="flex items-center gap-1 bg-stone-200/60 p-1 rounded-lg text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('list')}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'list' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            1. Student List
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('addDelete')}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'addDelete' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            2. Add & Delete
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('update')}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'update' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            3. Update Name
          </button>
        </div>

        {/* Reset Button */}
        {students !== INITIAL_STUDENTS && (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset List</span>
          </button>
        )}
      </div>

      {/* Main Content: Demo UI + Code Side-by-Side */}
      <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left Side: Interactive UI */}
        <div className="lg:col-span-6 space-y-3">
          
          {/* Tab 1: Filter Input */}
          {activeTab === 'list' && (
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Filter students by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Tab 2: Add Student Input */}
          {activeTab === 'addDelete' && (
            <form onSubmit={handleAdd} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter student name..."
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
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

          {/* Tab 3: Update Hint */}
          {activeTab === 'update' && (
            <div className="text-xs text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-200/70">
              Click <strong>Edit</strong> on any student row below to change their name.
            </div>
          )}

          {/* Student List */}
          <div className="space-y-1.5">
            {displayedStudents.length > 0 ? (
              displayedStudents.map((student) => {
                const isEditing = editingId === student.id;

                return (
                  <div
                    key={student.id}
                    className={`p-2.5 rounded-lg border transition-all flex items-center justify-between gap-2 ${
                      isEditing ? 'bg-blue-50/40 border-blue-400' : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    {isEditing ? (
                      <div className="flex-1 flex items-center gap-2">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
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
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-stone-900 block leading-tight">
                              {student.name}
                            </span>
                            <span className="text-[10px] text-stone-400">
                              {student.role}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">
                            key="{student.id}"
                          </span>

                          {activeTab === 'addDelete' && (
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
                No students found.
              </div>
            )}
          </div>

          {/* Status footer */}
          <div className="pt-2 text-[11px] text-stone-400 flex items-center justify-between border-t border-stone-100">
            <span>{students.length} students enrolled</span>
            <span className="font-mono text-blue-600 font-medium">
              {activeTab === 'list' && 'keys identify each list element'}
              {activeTab === 'addDelete' && 'setStudents([...students, newStudent])'}
              {activeTab === 'update' && 'students.map(...) updates immutably'}
            </span>
          </div>

        </div>

        {/* Right Side: Exact React Code for the active tab */}
        <div className="lg:col-span-6">
          <CodeBlock
            code={CODE_SNIPPETS[activeTab]}
            title={
              activeTab === 'list'
                ? 'RenderList.jsx'
                : activeTab === 'addDelete'
                ? 'AddDelete.jsx'
                : 'UpdateStudent.jsx'
            }
          />
        </div>

      </div>
    </div>
  );
}

// Data for the 9 core learning topics in Lists & Keys
export const topicsData = [
  {
    id: "what-are-lists",
    number: "01",
    title: "What are Lists in React?",
    badge: "Core Concept",
    definition: "A list in React is a dynamic collection of data (such as an array of strings, numbers, or objects) rendered into a series of corresponding JSX elements.",
    explanation:
      "In standard JavaScript, we often iterate over arrays using loops or append elements to the DOM imperatively. In React, we use a declarative approach: you place an array expression right inside your JSX curly braces `{}`. React automatically evaluates the array and renders every component or DOM element inside it into the page.",
    code: `const frameworks = ['React', 'Next.js', 'Vite', 'Remix'];

export default function FrameworkList() {
  return (
    <ul>
      {frameworks.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}`,
    outputType: "list",
    outputItems: ["React", "Next.js", "Vite", "Remix"],
    tip: "Unlike raw JavaScript loops like for() or while(), React needs an expression that returns an array of elements. That's why .map() is the golden standard.",
  },
  {
    id: "rendering-with-map",
    number: "02",
    title: "Rendering Lists using .map()",
    badge: "Transformation",
    definition: ".map() is a built-in JavaScript array method that calls a function on every item in an array and returns a brand-new array containing the transformed results.",
    explanation:
      "Why .map() instead of .forEach()? Because .forEach() returns undefined (it performs side effects), whereas .map() returns a new array. When you return JSX from the .map() callback, React receives an array of JSX elements and renders them into the DOM smoothly.",
    code: `const topics = ['State', 'Props', 'Effects', 'Lists & Keys'];

export default function TopicsGuide() {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-stone-900">React Core Topics</h3>
      <ol className="list-decimal pl-5 space-y-1">
        {topics.map((topic, index) => (
          <li key={topic} className="text-stone-700">
            {topic}
          </li>
        ))}
      </ol>
    </div>
  );
}`,
    outputType: "numbered",
    outputItems: ["State", "Props", "Effects", "Lists & Keys"],
    tip: "Remember that arrow functions with parentheses () return automatically: items.map(item => (<li />)). If you use curly braces {}, you MUST write an explicit return statement!",
  },
  {
    id: "what-are-keys",
    number: "03",
    title: "What are Keys in React?",
    badge: "Identity",
    definition: "A 'key' is a special string or numeric prop that you give to elements in an array to provide them with a stable, unique identity.",
    explanation:
      "When React renders a list, it needs to know which specific DOM node corresponds to which item in your data. The key prop tells React: 'This specific element represents item #42.' It acts like a passport or an ID badge for every list item.",
    code: `const students = [
  { id: 'std-101', name: 'Sophia Taylor' },
  { id: 'std-102', name: 'Liam Patel' },
  { id: 'std-103', name: 'Emma Watson' }
];

export default function ClassRoster() {
  return (
    <ul>
      {students.map((student) => (
        // The 'key' must be placed on the outermost element returned
        <li key={student.id} className="py-1">
          {student.name}
        </li>
      ))}
    </ul>
  );
}`,
    outputType: "keyedList",
    outputItems: [
      { id: "std-101", label: "Sophia Taylor" },
      { id: "std-102", label: "Liam Patel" },
      { id: "std-103", label: "Emma Watson" }
    ],
    tip: "Keys do NOT get passed down as props to the child component. If your child component needs the ID value itself, pass it as a separate prop: <Item key={item.id} id={item.id} />.",
  },
  {
    id: "why-are-keys-important",
    number: "04",
    title: "Why are Keys Important?",
    badge: "Reconciliation",
    definition: "Keys give React the necessary clues to efficiently update, reorder, insert, or delete DOM nodes during its reconciliation algorithm.",
    explanation:
      "Imagine you have a list of 1,000 items and you insert one new item right at the beginning. Without keys, React compares element 1 with the old element 1, element 2 with old element 2, and ends up re-rendering and mutating every single node! With unique keys, React instantly realizes: 'Ah, items B through Z didn't change at all, I just need to create one new DOM node for item A at the top.'",
    code: `// React matches elements across renders by their key:
// Render 1: [Key: A], [Key: B], [Key: C]
// Render 2: [Key: Z], [Key: A], [Key: B], [Key: C]
//
// React sees Key 'Z' is new -> Inserts 1 node.
// React sees Keys A, B, C are preserved -> Zero DOM re-creations!`,
    outputType: "concept",
    outputItems: [
      "Preserves input focus and cursor position inside list rows",
      "Prevents visual bugs when reordering or filtering lists",
      "Maximizes rendering speed by avoiding unnecessary DOM rewrites"
    ],
    tip: "Never generate random keys on the fly like key={Math.random()}. That creates a new key on every render, forcing React to recreate the entire DOM subtree every time!",
  },
  {
    id: "rendering-arrays-of-objects",
    number: "05",
    title: "Rendering Arrays of Objects",
    badge: "Real-World Pattern",
    definition: "In production apps, list items are rarely primitive strings; they are structured objects containing multiple properties like IDs, titles, timestamps, and status flags.",
    explanation:
      "You iterate over the array of objects using .map() and use object destructuring or property access to render individual values. Each object's permanent database ID or UUID provides the ideal unique key.",
    code: `const tasks = [
  { id: 'tsk-1', title: 'Learn React 19', tag: 'Core', done: true },
  { id: 'tsk-2', title: 'Master Keys & Diffs', tag: 'Reconciliation', done: true },
  { id: 'tsk-3', title: 'Build Portfolio App', tag: 'Project', done: false }
];

export default function TaskBoard() {
  return (
    <div className="space-y-2">
      {tasks.map(({ id, title, tag, done }) => (
        <div key={id} className="flex items-center justify-between p-3 border rounded">
          <span className={done ? 'line-through text-stone-400' : 'text-stone-800'}>
            {title}
          </span>
          <span className="text-xs bg-stone-100 px-2 py-0.5 rounded text-stone-600">
            {tag}
          </span>
        </div>
      ))}
    </div>
  );
}`,
    outputType: "objects",
    outputItems: [
      { id: "tsk-1", title: "Learn React 19", tag: "Core", done: true },
      { id: "tsk-2", title: "Master Keys & Diffs", tag: "Reconciliation", done: true },
      { id: "tsk-3", title: "Build Portfolio App", tag: "Project", done: false }
    ],
    tip: "Destructuring inside the map argument like .map(({ id, title }) => ...) keeps your JSX concise and readable.",
  },
  {
    id: "conditional-rendering-lists",
    number: "06",
    title: "Conditional Rendering with Lists",
    badge: "Edge Cases & UX",
    definition: "Handling scenarios where the list is empty, loading, or needs to show distinct styles and badges based on the state of each item.",
    explanation:
      "Never leave a user looking at a blank space. When an array has a length of 0, display a helpful empty state. Within individual items, you can use ternary operators (? :) or logical AND (&&) to conditionally display badges, actions, or warnings.",
    code: `export default function StudentList({ students = [] }) {
  if (students.length === 0) {
    return (
      <div className="p-6 text-center border border-dashed rounded-lg text-stone-500">
        No students enrolled yet. Add the first student above!
      </div>
    );
  }

  return (
    <ul className="divide-y divide-stone-200">
      {students.map((student) => (
        <li key={student.id} className="py-2 flex justify-between items-center">
          <span>{student.name}</span>
          {student.isHonorRoll && (
            <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              Honor Roll ⭐
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}`,
    outputType: "conditional",
    outputItems: [
      { name: "Maya Lin", isHonorRoll: true },
      { name: "Carlos Ramos", isHonorRoll: false },
      { name: "Aria Montgomery", isHonorRoll: true }
    ],
    tip: "Guard against undefined or null arrays by using default parameters: { students = [] } or checking Array.isArray(students).",
  },
  {
    id: "adding-and-deleting-items",
    number: "07",
    title: "Adding and Deleting Items",
    badge: "Immutability",
    definition: "Updating array state in React must always be immutable: you create and return a new array instead of modifying the existing one with .push() or .splice().",
    explanation:
      "To add an item: use the spread operator [...prevStudents, newStudent] or [newStudent, ...prevStudents]. To delete an item: use .filter() to create a new array containing every item except the one with the targeted ID. React detects the new array reference and schedules a smooth re-render.",
    code: `import { useState } from 'react';

export default function StudentManager() {
  const [students, setStudents] = useState([
    { id: '1', name: 'Elena Rostova' }
  ]);
  const [name, setName] = useState('');

  // 1. Add item immutably
  const handleAdd = () => {
    if (!name.trim()) return;
    const newItem = { id: crypto.randomUUID(), name: name.trim() };
    setStudents((prev) => [...prev, newItem]);
    setName('');
  };

  // 2. Delete item immutably
  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((item) => item.id !== id));
  };

  return (/* JSX with inputs, buttons, and student list */ null);
}`,
    outputType: "concept",
    outputItems: [
      "Adding: [...prev, newItem] (Creates brand new array reference)",
      "Deleting: prev.filter(item => item.id !== id) (Pure and predictable)",
      "Never use .push(), .pop(), or .splice() on state variables directly!"
    ],
    tip: "Always use the functional updater syntax setStudents(prev => ...) when the new state depends on previous state to avoid stale closure issues.",
  },
  {
    id: "updating-list-items",
    number: "08",
    title: "Updating List Items",
    badge: "State Mutation",
    definition: "Updating a single item inside an array requires mapping over the array and returning an updated copy of the target object while leaving all other objects untouched.",
    explanation:
      "When a user edits a student's name, toggles a checkbox, or modifies a grade, you use .map(). For the matching ID, return a new object with spread properties: { ...student, name: newName }. For non-matching IDs, return the item as-is. This guarantees pristine immutability.",
    code: `const handleUpdateName = (id, newName) => {
  setStudents((prev) =>
    prev.map((student) => {
      if (student.id === id) {
        // Return a fresh object with updated property
        return { ...student, name: newName };
      }
      // Return original object unchanged
      return student;
    })
  );
};`,
    outputType: "concept",
    outputItems: [
      "Locate the target item by unique ID: student.id === id",
      "Spread the existing properties: { ...student, name: updatedValue }",
      "Pass through all other items unchanged to preserve their references"
    ],
    tip: "Because unaffected objects retain their exact reference in memory, React components wrapped in memo() will skip re-rendering the unchanged rows entirely!",
  },
  {
    id: "step-by-step-practice",
    number: "09",
    title: "Step-by-Step Practice",
    badge: "Architecture",
    definition: "A complete, production-grade pattern combining initialization, input state, immutable additions, inline updates, and removals.",
    explanation:
      "When building any interactive list in React, follow this 4-step checklist: 1) Model your data with unique IDs; 2) Set up state with useState; 3) Write pure immutable updater functions; 4) Render cleanly with .map() and assign key={item.id} to the root JSX node.",
    code: `// The Complete Production Pattern
import { useState } from 'react';

export default function RosterApp() {
  const [list, setList] = useState([
    { id: 'std-1', name: 'Jordan Hayes', active: true }
  ]);

  const add = (name) => setList(p => [...p, { id: String(Date.now()), name, active: true }]);
  const remove = (id) => setList(p => p.filter(x => x.id !== id));
  const toggle = (id) => setList(p => p.map(x => x.id === id ? { ...x, active: !x.active } : x));

  return (
    <ul className="space-y-2">
      {list.map(student => (
        <li key={student.id} className="flex justify-between items-center p-2 bg-white rounded border">
          <span className={student.active ? 'text-stone-900 font-medium' : 'text-stone-400'}>
            {student.name}
          </span>
          <div className="flex gap-2">
            <button onClick={() => toggle(student.id)} className="text-xs text-blue-600">Status</button>
            <button onClick={() => remove(student.id)} className="text-xs text-red-600">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}`,
    outputType: "summaryChecklist",
    outputItems: [
      "Step 1: Always ensure data items have stable, unique IDs",
      "Step 2: Never use array indexes as keys if the list can be reordered or filtered",
      "Step 3: Always return a new array using .map() or .filter()",
      "Step 4: Keep the key attribute on the outermost element inside the map"
    ],
    tip: "Practice this mental loop: 'Map to transform, Key to identify, Spread to preserve, Filter to remove.'",
  }
];

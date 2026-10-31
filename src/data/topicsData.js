// Concise, developer-friendly topics for React Lists & Keys
export const topicsData = [
  {
    id: "what-are-lists",
    number: "01",
    title: "What are Lists in React?",
    badge: "Basics",
    definition: "A list is an array of data rendered into JSX elements using JavaScript expressions.",
    explanation: "Instead of writing repeated HTML, you store your data in an array and render each item dynamically inside curly braces {}.",
    code: `const items = ['React', 'Vite', 'Tailwind'];

export default function App() {
  return (
    <ul>
      {items.map(name => <li key={name}>{name}</li>)}
    </ul>
  );
}`,
    outputType: "list",
    outputItems: ["React", "Vite", "Tailwind"],
    tip: "React evaluates array expressions inside JSX and renders all elements in sequence."
  },
  {
    id: "rendering-with-map",
    number: "02",
    title: "Rendering with .map()",
    badge: "Transform",
    definition: ".map() transforms each item in an array into a new JSX element.",
    explanation: "We use .map() because it returns a new array of JSX nodes. Methods like .forEach() return undefined and cannot render directly in JSX.",
    code: `const students = ['Alex', 'Sarah', 'Devin'];

export default function StudentList() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student}>{student}</li>
      ))}
    </ul>
  );
}`,
    outputType: "numbered",
    outputItems: ["Alex", "Sarah", "Devin"],
    tip: "Use parentheses () => (<li />) for implicit return, or write explicit return inside {}."
  },
  {
    id: "what-are-keys",
    number: "03",
    title: "What are Keys in React?",
    badge: "Identity",
    definition: "A key is a unique string or number prop that gives each list item a stable identity.",
    explanation: "Keys act like ID badges. They tell React exactly which item was added, changed, or deleted during re-renders.",
    code: `const users = [
  { id: 'u1', name: 'Sophia' },
  { id: 'u2', name: 'Liam' }
];

{users.map(u => (
  <li key={u.id}>{u.name}</li>
))}`,
    outputType: "keyedList",
    outputItems: [
      { id: "u1", label: "Sophia" },
      { id: "u2", label: "Liam" }
    ],
    tip: "The key prop belongs on the outermost element returned inside .map()."
  },
  {
    id: "why-are-keys-important",
    number: "04",
    title: "Why are Keys Important?",
    badge: "Performance",
    definition: "Keys enable React's reconciliation engine to update the DOM efficiently without re-rendering the whole list.",
    explanation: "Without keys, inserting an item at the top forces React to recreate every single DOM node. With keys, React only inserts the new element.",
    code: `// With keys, React tracks items across renders:
// Old: [A, B, C]
// New: [Z, A, B, C]
// React only creates 'Z'; A, B, C are preserved!`,
    outputType: "concept",
    outputItems: [
      "Preserves form inputs and checkbox states",
      "Avoids re-creating unchanged DOM elements",
      "Eliminates subtle reordering bugs"
    ],
    tip: "Never use Math.random() as a key—it forces React to recreate the entire list on every render."
  },
  {
    id: "rendering-arrays-of-objects",
    number: "05",
    title: "Rendering Arrays of Objects",
    badge: "Pattern",
    definition: "Real applications manage arrays of objects containing unique IDs and properties.",
    explanation: "Iterate with .map() and use the object's unique database ID as the key prop.",
    code: `const tasks = [
  { id: 't1', title: 'Learn Keys', done: true },
  { id: 't2', title: 'Build Project', done: false }
];

{tasks.map(({ id, title, done }) => (
  <div key={id}>
    <span>{title}</span>
    <span>{done ? '✓' : 'Pending'}</span>
  </div>
))}`,
    outputType: "objects",
    outputItems: [
      { id: "t1", title: "Learn Keys", tag: "Core", done: true },
      { id: "t2", title: "Build Project", tag: "App", done: false }
    ],
    tip: "Destructure properties in the function argument ({ id, title }) to keep code clean."
  },
  {
    id: "conditional-rendering-lists",
    number: "06",
    title: "Conditional Rendering with Lists",
    badge: "UX",
    definition: "Handle empty lists gracefully and style items based on their status.",
    explanation: "Always show a friendly message when an array is empty instead of leaving a blank page.",
    code: `function List({ items = [] }) {
  if (items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <ul>
      {items.map(i => <li key={i.id}>{i.name}</li>)}
    </ul>
  );
}`,
    outputType: "conditional",
    outputItems: [
      { name: "Maya Lin", isHonorRoll: true },
      { name: "Carlos Ramos", isHonorRoll: false }
    ],
    tip: "Default to an empty array (items = []) to prevent 'cannot read property of undefined' errors."
  },
  {
    id: "adding-and-deleting-items",
    number: "07",
    title: "Adding and Deleting Items",
    badge: "State",
    definition: "Always update list state immutably without mutating the original array.",
    explanation: "Use [...prev, newItem] to add items, and .filter() to remove items by ID.",
    code: `// Add item
setItems(prev => [...prev, { id: 's3', name: 'Devin' }]);

// Delete item
setItems(prev => prev.filter(item => item.id !== targetId));`,
    outputType: "concept",
    outputItems: [
      "Add: [...prev, newItem] (new array reference)",
      "Delete: prev.filter(x => x.id !== id)",
      "Never use .push() or .splice() on state"
    ],
    tip: "Using the functional updater setList(prev => ...) ensures state is always up-to-date."
  },
  {
    id: "updating-list-items",
    number: "08",
    title: "Updating List Items",
    badge: "Updates",
    definition: "Update an item by mapping the array and returning a new object for the matching ID.",
    explanation: "If item.id matches the target, return a new object with spread properties. Otherwise, return the item unchanged.",
    code: `setStudents(prev =>
  prev.map(s =>
    s.id === id ? { ...s, name: newName } : s
  )
);`,
    outputType: "concept",
    outputItems: [
      "Match by ID: s.id === id",
      "Spread to update: { ...s, name: newName }",
      "Preserve untouched items: return s"
    ],
    tip: "Unchanged items keep their object reference, skipping unnecessary re-renders."
  },
  {
    id: "step-by-step-practice",
    number: "09",
    title: "Step-by-Step Practice",
    badge: "Review",
    definition: "The standard 4-step workflow for any dynamic list in React.",
    explanation: "1. Define unique IDs; 2. Initialize with useState; 3. Write immutable add/delete/update handlers; 4. Render with .map() and key={id}.",
    code: `// The Golden Formula:
// 1. Data has unique ID (id: 's1')
// 2. Add with [...prev, newItem]
// 3. Remove with prev.filter(...)
// 4. Update with prev.map(...)
// 5. Render with key={item.id}`,
    outputType: "summaryChecklist",
    outputItems: [
      "Step 1: Assign stable unique IDs",
      "Step 2: Use useState for array storage",
      "Step 3: Update immutably with spread and filter",
      "Step 4: Attach key to outermost map element"
    ],
    tip: "Remember: 'Map to render, Key to identify, Filter to remove, Spread to update.'"
  }
];

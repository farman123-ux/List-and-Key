// Data for the 5 Common Mistakes in React Lists & Keys
export const mistakesData = [
  {
    id: "missing-keys",
    number: "01",
    title: "Missing Keys",
    severity: "Warning",
    description: "Rendering elements from an array without specifying a key prop.",
    consequence: "React console warning: 'Each child in a list should have a unique key prop.' React falls back to using array index, which harms reconciliation performance and causes input focus bugs.",
    badCode: `// ❌ BAD: No key provided
function StudentList({ students }) {
  return (
    <ul>
      {students.map(student => (
        <li>{student.name}</li>
      ))}
    </ul>
  );
}`,
    goodCode: `// ✅ GOOD: Unique key on outermost returned element
function StudentList({ students }) {
  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}`,
    explanation: "Always provide a unique, stable key prop to the top-level element returned by your .map() callback."
  },
  {
    id: "duplicate-keys",
    number: "02",
    title: "Duplicate Keys",
    severity: "Error",
    description: "Using non-unique values (such as names, categories, or duplicated IDs) as keys.",
    consequence: "React console error: 'Encountered two children with the same key.' React gets confused when elements share the same identity, leading to UI glitches, ghost items, and state bleed.",
    badCode: `// ❌ BAD: Using non-unique category as key
const items = [
  { id: 1, role: 'Admin', name: 'Alice' },
  { id: 2, role: 'Admin', name: 'Bob' }
];

{items.map(item => (
  <div key={item.role}>{item.name}</div>
))} // duplicate key 'Admin'!`,
    goodCode: `// ✅ GOOD: Use unique ID for each entry
const items = [
  { id: 1, role: 'Admin', name: 'Alice' },
  { id: 2, role: 'Admin', name: 'Bob' }
];

{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}`,
    explanation: "Keys only need to be unique among their siblings, not globally. Make sure each sibling item has a distinct value."
  },
  {
    id: "array-indexes-as-keys",
    number: "03",
    title: "Incorrect Use of Array Indexes",
    severity: "Subtle Bug",
    description: "Using the index parameter from .map(item, index) as key: key={index}.",
    consequence: "If the list order changes, items are deleted, or items are added to the beginning, state tied to child components (like text inputs, selected checkboxes, or animations) sticks to the wrong items!",
    badCode: `// ❌ BAD: Index shifts when items are added or deleted
{todos.map((todo, index) => (
  <TodoRow 
    key={index} 
    todo={todo} 
    onDelete={() => deleteTodo(index)} 
  />
))}`,
    goodCode: `// ✅ GOOD: Stable ID remains tied to the actual item
{todos.map((todo) => (
  <TodoRow 
    key={todo.id} 
    todo={todo} 
    onDelete={() => deleteTodo(todo.id)} 
  />
))}`,
    explanation: "Only use index as a last resort if: 1) the list is static (never filtered, sorted, or added to), 2) items have no IDs, and 3) items have no local state."
  },
  {
    id: "directly-modifying-state",
    number: "04",
    title: "Directly Modifying State (Mutation)",
    severity: "Critical Bug",
    description: "Mutating the existing array in state using methods like .push(), .pop(), or .splice() directly.",
    consequence: "React checks whether state changed by comparing object memory references (prev === next). Mutating the array keeps the same reference, so React skips re-rendering entirely!",
    badCode: `// ❌ BAD: Array mutation does NOT trigger re-render
const handleAdd = (newName) => {
  students.push({ id: 99, name: newName });
  setStudents(students); // Same reference! React ignores this.
};`,
    goodCode: `// ✅ GOOD: Create a brand new array with spread syntax
const handleAdd = (newName) => {
  const newStudent = { id: crypto.randomUUID(), name: newName };
  setStudents((prev) => [...prev, newStudent]);
};`,
    explanation: "Always treat React state as immutable. Use [...prev, newItem] to add, or .filter() to remove."
  },
  {
    id: "forgetting-to-return-jsx",
    number: "05",
    title: "Forgetting to Return JSX Inside .map()",
    severity: "Syntax Bug",
    description: "Opening curly braces {} inside .map() callback without writing an explicit return keyword.",
    consequence: "Nothing renders! The map callback returns undefined for each item, resulting in a blank screen and no obvious compiler error.",
    badCode: `// ❌ BAD: Curly braces {} without return keyword
{students.map((student) => {
  <li key={student.id}>{student.name}</li>
})} // Result: [undefined, undefined]!`,
    goodCode: `// ✅ GOOD Option 1: Implicit return with parentheses ()
{students.map((student) => (
  <li key={student.id}>{student.name}</li>
))}

// ✅ GOOD Option 2: Explicit return with curly braces {}
{students.map((student) => {
  return <li key={student.id}>{student.name}</li>;
})}`,
    explanation: "In ES6 arrow functions, () gives an implicit return, while {} requires an explicit 'return' statement."
  }
];

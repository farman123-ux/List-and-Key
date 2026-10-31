// Concise Common Mistakes in React Lists & Keys
export const mistakesData = [
  {
    id: "missing-keys",
    number: "01",
    title: "Missing Keys",
    severity: "Warning",
    description: "Rendering a list without a key prop causes React to lose track of items.",
    consequence: "Console warning and degraded rendering performance.",
    badCode: `// ❌ BAD: No key
{students.map(s => (
  <li>{s.name}</li>
))}`,
    goodCode: `// ✅ GOOD: Stable key
{students.map(s => (
  <li key={s.id}>{s.name}</li>
))}`,
    explanation: "Always add key={item.id} to the top-level element returned by .map()."
  },
  {
    id: "duplicate-keys",
    number: "02",
    title: "Duplicate Keys",
    severity: "Error",
    description: "Using non-unique values (like categories or duplicate names) as keys.",
    consequence: "React confuses elements, causing glitches and state bleed.",
    badCode: `// ❌ BAD: Role is not unique
{items.map(item => (
  <div key={item.role}>{item.name}</div>
))}`,
    goodCode: `// ✅ GOOD: Use unique item ID
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}`,
    explanation: "Keys must be unique among sibling items."
  },
  {
    id: "array-indexes-as-keys",
    number: "03",
    title: "Array Indexes as Keys",
    severity: "Subtle Bug",
    description: "Using key={index} when the list can be reordered, sorted, or filtered.",
    consequence: "Inputs, checkboxes, or focus stick to the wrong row when items shift.",
    badCode: `// ❌ BAD: Index shifts on delete/reorder
{todos.map((todo, index) => (
  <TodoRow key={index} todo={todo} />
))}`,
    goodCode: `// ✅ GOOD: ID stays with the item
{todos.map((todo) => (
  <TodoRow key={todo.id} todo={todo} />
))}`,
    explanation: "Only use index if the list never changes and has no inputs."
  },
  {
    id: "directly-modifying-state",
    number: "04",
    title: "Directly Modifying State",
    severity: "Critical Bug",
    description: "Mutating an array with .push() instead of creating a new copy.",
    consequence: "React compares array references—same reference means no re-render!",
    badCode: `// ❌ BAD: Mutates state directly
students.push(newStudent);
setStudents(students); // Won't re-render!`,
    goodCode: `// ✅ GOOD: Creates new array
setStudents(prev => [...prev, newStudent]);`,
    explanation: "Always treat React state as immutable using [...prev, item] or .filter()."
  },
  {
    id: "forgetting-to-return-jsx",
    number: "05",
    title: "Missing Return in .map()",
    severity: "Syntax Bug",
    description: "Using curly braces {} without writing an explicit return.",
    consequence: "Renders blank items because the map function returns undefined.",
    badCode: `// ❌ BAD: Missing return keyword
{students.map(s => {
  <li key={s.id}>{s.name}</li>
})}`,
    goodCode: `// ✅ GOOD: Parentheses for implicit return
{students.map(s => (
  <li key={s.id}>{s.name}</li>
))}`,
    explanation: "Use () for automatic return, or write return inside {}."
  }
];

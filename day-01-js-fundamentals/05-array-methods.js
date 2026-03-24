// ============================================
// Day 01 - Array Methods: map, filter, reduce
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// These three methods are the backbone of data handling in React.
// They are pure — they return a new array and NEVER mutate the original.

const students = [
  { id: 1, name: "Prajwal", score: 85, city: "Bengaluru", passed: true  },
  { id: 2, name: "Ananya",  score: 92, city: "Mumbai",    passed: true  },
  { id: 3, name: "Rohan",   score: 58, city: "Delhi",     passed: false },
  { id: 4, name: "Sneha",   score: 74, city: "Bengaluru", passed: true  },
  { id: 5, name: "Arjun",   score: 45, city: "Chennai",   passed: false },
  { id: 6, name: "Meera",   score: 96, city: "Mumbai",    passed: true  },
];

// ============================================
// map() — transform every element
// ============================================
// Returns a new array of the SAME length, with each item transformed.
// Signature: array.map(item => newItem)

console.log("=== MAP ===");

// Extract just the names
const names = students.map(s => s.name);
console.log("Names:", names);
// ['Prajwal', 'Ananya', 'Rohan', 'Sneha', 'Arjun', 'Meera']

// Add a letter grade to each student
const withGrades = students.map(s => ({
  ...s,
  grade: s.score >= 90 ? "A"
       : s.score >= 75 ? "B"
       : s.score >= 60 ? "C"
       : "F",
}));
console.log("With grades:", withGrades.map(s => `${s.name}: ${s.grade}`));
// ['Prajwal: B', 'Ananya: A', 'Rohan: F', 'Sneha: B', 'Arjun: F', 'Meera: A']

// Apply a score curve (+5 points, max 100)
const curved = students.map(s => ({
  ...s,
  score: Math.min(s.score + 5, 100),
}));
console.log("Curved scores:", curved.map(s => `${s.name}: ${s.score}`));

// Map with index (second callback argument)
const numbered = students.map((s, index) => `${index + 1}. ${s.name}`);
console.log("Numbered:", numbered);

// ============================================
// filter() — keep only matching elements
// ============================================
// Returns a new array that is <= original length.
// Keep item when callback returns true, skip when false.
// Signature: array.filter(item => boolean)

console.log("\n=== FILTER ===");

// Students who passed
const passedStudents = students.filter(s => s.passed);
console.log("Passed:", passedStudents.map(s => s.name));
// ['Prajwal', 'Ananya', 'Sneha', 'Meera']

// Students from Bengaluru
const fromBengaluru = students.filter(s => s.city === "Bengaluru");
console.log("From Bengaluru:", fromBengaluru.map(s => s.name));
// ['Prajwal', 'Sneha']

// High scorers (score >= 80)
const highScorers = students.filter(s => s.score >= 80);
console.log("High scorers:", highScorers.map(s => `${s.name} (${s.score})`));
// ['Prajwal (85)', 'Ananya (92)', 'Meera (96)']

// Multiple conditions
const passedHighScorers = students.filter(s => s.passed && s.score >= 80);
console.log("Passed + high score:", passedHighScorers.map(s => s.name));

// ============================================
// reduce() — accumulate into a single value
// ============================================
// Most powerful but takes practice. Can produce any type: number, string, object, array.
// Signature: array.reduce((accumulator, currentItem) => newAccumulator, initialValue)

console.log("\n=== REDUCE ===");

// Sum all scores
const totalScore = students.reduce((acc, s) => acc + s.score, 0);
console.log("Total score:", totalScore); // 450

// Average score
const avgScore = students.reduce((acc, s) => acc + s.score, 0) / students.length;
console.log("Average score:", avgScore.toFixed(2)); // 75.00

// Find highest score
const topScore = students.reduce((max, s) => s.score > max ? s.score : max, 0);
console.log("Top score:", topScore); // 96

// Find the student with highest score
const topStudent = students.reduce((best, s) => s.score > best.score ? s : best);
console.log("Top student:", topStudent.name); // Meera

// Group students by city
const byCity = students.reduce((acc, s) => {
  if (!acc[s.city]) acc[s.city] = [];
  acc[s.city].push(s.name);
  return acc;
}, {});
console.log("By city:", byCity);
// { Bengaluru: ['Prajwal','Sneha'], Mumbai: ['Ananya','Meera'], Delhi: ['Rohan'], Chennai: ['Arjun'] }

// Count pass/fail
const passFailCount = students.reduce((acc, s) => {
  s.passed ? acc.passed++ : acc.failed++;
  return acc;
}, { passed: 0, failed: 0 });
console.log("Pass/Fail:", passFailCount); // { passed: 4, failed: 2 }

// ============================================
// CHAINING — the real power
// ============================================
// map + filter + reduce can be chained for clean data pipelines.

console.log("\n=== CHAINING ===");

// Average score of ONLY passed students
const avgPassedScore = students
  .filter(s => s.passed)
  .reduce((acc, s, _, arr) => acc + s.score / arr.length, 0);
console.log("Avg passed score:", avgPassedScore.toFixed(2)); // 86.75

// Names of top students (score >= 80), sorted A-Z
const topNames = students
  .filter(s => s.score >= 80)
  .map(s => s.name)
  .sort();
console.log("Top names (sorted):", topNames);
// ['Ananya', 'Meera', 'Prajwal']

// Total score of Bengaluru students
const bengaluruTotal = students
  .filter(s => s.city === "Bengaluru")
  .reduce((acc, s) => acc + s.score, 0);
console.log("Bengaluru total:", bengaluruTotal); // 159

// ============================================
// BONUS: Other useful array methods
// ============================================

console.log("\n=== BONUS METHODS ===");

const nums = [3, 1, 4, 1, 5, 9, 2, 6];

// find — first match (returns item, not array)
const firstBig = nums.find(n => n > 5);
console.log("First > 5:", firstBig); // 9

// findIndex — index of first match
const firstBigIdx = nums.findIndex(n => n > 5);
console.log("Index of first > 5:", firstBigIdx); // 5

// some — does at least one match? (returns boolean)
const hasNegative = nums.some(n => n < 0);
console.log("Has negative:", hasNegative); // false

// every — do ALL match? (returns boolean)
const allPositive = nums.every(n => n > 0);
console.log("All positive:", allPositive); // true

// includes
console.log("Includes 9:", nums.includes(9)); // true

// flat + flatMap
const nested = [[1, 2], [3, 4], [5, 6]];
console.log("Flattened:", nested.flat());              // [1,2,3,4,5,6]
console.log("FlatMap:", nested.flatMap(arr => arr.map(n => n * 2))); // [2,4,6,8,10,12]

console.log("\n--- Map / Filter / Reduce Summary ---");
console.log("map()    → transform each item          → same length array");
console.log("filter() → keep items that pass test    → shorter or equal array");
console.log("reduce() → boil down to one value       → any type (number, obj, string)");
console.log("Chain them for clean, readable data pipelines!");
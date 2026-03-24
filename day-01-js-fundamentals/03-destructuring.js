// ============================================
// Day 01 - Destructuring (Objects & Arrays)
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// -----------------------------
// OBJECT DESTRUCTURING
// -----------------------------

// 1. Basic object destructuring
const user = {
  name: "Prajwal",
  age: 22,
  city: "Bengaluru",
  role: "developer",
};

// Without destructuring (verbose)
const nameLong = user.name;
const ageLong  = user.age;

// With destructuring ✨
const { name, age, city, role } = user;
console.log(name, age, city, role);
// Prajwal 22 Bengaluru developer

// 2. Rename while destructuring
const { name: fullName, city: location } = user;
console.log("Full name:", fullName);   // Prajwal
console.log("Location:", location);   // Bengaluru

// 3. Default values — used when the key doesn't exist
const { country = "India", language = "Kannada" } = user;
console.log("Country:", country);   // India (default — not in user object)
console.log("Language:", language); // Kannada (default)

// 4. Nested object destructuring
const profile = {
  username: "prajwal_rao",
  address: {
    street: "MG Road",
    city: "Bengaluru",
    pincode: "560001",
  },
  social: {
    github: "Prajwal-M-Rao",
    twitter: "@prajwal_dev",
  },
};

const {
  username,
  address: { street, city: profileCity, pincode },
  social: { github },
} = profile;

console.log(username);    // prajwal_rao
console.log(street);      // MG Road
console.log(profileCity); // Bengaluru
console.log(github);      // Prajwal-M-Rao

// 5. Destructuring in function parameters (very common in React)
function displayUser({ name, age, city = "Unknown" }) {
  console.log(`${name}, ${age}, from ${city}`);
}

displayUser(user);                        // Prajwal, 22, from Bengaluru
displayUser({ name: "Ananya", age: 21 }); // Ananya, 21, from Unknown

// 6. Destructuring with rest
const { name: userName, ...restOfUser } = user;
console.log("Name:", userName);       // Prajwal
console.log("Rest:", restOfUser);     // { age: 22, city: 'Bengaluru', role: 'developer' }

// -----------------------------
// ARRAY DESTRUCTURING
// -----------------------------

// 1. Basic array destructuring
const colors = ["red", "green", "blue", "yellow"];

const [first, second, third] = colors;
console.log(first, second, third); // red green blue

// 2. Skip elements with commas
const [, , thirdColor] = colors;
console.log("Third color:", thirdColor); // blue

const [primaryColor, , , fourthColor] = colors;
console.log(primaryColor, fourthColor); // red yellow

// 3. Default values in array destructuring
const [a = 0, b = 0, c = 0, d = 0, e = 99] = [10, 20, 30];
console.log(a, b, c, d, e); // 10 20 30 0 99

// 4. Swap two variables without a temp variable ✨
let x = 100;
let y = 200;
console.log("Before swap:", x, y); // 100 200
[x, y] = [y, x];
console.log("After swap:", x, y);  // 200 100

// 5. Rest in array destructuring
const scores = [95, 88, 76, 63, 55];
const [topScore, secondScore, ...restScores] = scores;
console.log("Top:", topScore);         // 95
console.log("Second:", secondScore);   // 88
console.log("Remaining:", restScores); // [76, 63, 55]

// 6. Destructuring function return values
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

const [min, max] = getMinMax([4, 8, 2, 15, 1, 9]);
console.log("Min:", min, "Max:", max); // Min: 1 Max: 15

// 7. Mixed — array of objects (common with API responses in React)
const students = [
  { id: 1, name: "Prajwal", grade: "A" },
  { id: 2, name: "Ananya",  grade: "B" },
  { id: 3, name: "Rohan",   grade: "A" },
];

const [{ name: student1 }, { name: student2 }] = students;
console.log("Top two:", student1, student2); // Prajwal Ananya

// Destructure inside map
const gradeList = students.map(({ name, grade }) => `${name}: ${grade}`);
console.log("Grades:", gradeList);
// ['Prajwal: A', 'Ananya: B', 'Rohan: A']

console.log("\n--- Destructuring Tips ---");
console.log("Objects: { key } = obj  →  extracts by key name");
console.log("Arrays:  [a, b] = arr  →  extracts by position");
console.log("Both support defaults and rest (...)");
console.log("Super common in React: function MyComp({ title, onClick }) {}");
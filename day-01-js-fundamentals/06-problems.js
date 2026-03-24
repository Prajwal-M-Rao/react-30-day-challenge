// ============================================
// Day 01 - Problem Solving Practice
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// ============================================
// Problem 1: Filter Even Numbers
// ============================================
// Write a function that takes an array of numbers
// and returns only the even ones.

function getEvens(arr) {
  return arr.filter(n => n % 2 === 0);
}

// Tests
console.log("=== Problem 1: Filter Even Numbers ===");
console.log(getEvens([1, 2, 3, 4, 5, 6]));        // [2, 4, 6]
console.log(getEvens([10, 15, 22, 33, 40, 51]));   // [10, 22, 40]
console.log(getEvens([1, 3, 5, 7]));               // []
console.log(getEvens([0, 2, 4, 6, 8]));            // [0, 2, 4, 6, 8]

// ============================================
// Problem 2: Sum an Array
// ============================================
// Write a function that returns the total sum
// of all numbers in an array.

function sumArray(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}

// Tests
console.log("\n=== Problem 2: Sum an Array ===");
console.log(sumArray([1, 2, 3, 4, 5]));    // 15
console.log(sumArray([10, 20, 30]));        // 60
console.log(sumArray([100]));               // 100
console.log(sumArray([]));                  // 0

// ============================================
// Problem 3: Capitalise Names
// ============================================
// Given an array of user objects with first & last,
// return full names in UPPER CASE.

function capitaliseNames(users) {
  return users.map(({ first, last }) =>
    `${first} ${last}`.toUpperCase()
  );
}

// Tests
console.log("\n=== Problem 3: Capitalise Names ===");
const users = [
  { first: "alice",  last: "smith"  },
  { first: "bob",    last: "jones"  },
  { first: "prajwal", last: "rao"  },
];
console.log(capitaliseNames(users));
// ['ALICE SMITH', 'BOB JONES', 'PRAJWAL RAO']

// ============================================
// BONUS Problem 4: Find the Longest Word
// ============================================
// Given a sentence string, return the longest word.
// If there's a tie, return the first one.

function longestWord(sentence) {
  return sentence
    .split(" ")
    .reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

console.log("\n=== Bonus Problem 4: Longest Word ===");
console.log(longestWord("The quick brown fox jumped"));   // jumped
console.log(longestWord("I love JavaScript so much"));    // JavaScript
console.log(longestWord("React is awesome"));              // awesome

// ============================================
// BONUS Problem 5: Group by Category
// ============================================
// Given an array of products, group them by category
// and return an object { category: [product names] }

function groupByCategory(products) {
  return products.reduce((acc, { name, category }) => {
    if (!acc[category]) acc[category] = [];
    acc[category].push(name);
    return acc;
  }, {});
}

console.log("\n=== Bonus Problem 5: Group by Category ===");
const products = [
  { name: "iPhone",   category: "Electronics" },
  { name: "MacBook",  category: "Electronics" },
  { name: "T-Shirt",  category: "Clothing"    },
  { name: "React Book", category: "Books"     },
  { name: "Jeans",    category: "Clothing"    },
  { name: "JS Guide", category: "Books"       },
];

console.log(groupByCategory(products));
// {
//   Electronics: ['iPhone', 'MacBook'],
//   Clothing: ['T-Shirt', 'Jeans'],
//   Books: ['React Book', 'JS Guide']
// }

// ============================================
// BONUS Problem 6: FizzBuzz with filter + map
// ============================================
// Classic problem: for numbers 1-20,
// return "Fizz" for multiples of 3,
// "Buzz" for multiples of 5,
// "FizzBuzz" for both, else the number.

function fizzBuzz(n) {
  return Array.from({ length: n }, (_, i) => i + 1)
    .map(num => {
      if (num % 15 === 0) return "FizzBuzz";
      if (num % 3 === 0)  return "Fizz";
      if (num % 5 === 0)  return "Buzz";
      return num;
    });
}

console.log("\n=== Bonus Problem 6: FizzBuzz ===");
console.log(fizzBuzz(20));
// [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
//  11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz']

console.log("\n--- All problems solved! ---");
console.log("Concepts used: filter, reduce, map, destructuring, arrow functions, spread");
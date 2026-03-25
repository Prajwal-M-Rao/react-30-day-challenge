// ============================================
// Day 02 - DOM Manipulation
// React 30-Day Challenge | Prajwal M Rao
// ============================================

// The DOM (Document Object Model) is a tree representation of your HTML.
// JS can read, create, update, and delete any part of it.
// Note: Run this in a browser (open index.html), not Node.js

// -----------------------------
// 1. Selecting elements
// -----------------------------

// By ID — returns single element or null
const heading = document.getElementById("heading");

// By CSS selector — returns FIRST match
const btn = document.querySelector(".btn-primary");
const firstItem = document.querySelector("ul li");

// By CSS selector — returns ALL matches (NodeList, not Array!)
const allItems = document.querySelectorAll("li");
const allCards = document.querySelectorAll(".card");

// Convert NodeList to Array so you can use array methods
const itemsArray = Array.from(allItems);
itemsArray.forEach(item => console.log(item.textContent));

// Or use spread
const itemsArr2 = [...document.querySelectorAll("li")];

// -----------------------------
// 2. Reading and writing content
// -----------------------------

// textContent — plain text (safe, no HTML parsing)
heading.textContent = "Updated Heading";

// innerHTML — can include HTML (use carefully — XSS risk with user input)
const container = document.querySelector("#container");
container.innerHTML = "<strong>Bold text</strong> and normal text";

// innerText — like textContent but respects CSS (hidden elements return "")
const para = document.querySelector("p");
console.log(para.innerText);

// -----------------------------
// 3. Attributes
// -----------------------------

const link = document.querySelector("a");
link.setAttribute("href", "https://github.com/Prajwal-M-Rao");
link.getAttribute("href"); // read it back
link.removeAttribute("target");

const img = document.querySelector("img");
img.src = "new-image.png"; // shortcut for setAttribute("src", ...)
img.alt = "A description";

// -----------------------------
// 4. Styles and classes
// -----------------------------

const box = document.querySelector(".box");

// Direct style (avoid for most things — use classes instead)
box.style.color = "blue";
box.style.backgroundColor = "#f0f0f0";
box.style.fontSize = "18px";

// classList — the right way
box.classList.add("active");        // add a class
box.classList.remove("hidden");     // remove a class
box.classList.toggle("open");       // add if absent, remove if present
box.classList.contains("active");   // → true/false

// Replace one class with another
box.classList.replace("old-class", "new-class");

// -----------------------------
// 5. Creating and inserting elements
// -----------------------------

// Create a new element
const newPara = document.createElement("p");
newPara.textContent = "I was created dynamically by JS!";
newPara.classList.add("dynamic-text");

// Insert into the DOM
document.body.appendChild(newPara);          // at end of body
container.prepend(newPara);                  // at start of container
container.insertBefore(newPara, firstItem);  // before a specific element

// Modern: insertAdjacentHTML — precise positioning
container.insertAdjacentHTML("beforeend", "<p>Added at the end</p>");
container.insertAdjacentHTML("afterbegin", "<p>Added at the start</p>");

// -----------------------------
// 6. Removing elements
// -----------------------------

const toRemove = document.querySelector(".remove-me");
if (toRemove) toRemove.remove(); // modern, clean

// Older way (still works):
// toRemove.parentNode.removeChild(toRemove);

// -----------------------------
// 7. Event listeners
// -----------------------------

const button = document.querySelector("#submit-btn");

// Add listener
button.addEventListener("click", (event) => {
  console.log("Button clicked!", event.target);
  event.preventDefault(); // stop default behaviour (form submit, link nav)
});

// Other common events
document.addEventListener("DOMContentLoaded", () => {
  console.log("HTML fully loaded and parsed");
});

window.addEventListener("resize", () => {
  console.log("Window width:", window.innerWidth);
});

const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  console.log("User typed:", e.target.value);
});

// -----------------------------
// 8. Dynamic list rendering (key React pattern — preview!)
// -----------------------------
function renderRepoList(repos, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // clear first

  repos.forEach(repo => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${repo.name}</strong>
      <span style="color: gray; font-size: 0.85em;"> — ${repo.language || "N/A"}</span>
    `;
    container.appendChild(li);
  });
}

// Example usage:
// renderRepoList([
//   { name: "react-30-day-challenge", language: "JavaScript" },
//   { name: "portfolio", language: "HTML" },
// ], "repo-list");

console.log("DOM script loaded — open index.html in a browser to run this");
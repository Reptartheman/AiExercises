1. Identify Patterns of Repetition
Look for blocks of code or logic that appear multiple times across your codebase. Common examples include:
Repeated API calls with minor variations.
Similar event listeners or DOM manipulations.
Redundant calculations or string manipulations.


2. Break Code into Smaller Functions
Extract reusable logic into well-named utility functions. Each function should focus on a single responsibility.

BEFORE
```js

function printUser(user) {
    console.log(`${user.firstName} ${user.lastName}`);
    console.log(`${user.age} years old`);
}
function printAdmin(admin) {
    console.log(`${admin.firstName} ${admin.lastName}`);
    console.log(`${admin.age} years old`);
}
```
AFTER

```js
function printPerson(person) {
    console.log(`${person.firstName} ${person.lastName}`);
    console.log(`${person.age} years old`);
}
```

3. Use Parameters and Arguments
Make functions or classes configurable with parameters to handle variations.

BEFORE
```js

function fetchUser() {
    return fetch('/api/user');
}
function fetchAdmin() {
    return fetch('/api/admin');
}
```

AFTER

```js
function fetchData(endpoint) {
    return fetch(`/api/${endpoint}`);
}
```

4. Leverage Data Structures
Use objects, arrays, or maps to reduce repetitive logic.

BEFORE
```js
if (role === 'admin') {
    permissions = ['read', 'write', 'delete'];
} else if (role === 'editor') {
    permissions = ['read', 'write'];
} else if (role === 'viewer') {
    permissions = ['read'];
}
```

AFTER

```js
const rolePermissions = {
    admin: ['read', 'write', 'delete'],
    editor: ['read', 'write'],
    viewer: ['read'],
};

permissions = rolePermissions[role];
```

5. Use Higher-Order Functions
Replace loops or repetitive blocks with functions like map, filter, and reduce.

BEFORE
```js
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}
```

AFTER

```js
const doubled = numbers.map((num) => num * 2);
```

6. Centralize Configuration
Store constants, configurations, or reusable data in a single file.

BEFORE
```js
const apiUrl = 'https://api.example.com';
const timeout = 5000;

// In another file:
const apiUrl = 'https://api.example.com';
const timeout = 5000;
```

AFTER

```js
// config.js
export const CONFIG = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
};

// usage
import { CONFIG } from './config.js';
```

7. Avoid Over-Abstracting
Be mindful of premature abstraction. If you refactor too early or try to abstract everything, you might end up with overly complex code.
Guideline:
Only refactor when repetition occurs 3 or more times. The first duplication might not justify abstraction.


8. DRY Across Tests
Tests often have repeated setup and teardown code. Use test frameworks’ features like beforeEach, reusable mock data, or custom helpers.

BEFORE
```js
it('should create a user', () => {
    const user = { id: 1, name: 'John' };
    const response = createUser(user);
    expect(response).toEqual(user);
});

it('should update a user', () => {
    const user = { id: 1, name: 'John' };
    const updatedUser = { id: 1, name: 'John Doe' };
    const response = updateUser(user, updatedUser);
    expect(response).toEqual(updatedUser);
});
```

AFTER

```js
const mockUser = { id: 1, name: 'John' };

it('should create a user', () => {
    const response = createUser(mockUser);
    expect(response).toEqual(mockUser);
});

it('should update a user', () => {
    const updatedUser = { ...mockUser, name: 'John Doe' };
    const response = updateUser(mockUser, updatedUser);
    expect(response).toEqual(updatedUser);
});
```

9. Use Template Literals
Simplify repeated string concatenations by using template literals.

BEFORE
```js
const greeting = 'Hello ' + firstName + ' ' + lastName + '!';
```

AFTER
```js
const greeting = `Hello ${firstName} ${lastName}!`;
```

10. Modularize Code
Divide your code into modules or classes with clear responsibilities to avoid duplication across files.

File Structure:
/utils
   mathUtils.js
   stringUtils.js
/services
   apiService.js

Usage:
```js
// mathUtils.js
export const add = (a, b) => a + b;

// apiService.js
import { add } from './utils/mathUtils.js';
```

1. Identify the Repetition
Repetition occurs in:

The structure of each object in the sources array.
The use of filePath combined with imageName to construct the source.

2. Use a Function to Dynamically Generate the sources Array
Refactor the sources array by separating the unique properties (e.g., questionCategory, imageName) into concise input data, and use a function to construct the full objects dynamically.

BEFORE

```js

const quizData = {
  questions: [
    "What shape is this?",
    "What number do you see?",
    "How many X's do you see?",
  ],

  answers: {
    shapes: ["Triangle", "Circle", "Square"],
    numbers: [1, 2, 3, 4, 5],
  },

  sources: [
    {
      questionCategory: "shape",
      imageName: "Triangle",
      source: `${filePath}/Triangle.svg`,
    },
    {
      questionCategory: "shape",
      imageName: "Circle",
      source: `${filePath}/Circle.svg`,
    },
    {
      questionCategory: "shape",
      imageName: "Square",
      source: `${filePath}/Square.svg`,
    },
    { questionCategory: "shapeX", imageName: "X", source: `${filePath}/X.svg` },
    { questionCategory: "number", imageName: 1, source: `${filePath}/1.svg` },
    { questionCategory: "number", imageName: 2, source: `${filePath}/2.svg` },
    { questionCategory: "number", imageName: 3, source: `${filePath}/3.svg` },
    { questionCategory: "number", imageName: 4, source: `${filePath}/4.svg` },
    { questionCategory: "number", imageName: 5, source: `${filePath}/5.svg` },
  ],
};
```

AFTER

```js

const filePath = "/path/to/images"; // Base file path

// Helper function to generate sources dynamically
const generateSources = (categories) => {
  return categories.flatMap(({ category, items }) =>
    items.map((item) => ({
      questionCategory: category,
      imageName: item,
      source: `${filePath}/${item}.svg`,
    }))
  );
};

// Define unique input data
const categories = [
  { category: "shape", items: ["Triangle", "Circle", "Square"] },
  { category: "shapeX", items: ["X"] },
  { category: "number", items: [1, 2, 3, 4, 5] },
];

// Generate the sources array
const quizData = {
  questions: [
    "What shape is this?",
    "What number do you see?",
    "How many X's do you see?",
  ],
  answers: {
    shapes: ["Triangle", "Circle", "Square"],
    numbers: [1, 2, 3, 4, 5],
  },
  sources: generateSources(categories), // Dynamically generated
};

console.log(quizData.sources);
```





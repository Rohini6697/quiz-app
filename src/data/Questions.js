export const Questions = [
  {
    "id": 1,
    "question": "Which tag is used to create a hyperlink in HTML?",
    "options": ["<link>", "<a>", "<href>", "<url>"],
    "answer": "<a>",
    "category": "HTML & CSS",
    "difficulty": "Easy"
  },
  {
    "id": 2,
    "question": "Which CSS property controls the space outside an element’s border?",
    "options": ["padding", "margin", "border-spacing", "gap"],
    "answer": "margin",
    "category": "HTML & CSS",
    "difficulty": "Easy"
  },
  {
    "id": 3,
    "question": "What does CSS specificity primarily depend on?",
    "options": ["Order of rules only", "Selector types and counts", "File size", "Number of properties"],
    "answer": "Selector types and counts",
    "category": "HTML & CSS",
    "difficulty": "Medium"
  },
  {
    "id": 4,
    "question": "Which HTML attribute improves image loading by deferring offscreen images?",
    "options": ["defer", "loading", "async", "lazy"],
    "answer": "loading",
    "category": "HTML & CSS",
    "difficulty": "Medium"
  },

  {
    "id": 5,
    "question": "Which method converts a JSON string to a JavaScript object?",
    "options": ["JSON.decode()", "JSON.parse()", "JSON.stringify()", "Object.fromJSON()"],
    "answer": "JSON.parse()",
    "category": "JS",
    "difficulty": "Easy"
  },
  {
    "id": 6,
    "question": "What is the result of `typeof null` in JavaScript?",
    "options": ["\"object\"", "\"null\"", "\"undefined\"", "\"number\""],
    "answer": "\"object\"",
    "category": "JS",
    "difficulty": "Medium"
  },
  {
    "id": 7,
    "question": "Which array method returns a new array with elements that pass a test?",
    "options": ["map()", "forEach()", "filter()", "reduce()"],
    "answer": "filter()",
    "category": "JS",
    "difficulty": "Easy"
  },
  {
    "id": 8,
    "question": "What does `const` prevent in JavaScript?",
    "options": ["Reassignment of the binding", "Mutation of the object", "Scope hoisting", "Function calls"],
    "answer": "Reassignment of the binding",
    "category": "JS",
    "difficulty": "Medium"
  },

  {
    "id": 9,
    "question": "Which hook is used to manage state in a functional React component?",
    "options": ["useEffect", "useState", "useMemo", "useRef"],
    "answer": "useState",
    "category": "React",
    "difficulty": "Easy"
  },
  {
    "id": 10,
    "question": "What should be provided to list items in React to help with reconciliation?",
    "options": ["id attribute", "name attribute", "key prop", "index only"],
    "answer": "key prop",
    "category": "React",
    "difficulty": "Easy"
  },
  {
    "id": 11,
    "question": "When does `useEffect` run if you pass an empty dependency array `[]`?",
    "options": ["On every render", "Only on mount and unmount", "Only on unmount", "Never"],
    "answer": "Only on mount and unmount",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 12,
    "question": "What is the purpose of React’s `memo`?",
    "options": ["Side effects", "Skip re-render if props didn’t change", "Create refs", "Manage global state"],
    "answer": "Skip re-render if props didn’t change",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 13,
    "question": "Which file is typically used to define routes in a React Router v6 app?",
    "options": ["App.css", "routes.json", "App.jsx (or a Routes component)", "index.html"],
    "answer": "App.jsx (or a Routes component)",
    "category": "React",
    "difficulty": "Medium"
  },

  {
    "id": 14,
    "question": "Which keyword is used to define a function in Python?",
    "options": ["func", "function", "def", "lambda"],
    "answer": "def",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 15,
    "question": "What is the output type of `range(5)` in Python 3?",
    "options": ["list", "tuple", "range object", "generator"],
    "answer": "range object",
    "category": "Python",
    "difficulty": "Medium"
  },
  {
    "id": 16,
    "question": "Which data structure in Python is **immutable**?",
    "options": ["list", "dict", "set", "tuple"],
    "answer": "tuple",
    "category": "Python",
    "difficulty": "Easy"
  },
  {
    "id": 17,
    "question": "What does list comprehension `[x*x for x in nums if x % 2 == 0]` produce?",
    "options": ["Squares of all numbers", "Squares of even numbers", "Even numbers only", "Squares of odd numbers"],
    "answer": "Squares of even numbers",
    "category": "Python",
    "difficulty": "Medium"
  },

  {
    "id": 18,
    "question": "Which utility class sets a flex container in Tailwind?",
    "options": ["grid", "flex", "inline", "block"],
    "answer": "flex",
    "category": "Tailwind",
    "difficulty": "Easy"
  },
  {
    "id": 19,
    "question": "How do you apply a custom color shade like `blue-600` to text in Tailwind?",
    "options": ["text-blue-600", "color-blue-600", "font-blue-600", "fg-blue-600"],
    "answer": "text-blue-600",
    "category": "Tailwind",
    "difficulty": "Easy"
  },
  {
    "id": 20,
    "question": "Which Tailwind class adds a shadow similar to a card?",
    "options": ["shadow", "drop-shadow", "shadow-md", "shadow-text"],
    "answer": "shadow-md",
    "category": "Tailwind",
    "difficulty": "Medium"
  },
  {
    "id": 21,
    "question": "What is the correct Tailwind class order to center items horizontally with flex?",
    "options": ["items-center", "justify-center", "content-center", "place-items-center"],
    "answer": "justify-center",
    "category": "Tailwind",
    "difficulty": "Medium"
  },

  {
    "id": 22,
    "question": "Which of the following is a valid C data type for whole numbers?",
    "options": ["float", "char", "int", "double"],
    "answer": "int",
    "category": "C Programming",
    "difficulty": "Easy"
  },
  {
    "id": 23,
    "question": "What will `printf(\"%d\", 5/2);` print in C?",
    "options": ["2.5", "3", "2", "5/2"],
    "answer": "2",
    "category": "C Programming",
    "difficulty": "Medium"
  },
  {
    "id": 24,
    "question": "Which header file is needed for `printf` and `scanf` in C?",
    "options": ["stdlib.h", "stdio.h", "string.h", "ctype.h"],
    "answer": "stdio.h",
    "category": "C Programming",
    "difficulty": "Easy"
  },
  {
    "id": 25,
    "question": "What does the `&` operator do in C when used with a variable in `scanf`?",
    "options": ["Bitwise AND", "Address-of (gets memory address)", "Dereference", "Modulo"],
    "answer": "Address-of (gets memory address)",
    "category": "C Programming",
    "difficulty": "Medium"
  }
]

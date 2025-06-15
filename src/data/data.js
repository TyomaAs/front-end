// src/data/data.js

// user for login
export const user = {
  name: "Test User",
  email: "test@test.com",
  role: "admin",
  id: 1,
};

export const users = [
  {
    name: "Test User",
    email: "test@test.com",
    role: "admin",
    id: 1,
  },
  {
    id: 5,
    name: "Admin Master",
    email: "admin@example.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Tyoma Sunshine",
    email: "tyoma@example.com",
    role: "student",
  },
  {
    id: 3,
    name: "Lera Cutie",
    email: "lera@example.com",
    role: "teacher",
  },
  {
    id: 4,
    name: "Nusha Sparkle",
    email: "nusha@example.com",
    role: "student",
  },
];

export const courses = [
  {
    id: "1",
    title: "Intro to React",
    description: "Learn React basics",
    image:
      "https://i.pinimg.com/736x/5a/41/0a/5a410a3a52f621aae271e26f6c732512.jpg",
    idCreator: 1,
    complited: true,
  },
  {
    id: "2",
    title: "Backend Magic",
    description: "Node.js, Express",
    image:
      "https://i.pinimg.com/736x/5a/41/0a/5a410a3a52f621aae271e26f6c732512.jpg",
    idCreator: 2,
    complited: true,
  },
];

export const lessons = [
  {
    id: "1",
    courseId: "1",
    title: "JSX and Components",
    image:
      "https://i.pinimg.com/736x/5a/41/0a/5a410a3a52f621aae271e26f6c732512.jpg",
    description: "Some text to test",
  },
  { id: "2", courseId: "1", title: "State and Props" },
  { id: "3", courseId: "2", title: "Intro to Node.js" },
  {
    id: "4",
    courseId: "2",
    title: "Building APIs",
    image:
      "https://i.pinimg.com/736x/5a/41/0a/5a410a3a52f621aae271e26f6c732512.jpg",
  },
  {
    id: "5",
    courseId: "2",
    title: "Test APIs",
    image:
      "https://i.pinimg.com/736x/5a/41/0a/5a410a3a52f621aae271e26f6c732512.jpg",
  },
];

export const lecture = [
  {
    id: 2,
    lessonId: 1,
    order: 2,
    type: "text",
    content: "Hello this example paragraph for lecture",
  },
  {
    id: 1,
    lessonId: 1,
    order: 1,
    type: "header",
    content: "Hello this example title for lecture",
  },
  {
    id: 3,
    lessonId: 1,
    order: 3,
    type: "quote",
    content: "Progamming is love <3",
  },
  {
    id: 4,
    lessonId: 1,
    order: 4,
    type: "image",
    content:
      "https://i.pinimg.com/474x/93/2b/f7/932bf794d8f336aaf1b64286b55c2d13.jpg",
  },
  {
    id: 5,
    lessonId: 1,
    order: 5,
    type: "text",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const gameBlocks = [
  {
    id: 1001,
    lessonId: 1,
    order: 1,
    type: "fillBlank",
    content: {
      title: "Write the missing word;",
      before: "#include<iostream>\n\nint ",
      answer: "main",
      after: '() { std::cout << "Hello" << std::endl; }',
    },
  },
  {
    id: 1002,
    lessonId: 1,
    order: 2,
    type: "singleChoice",
    content: {
      title: "Choose the correct keyword to define a function in Python:",
      options: [
        { id: 1, text: "func", correct: false },
        { id: 2, text: "def", correct: true },
        { id: 3, text: "function", correct: false },
      ],
    },
  },
  {
    id: 1004,
    lessonId: 2,
    order: 2,
    type: "singleChoice",
    content: {
      title: "Choose the correct keyword to define a function in Python:",
      options: [
        { id: 1, text: "func", correct: false },
        { id: 2, text: "def", correct: true },
        { id: 3, text: "function", correct: false },
      ],
    },
  },

  {
    id: 1003,
    lessonId: 1,
    order: 3,
    type: "matchPairs",
    content: {
      title: "Type of variable",
      pairs: [
        { left: "Integer", right: "bool" },
        { left: "Boolean", right: "float" },
        { left: "String", right: "int" },
        { left: "Floating Point", right: "str" },
      ],
      correct: [2, 0, 3, 1], // тобто: "Integer" ↔ "float", "String" ↔ "str", і тд.
      selected: [],
    },
  },
];

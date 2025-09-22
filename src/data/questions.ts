import { Question } from '@/store/quizStore';

export const questions: Question[] = [
  {
    id: 1,
    question: "What does TypeScript add to JavaScript?",
    type: "multiple-choice",
    options: [
      "Static type checking",
      "Better performance",
      "New syntax features",
      "Built-in testing framework"
    ],
    correctAnswer: "Static type checking",
    explanation: "TypeScript adds static type checking to JavaScript, helping catch errors at compile time rather than runtime.",
    topic: "TypeScript"
  },
  {
    id: 2,
    question: "Which CSS property is used to create a flex container?",
    type: "multiple-choice",
    options: [
      "display: flex",
      "flex-container: true",
      "layout: flexbox",
      "flex: container"
    ],
    correctAnswer: "display: flex",
    explanation: "The 'display: flex' property turns an element into a flex container, enabling flexbox layout for its children.",
    topic: "CSS"
  },
  {
    id: 3,
    question: "What is the correct way to define a TypeScript interface?",
    type: "code",
    correctAnswer: "interface User {\n  name: string;\n  age: number;\n}",
    explanation: "Interfaces in TypeScript define the shape of objects using the 'interface' keyword followed by property definitions.",
    topic: "TypeScript"
  },
  {
    id: 4,
    question: "Which React hook is used to manage component state?",
    type: "multiple-choice",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    correctAnswer: "useState",
    explanation: "useState is the primary hook for managing local component state in functional React components.",
    topic: "React"
  },
  {
    id: 5,
    question: "What does 'justify-content: space-between' do in flexbox?",
    type: "multiple-choice",
    options: [
      "Distributes items with equal space between them",
      "Centers all items",
      "Aligns items to the start",
      "Stretches items to fill container"
    ],
    correctAnswer: "Distributes items with equal space between them",
    explanation: "justify-content: space-between distributes flex items evenly with the first item at the start and last item at the end.",
    topic: "CSS"
  },
  {
    id: 6,
    question: "What is JSX in React?",
    type: "text",
    correctAnswer: "JavaScript XML",
    explanation: "JSX stands for JavaScript XML. It's a syntax extension that allows you to write HTML-like code in JavaScript.",
    topic: "React"
  },
  {
    id: 7,
    question: "Which CSS Grid property defines the columns?",
    type: "multiple-choice",
    options: [
      "grid-template-columns",
      "grid-columns",
      "column-template",
      "grid-column-size"
    ],
    correctAnswer: "grid-template-columns",
    explanation: "grid-template-columns defines the size and number of columns in a CSS Grid container.",
    topic: "CSS"
  },
  {
    id: 8,
    question: "What is the purpose of the useEffect hook?",
    type: "multiple-choice",
    options: [
      "To perform side effects in components",
      "To manage component state",
      "To create custom hooks",
      "To handle form submissions"
    ],
    correctAnswer: "To perform side effects in components",
    explanation: "useEffect is used to perform side effects like data fetching, subscriptions, or manually changing the DOM.",
    topic: "React"
  },
  {
    id: 9,
    question: "What does the '?' symbol mean in TypeScript interfaces?",
    type: "multiple-choice",
    options: [
      "Makes a property optional",
      "Makes a property required",
      "Indicates a nullable type",
      "Creates a union type"
    ],
    correctAnswer: "Makes a property optional",
    explanation: "The '?' symbol in TypeScript interfaces makes a property optional, meaning it doesn't have to be present in objects that implement the interface.",
    topic: "TypeScript"
  },
  {
    id: 10,
    question: "Complete this CSS rule to center a div both horizontally and vertically using flexbox:",
    type: "code",
    correctAnswer: ".center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
    explanation: "To center content with flexbox, use display: flex, justify-content: center (horizontal), and align-items: center (vertical).",
    topic: "CSS"
  },
  {
    id: 11,
    question: "What is the main benefit of using Zustand for state management?",
    type: "multiple-choice",
    options: [
      "Simplicity and minimal boilerplate",
      "Built-in time travel debugging",
      "Automatic performance optimization",
      "Type safety without TypeScript"
    ],
    correctAnswer: "Simplicity and minimal boilerplate",
    explanation: "Zustand's main advantage is its simplicity - it requires minimal boilerplate code compared to other state management solutions.",
    topic: "Zustand"
  },
  {
    id: 12,
    question: "What does 'npm run dev' typically do in a Next.js project?",
    type: "text",
    correctAnswer: "starts development server",
    explanation: "'npm run dev' starts the Next.js development server with hot reloading and development optimizations.",
    topic: "Next.js"
  }
];

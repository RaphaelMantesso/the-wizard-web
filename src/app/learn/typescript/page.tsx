'use client';

import Link from 'next/link';
import { useState } from 'react';

const CodeExample = ({ title, code, explanation }: { title: string; code: string; explanation: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <div className="bg-gray-900 rounded-md p-4 mb-4">
        <pre className="text-green-400 text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-purple-300 hover:text-purple-200 text-sm font-medium mb-2"
      >
        {isExpanded ? '▼' : '▶'} Explanation
      </button>
      {isExpanded && (
        <p className="text-gray-300 text-sm leading-relaxed">{explanation}</p>
      )}
    </div>
  );
};

export default function TypeScriptLesson() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/learn" 
            className="text-purple-300 hover:text-purple-200 text-sm font-medium mb-4 inline-block"
          >
            ← Back to Learning Path
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">
            📘 TypeScript Fundamentals
          </h1>
          <p className="text-xl text-gray-200">
            Learn how TypeScript adds type safety to JavaScript and makes your code more robust.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">What is TypeScript?</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              TypeScript is a programming language developed by Microsoft that builds on JavaScript 
              by adding static type definitions. It helps catch errors early in development and 
              makes your code more maintainable.
            </p>
            <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-blue-200 text-sm">
                💡 <strong>Fun Fact:</strong> TypeScript code compiles to clean, readable JavaScript 
                that runs anywhere JavaScript runs.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Key Concepts</h2>
            <div className="space-y-6">
              <CodeExample
                title="Basic Types"
                code={`// Basic type annotations
let name: string = "Wizard";
let age: number = 25;
let isLearning: boolean = true;

// Arrays
let skills: string[] = ["HTML", "CSS", "JavaScript"];
let scores: number[] = [95, 87, 92];`}
                explanation="TypeScript allows you to specify the type of variables, which helps catch errors at compile time. The basic types include string, number, boolean, and arrays."
              />

              <CodeExample
                title="Interfaces"
                code={`// Define the shape of an object
interface Student {
  name: string;
  age: number;
  courses: string[];
  isActive?: boolean; // Optional property
}

const student: Student = {
  name: "Alex",
  age: 22,
  courses: ["TypeScript", "React"]
};`}
                explanation="Interfaces define the structure of objects. They're like contracts that ensure objects have the required properties with correct types. The '?' makes a property optional."
              />

              <CodeExample
                title="Functions with Types"
                code={`// Function with typed parameters and return type
function calculateGrade(score: number): string {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "F";
}

// Arrow function with types
const multiply = (a: number, b: number): number => a * b;`}
                explanation="Functions can have typed parameters and return types. This ensures you pass the right types of arguments and return the expected type."
              />

              <CodeExample
                title="Union Types"
                code={`// A variable that can be multiple types
let id: string | number;
id = "ABC123";  // Valid
id = 12345;     // Also valid

// Function that accepts multiple types
function formatId(id: string | number): string {
  return \`ID: \${id}\`;
}`}
                explanation="Union types allow a variable to be one of several types. This is useful when a value could legitimately be different types in different situations."
              />
            </div>
          </section>

          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Why Use TypeScript?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">✅ Benefits</h3>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• Catch errors at compile time</li>
                  <li>• Better IDE support and autocomplete</li>
                  <li>• Improved code documentation</li>
                  <li>• Easier refactoring</li>
                  <li>• Better team collaboration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">⚠️ Considerations</h3>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• Learning curve for beginners</li>
                  <li>• Additional build step required</li>
                  <li>• More verbose than plain JavaScript</li>
                  <li>• Setup complexity for new projects</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              href="/challenges"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-block"
            >
              Ready for Challenges? 🎯
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

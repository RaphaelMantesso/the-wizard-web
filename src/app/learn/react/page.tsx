'use client';

import Link from 'next/link';
import { useState } from 'react';

const CodeExample = ({ title, code, explanation, demo }: { 
  title: string; 
  code: string; 
  explanation: string;
  demo?: React.ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      {demo && (
        <div className="bg-white rounded-md p-4 mb-4">
          {demo}
        </div>
      )}
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

// Demo Components
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <p className="text-lg mb-4 text-gray-800">Count: {count}</p>
      <div className="space-x-2">
        <button 
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          -
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

const TodoDemo = () => {
  const [todos, setTodos] = useState(['Learn React', 'Build awesome apps']);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div className="max-w-md">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a todo..."
          className="flex-1 px-3 py-2 border rounded text-gray-800"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button
          onClick={addTodo}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded text-gray-800">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ReactLesson() {
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
            ⚛️ React Components
          </h1>
          <p className="text-xl text-gray-200">
            Learn to build reusable, interactive components with React hooks and modern patterns.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">What is React?</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              React is a JavaScript library for building user interfaces, especially web applications. 
              It lets you create reusable components that manage their own state and compose them 
              to build complex UIs.
            </p>
            <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-blue-200 text-sm">
                💡 <strong>Key Concept:</strong> React uses a "component-based" architecture where 
                each piece of UI is a self-contained component.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Component Fundamentals</h2>
            <div className="space-y-6">
              <CodeExample
                title="Functional Component"
                code={`// Simple functional component
function Welcome({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}`}
                explanation="Functional components are JavaScript functions that return JSX. They can receive props (properties) as parameters and use them to render dynamic content."
                demo={
                  <div className="space-y-2">
                    <h1 className="text-xl font-bold text-gray-800">Hello, Alice!</h1>
                    <h1 className="text-xl font-bold text-gray-800">Hello, Bob!</h1>
                  </div>
                }
              />

              <CodeExample
                title="State with useState Hook"
                code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`}
                explanation="useState is a React hook that lets you add state to functional components. It returns the current state value and a function to update it."
                demo={<Counter />}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Advanced Patterns</h2>
            <div className="space-y-6">
              <CodeExample
                title="Lists and Keys"
                code={`function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Build apps']);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}`}
                explanation="When rendering lists, React needs a unique 'key' prop for each item. This helps React efficiently update the DOM when the list changes."
                demo={<TodoDemo />}
              />

              <CodeExample
                title="useEffect Hook"
                code={`import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array = run once

  return <div>Timer: {seconds}s</div>;
}`}
                explanation="useEffect lets you perform side effects in components like data fetching, subscriptions, or timers. The dependency array controls when the effect runs."
              />

              <CodeExample
                title="Custom Hook"
                code={`// Custom hook for local storage
function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setStoredValue = (newValue: any) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

// Using the custom hook
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}`}
                explanation="Custom hooks let you extract component logic into reusable functions. They're just functions that use other hooks and follow the naming convention 'use...'."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Component Communication</h2>
            <div className="space-y-6">
              <CodeExample
                title="Props Down, Events Up"
                code={`// Parent component
function App() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <MessageInput onMessageChange={setMessage} />
      <MessageDisplay message={message} />
    </div>
  );
}

// Child components
function MessageInput({ onMessageChange }: { onMessageChange: (msg: string) => void }) {
  return (
    <input
      onChange={(e) => onMessageChange(e.target.value)}
      placeholder="Type a message..."
    />
  );
}

function MessageDisplay({ message }: { message: string }) {
  return <p>You typed: {message}</p>;
}`}
                explanation="React follows a 'props down, events up' pattern. Parent components pass data down via props, and children communicate back via callback functions."
              />
            </div>
          </section>

          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">React Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-2">✅ Do</h3>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• Use functional components with hooks</li>
                  <li>• Keep components small and focused</li>
                  <li>• Use TypeScript for better development</li>
                  <li>• Extract custom hooks for reusable logic</li>
                  <li>• Use proper key props in lists</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">❌ Avoid</h3>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• Mutating state directly</li>
                  <li>• Using array indices as keys</li>
                  <li>• Too many useEffect hooks</li>
                  <li>• Prop drilling (use context instead)</li>
                  <li>• Forgetting dependency arrays</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              href="/learn/zustand"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-block"
            >
              Next: State Management 🐻
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

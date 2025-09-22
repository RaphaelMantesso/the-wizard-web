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

export default function ZustandLesson() {
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
            🐻 State Management with Zustand
          </h1>
          <p className="text-xl text-gray-200">
            Learn how to manage application state efficiently with Zustand's simple and powerful API.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">What is Zustand?</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Zustand is a small, fast, and scalable state management solution for React. 
              It provides a simple API without the boilerplate of Redux, making state management 
              enjoyable and productive.
            </p>
            <div className="bg-orange-900/30 border-l-4 border-orange-400 p-4 rounded">
              <p className="text-orange-200 text-sm">
                💡 <strong>Why Zustand?</strong> It's lightweight (~2kb), has no providers, 
                works with TypeScript out of the box, and can persist state automatically.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Getting Started</h2>
            <div className="space-y-6">
              <CodeExample
                title="Basic Store Creation"
                code={`import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));`}
                explanation="Create a Zustand store by calling create() with a function that returns your initial state and actions. The set function is used to update the state."
              />

              <CodeExample
                title="Using the Store in Components"
                code={`import { useCounterStore } from './store';

function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Or select specific values to avoid unnecessary re-renders
function CountDisplay() {
  const count = useCounterStore((state) => state.count);
  return <div>Current count: {count}</div>;
}`}
                explanation="Use the store hook in your components. You can destructure all values or use a selector function to pick specific state slices, which helps optimize re-renders."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibent text-white mb-6">Advanced Features</h2>
            <div className="space-y-6">
              <CodeExample
                title="Async Actions"
                code={`interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
}

const useUserStore = create<UserState>((set, get) => ({
  users: [],
  loading: false,
  error: null,
  
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/users');
      const users = await response.json();
      set({ users, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));`}
                explanation="Handle async operations by setting loading states and using try/catch blocks. The get function allows you to access current state within actions."
              />

              <CodeExample
                title="Persistent State"
                code={`import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  theme: 'light' | 'dark';
  language: string;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: string) => void;
}

const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'en',
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'app-settings', // localStorage key
    }
  )
);`}
                explanation="Use the persist middleware to automatically save and restore state from localStorage. Perfect for user preferences and settings."
              />

              <CodeExample
                title="Computed Values with Get"
                code={`interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  getFilteredTodos: () => Todo[];
  getStats: () => { total: number; active: number; completed: number };
}

const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  filter: 'all',
  
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now().toString(), text, completed: false }]
  })),
  
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  
  setFilter: (filter) => set({ filter }),
  
  getFilteredTodos: () => {
    const { todos, filter } = get();
    switch (filter) {
      case 'active': return todos.filter(todo => !todo.completed);
      case 'completed': return todos.filter(todo => todo.completed);
      default: return todos;
    }
  },
  
  getStats: () => {
    const todos = get().todos;
    return {
      total: todos.length,
      active: todos.filter(todo => !todo.completed).length,
      completed: todos.filter(todo => todo.completed).length,
    };
  },
}));`}
                explanation="Use the get function to create computed values and complex state derivations. This keeps your components clean and logic centralized."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Best Practices</h2>
            <div className="space-y-6">
              <CodeExample
                title="Store Slicing"
                code={`// Instead of one large store, create focused stores
const useAuthStore = create((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ 
    items: [...state.items, item] 
  })),
  removeItem: (id) => set((state) => ({ 
    items: state.items.filter(item => item.id !== id) 
  })),
}));

// Combine stores when needed
function useAppStore() {
  const auth = useAuthStore();
  const cart = useCartStore();
  return { auth, cart };
}`}
                explanation="Create focused stores for different domains instead of one large store. This improves maintainability and allows for better code organization."
              />

              <CodeExample
                title="Optimized Selectors"
                code={`// ❌ This will re-render on any state change
const { user, posts, comments } = useAppStore();

// ✅ This only re-renders when user changes
const user = useAppStore((state) => state.user);

// ✅ Use shallow comparison for objects
import { shallow } from 'zustand/shallow';

const { name, email } = useUserStore(
  (state) => ({ name: state.user.name, email: state.user.email }),
  shallow
);`}
                explanation="Use selectors to prevent unnecessary re-renders. For objects, use shallow comparison to avoid re-renders when the object content hasn't changed."
              />
            </div>
          </section>

          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Zustand vs Other Solutions</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 text-white">Feature</th>
                    <th className="text-left py-3 text-orange-300">Zustand</th>
                    <th className="text-left py-3 text-blue-300">Redux</th>
                    <th className="text-left py-3 text-green-300">Context API</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  <tr className="border-b border-white/10">
                    <td className="py-2">Bundle Size</td>
                    <td className="py-2 text-orange-200">~2kb</td>
                    <td className="py-2 text-blue-200">~47kb</td>
                    <td className="py-2 text-green-200">Built-in</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2">Boilerplate</td>
                    <td className="py-2 text-orange-200">Minimal</td>
                    <td className="py-2 text-blue-200">High</td>
                    <td className="py-2 text-green-200">Medium</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2">TypeScript</td>
                    <td className="py-2 text-orange-200">Excellent</td>
                    <td className="py-2 text-blue-200">Good</td>
                    <td className="py-2 text-green-200">Basic</td>
                  </tr>
                  <tr>
                    <td className="py-2">DevTools</td>
                    <td className="py-2 text-orange-200">Available</td>
                    <td className="py-2 text-blue-200">Excellent</td>
                    <td className="py-2 text-green-200">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="text-center">
            <Link
              href="/learn/nextjs"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-block"
            >
              Next: Next.js Essentials ▲
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

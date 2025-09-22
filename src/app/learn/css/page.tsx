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

export default function CSSLesson() {
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
            🎨 Modern CSS Techniques
          </h1>
          <p className="text-xl text-gray-200">
            Master Flexbox, Grid, and modern CSS features for responsive, beautiful designs.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">CSS Layout Evolution</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              CSS has evolved from simple styling to powerful layout systems. Modern CSS gives us 
              Flexbox for one-dimensional layouts and Grid for two-dimensional layouts, making 
              responsive design easier than ever.
            </p>
            <div className="bg-green-900/30 border-l-4 border-green-400 p-4 rounded">
              <p className="text-green-200 text-sm">
                💡 <strong>Pro Tip:</strong> Use Flexbox for components and Grid for page layouts. 
                They work great together!
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Flexbox Fundamentals</h2>
            <div className="space-y-6">
              <CodeExample
                title="Basic Flexbox Container"
                code={`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.item {
  flex: 1;
  padding: 1rem;
  background: #3b82f6;
  color: white;
  text-align: center;
}`}
                explanation="Flexbox creates flexible layouts. justify-content controls horizontal alignment, align-items controls vertical alignment, and gap adds space between items."
                demo={
                  <div className="flex justify-center items-center gap-4 h-20">
                    <div className="flex-1 p-4 bg-blue-500 text-white text-center rounded">Item 1</div>
                    <div className="flex-1 p-4 bg-blue-500 text-white text-center rounded">Item 2</div>
                    <div className="flex-1 p-4 bg-blue-500 text-white text-center rounded">Item 3</div>
                  </div>
                }
              />

              <CodeExample
                title="Responsive Navigation"
                code={`.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }
}`}
                explanation="Flexbox makes responsive navigation easy. Use space-between to push items apart, and change flex-direction on mobile for vertical stacking."
                demo={
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
                    <div className="font-bold text-gray-800">Logo</div>
                    <div className="flex gap-4">
                      <span className="text-gray-600">Home</span>
                      <span className="text-gray-600">About</span>
                      <span className="text-gray-600">Contact</span>
                    </div>
                  </div>
                }
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">CSS Grid Power</h2>
            <div className="space-y-6">
              <CodeExample
                title="Basic Grid Layout"
                code={`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
}

.grid-item {
  background: #10b981;
  padding: 2rem;
  text-align: center;
  color: white;
}`}
                explanation="CSS Grid creates two-dimensional layouts. repeat(3, 1fr) creates 3 equal columns, and grid-gap adds space between all grid items."
                demo={
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="bg-green-500 p-8 text-white text-center rounded">1</div>
                    <div className="bg-green-500 p-8 text-white text-center rounded">2</div>
                    <div className="bg-green-500 p-8 text-white text-center rounded">3</div>
                    <div className="bg-green-500 p-8 text-white text-center rounded">4</div>
                    <div className="bg-green-500 p-8 text-white text-center rounded">5</div>
                    <div className="bg-green-500 p-8 text-white text-center rounded">6</div>
                  </div>
                }
              />

              <CodeExample
                title="Complex Grid Areas"
                code={`.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`}
                explanation="Grid areas let you name sections of your layout and place items by name. This creates semantic, maintainable layouts that are easy to understand."
                demo={
                  <div className="grid grid-rows-3 h-40 gap-2" style={{gridTemplateAreas: '"header header" "sidebar main" "footer footer"'}}>
                    <div className="bg-purple-500 text-white p-2 text-center rounded" style={{gridArea: 'header'}}>Header</div>
                    <div className="bg-blue-500 text-white p-2 text-center rounded" style={{gridArea: 'sidebar'}}>Sidebar</div>
                    <div className="bg-green-500 text-white p-2 text-center rounded" style={{gridArea: 'main'}}>Main</div>
                    <div className="bg-red-500 text-white p-2 text-center rounded" style={{gridArea: 'footer'}}>Footer</div>
                  </div>
                }
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Modern CSS Features</h2>
            <div className="space-y-6">
              <CodeExample
                title="CSS Custom Properties (Variables)"
                code={`:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --spacing: 1rem;
  --border-radius: 0.5rem;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing);
  border-radius: var(--border-radius);
  color: white;
  border: none;
}

.button:hover {
  background: var(--secondary-color);
}`}
                explanation="CSS variables make your styles more maintainable. Define them once and reuse throughout your stylesheet. They can even be changed with JavaScript!"
              />

              <CodeExample
                title="Container Queries"
                code={`.card {
  container-type: inline-size;
  background: white;
  border-radius: 8px;
  padding: 1rem;
}

@container (min-width: 300px) {
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-content {
    display: flex;
    gap: 1rem;
  }
}`}
                explanation="Container queries let components respond to their container size, not just the viewport. This makes truly modular, responsive components possible."
              />
            </div>
          </section>

          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">CSS Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-2">✅ Do</h3>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• Use semantic class names</li>
                  <li>• Prefer Flexbox and Grid over floats</li>
                  <li>• Use CSS variables for consistency</li>
                  <li>• Write mobile-first responsive code</li>
                  <li>• Keep specificity low</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">❌ Avoid</h3>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• Using !important unnecessarily</li>
                  <li>• Inline styles in HTML</li>
                  <li>• Deep nesting in CSS</li>
                  <li>• Fixed pixel values everywhere</li>
                  <li>• Overusing absolute positioning</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              href="/learn/react"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-block"
            >
              Next: React Components ⚛️
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

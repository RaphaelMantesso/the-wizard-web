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
const HoverDemo = () => {
  return (
    <div className="flex gap-4 justify-center">
      <div className="w-16 h-16 bg-blue-500 rounded-lg transition-transform hover:scale-110 hover:rotate-12 cursor-pointer"></div>
      <div className="w-16 h-16 bg-green-500 rounded-lg transition-all hover:bg-green-600 hover:shadow-lg cursor-pointer"></div>
      <div className="w-16 h-16 bg-purple-500 rounded-lg transition-all hover:rounded-full cursor-pointer"></div>
    </div>
  );
};

const LoadingDemo = () => {
  return (
    <div className="flex justify-center">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

const SlideDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="text-center">
      <button 
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        Toggle Panel
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isVisible ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-gray-100 p-4 rounded text-gray-800">
          <p>This panel slides in and out smoothly!</p>
        </div>
      </div>
    </div>
  );
};

export default function AnimationsLesson() {
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
            ✨ Web Animations
          </h1>
          <p className="text-xl text-gray-200">
            Create engaging user experiences with CSS and JavaScript animations that delight users.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Why Animations Matter</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Animations aren't just eye candy - they provide visual feedback, guide user attention, 
              and create a sense of continuity in your interface. Good animations make your app feel 
              responsive and professional.
            </p>
            <div className="bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-yellow-200 text-sm">
                💡 <strong>Golden Rule:</strong> Animations should be purposeful, not distracting. 
                They should enhance the user experience, not hinder it.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">CSS Transitions</h2>
            <div className="space-y-6">
              <CodeExample
                title="Basic Transitions"
                code={`.button {
  background-color: #3b82f6;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

/* Individual property transitions */
.card {
  transition: transform 0.2s ease, opacity 0.3s ease;
}`}
                explanation="CSS transitions smoothly animate changes between states. Use 'all' for simplicity or specify individual properties for better performance."
                demo={
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg transition-all hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg">
                    Hover me!
                  </button>
                }
              />

              <CodeExample
                title="Interactive Hover Effects"
                code={`.hover-scale {
  transition: transform 0.2s ease;
}

.hover-scale:hover {
  transform: scale(1.1) rotate(12deg);
}

.hover-glow {
  transition: all 0.3s ease;
}

.hover-glow:hover {
  background-color: #10b981;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
}

.hover-morph {
  transition: border-radius 0.3s ease;
  border-radius: 8px;
}

.hover-morph:hover {
  border-radius: 50%;
}`}
                explanation="Hover effects provide immediate feedback. Combine transforms, colors, and shadows for engaging interactions."
                demo={<HoverDemo />}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">CSS Animations</h2>
            <div className="space-y-6">
              <CodeExample
                title="Keyframe Animations"
                code={`@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.pulse {
  animation: pulse 2s infinite;
}`}
                explanation="Keyframe animations define complex motion sequences. Use percentages or from/to keywords to define animation states."
              />

              <CodeExample
                title="Loading Animations"
                code={`@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translateY(0);
  }
  40%, 43% {
    transform: translateY(-30px);
  }
  70% {
    transform: translateY(-15px);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}

.bounce {
  animation: bounce 1s infinite;
}`}
                explanation="Loading animations keep users engaged during wait times. Infinite animations work well for loading states."
                demo={<LoadingDemo />}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">JavaScript Animations</h2>
            <div className="space-y-6">
              <CodeExample
                title="React State Animations"
                code={`function SlidePanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Panel
      </button>
      
      <div className={\`
        overflow-hidden transition-all duration-300 ease-in-out
        \${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      \`}>
        <div className="p-4 bg-gray-100">
          <p>Panel content here!</p>
        </div>
      </div>
    </div>
  );
}`}
                explanation="Use React state to trigger CSS transitions. Combine max-height and opacity for smooth slide effects."
                demo={<SlideDemo />}
              />

              <CodeExample
                title="Intersection Observer Animations"
                code={`import { useEffect, useRef, useState } from 'react';

function useInView() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

function AnimatedSection() {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={\`
        transition-all duration-700
        \${inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        }
      \`}
    >
      <h2>I animate when scrolled into view!</h2>
    </div>
  );
}`}
                explanation="Intersection Observer API triggers animations when elements come into view. Perfect for scroll-triggered animations."
              />

              <CodeExample
                title="Framer Motion (Advanced)"
                code={`import { motion, AnimatePresence } from 'framer-motion';

function AnimatedList({ items }) {
  return (
    <AnimatePresence>
      {items.map(item => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {item.content}
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

// Stagger children animations
function StaggeredList() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {items.map(item => (
        <motion.div
          key={item.id}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  );
}`}
                explanation="Framer Motion is a powerful animation library for React. It provides declarative animations, gesture support, and advanced features like staggered animations."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Performance & Best Practices</h2>
            <div className="space-y-6">
              <CodeExample
                title="GPU-Accelerated Properties"
                code={`/* ✅ These properties trigger GPU acceleration */
.gpu-accelerated {
  transform: translateX(100px);    /* Use transform instead of left */
  transform: scale(1.2);           /* Use transform instead of width/height */
  opacity: 0.5;                    /* Opacity is GPU-friendly */
}

/* ❌ Avoid animating these properties */
.avoid {
  left: 100px;        /* Triggers layout */
  width: 200px;       /* Triggers layout */
  height: 200px;      /* Triggers layout */
  margin: 20px;       /* Triggers layout */
}

/* Force GPU layer for complex animations */
.will-change {
  will-change: transform, opacity;
}

/* Remove will-change after animation */
.animation-complete {
  will-change: auto;
}`}
                explanation="Animate transform and opacity for best performance. These properties are GPU-accelerated and don't trigger layout recalculations."
              />

              <CodeExample
                title="Reduced Motion Support"
                code={`/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* In JavaScript */
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

function AnimatedComponent() {
  const duration = prefersReducedMotion ? 0 : 300;
  
  return (
    <div 
      className="transition-all"
      style={{ transitionDuration: \`\${duration}ms\` }}
    >
      Content
    </div>
  );
}`}
                explanation="Always respect users' motion preferences. Some users have vestibular disorders and need reduced motion for accessibility."
              />
            </div>
          </section>

          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Animation Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-2">✅ Do</h3>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• Keep animations under 300ms for interactions</li>
                  <li>• Use easing functions (ease-out, ease-in-out)</li>
                  <li>• Animate transform and opacity</li>
                  <li>• Provide visual feedback for user actions</li>
                  <li>• Test on slower devices</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">❌ Avoid</h3>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• Animating layout properties (width, height)</li>
                  <li>• Too many simultaneous animations</li>
                  <li>• Animations longer than 500ms</li>
                  <li>• Ignoring reduced motion preferences</li>
                  <li>• Animations without purpose</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              href="/challenges"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg inline-block transform hover:scale-105"
            >
              Ready for the Challenge? 🎯✨
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

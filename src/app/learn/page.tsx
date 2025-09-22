import Link from 'next/link';

const topics = [
  {
    id: 'typescript',
    title: 'TypeScript Fundamentals',
    description: 'Learn the basics of TypeScript and how it enhances JavaScript development.',
    icon: '📘',
    difficulty: 'Beginner',
    duration: '30 min',
  },
  {
    id: 'css',
    title: 'Modern CSS Techniques',
    description: 'Master Flexbox, Grid, and modern CSS features for responsive design.',
    icon: '🎨',
    difficulty: 'Intermediate',
    duration: '45 min',
  },
  {
    id: 'react',
    title: 'React Components',
    description: 'Build reusable components and understand React fundamentals.',
    icon: '⚛️',
    difficulty: 'Intermediate',
    duration: '60 min',
  },
  {
    id: 'zustand',
    title: 'State Management with Zustand',
    description: 'Learn how to manage application state efficiently with Zustand.',
    icon: '🐻',
    difficulty: 'Advanced',
    duration: '40 min',
  },
  {
    id: 'nextjs',
    title: 'Next.js Essentials',
    description: 'Discover the power of Next.js for full-stack React applications.',
    icon: '▲',
    difficulty: 'Advanced',
    duration: '90 min',
  },
  {
    id: 'animations',
    title: 'Web Animations',
    description: 'Create engaging user experiences with CSS and JavaScript animations.',
    icon: '✨',
    difficulty: 'Intermediate',
    duration: '50 min',
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-500';
    case 'Intermediate':
      return 'bg-yellow-500';
    case 'Advanced':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export default function LearnPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            📚 Learning Path
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Choose a topic to start your magical journey into web development. 
            Each lesson includes interactive examples and hands-on practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/learn/${topic.id}`}
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{topic.icon}</div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getDifficultyColor(topic.difficulty)}`}>
                    {topic.difficulty}
                  </span>
                  <span className="text-sm text-gray-300">{topic.duration}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                {topic.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {topic.description}
              </p>
              
              <div className="mt-4 flex items-center text-purple-300 text-sm font-medium">
                Start Learning
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

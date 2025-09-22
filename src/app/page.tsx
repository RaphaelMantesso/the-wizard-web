import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            🧙‍♂️ The Wizard Web
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Master the magical arts of web development! Learn modern web technologies
            through interactive lessons and challenging quests.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/learn"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Start Learning ✨
            </Link>
            <Link
              href="/challenges"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Take Challenges 🎯
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-white mb-2">Interactive Learning</h3>
            <p className="text-gray-300">
              Learn TypeScript, CSS, React, and more through hands-on examples and live code demonstrations.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold text-white mb-2">Gamified Challenges</h3>
            <p className="text-gray-300">
              Test your skills with interactive quizzes and coding challenges. Track your progress and earn achievements.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">Modern Stack</h3>
            <p className="text-gray-300">
              Built with Next.js, TypeScript, and Tailwind CSS. Learn the tools that power today's web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

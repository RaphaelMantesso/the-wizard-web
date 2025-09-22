'use client';

import Link from 'next/link';
import { useQuizStore } from '@/store/quizStore';
import { questions } from '@/data/questions';

export default function ChallengesPage() {
  const { answers, isCompleted, score, resetQuiz } = useQuizStore();
  
  const totalQuestions = questions.length;
  const answeredQuestions = answers.length;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🎯 Web Development Challenges
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Test your knowledge with {totalQuestions} challenging questions covering TypeScript, CSS, React, and more. 
            You need 80% to pass!
          </p>
        </div>

        {/* Progress Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Your Progress</h2>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Questions Answered</span>
              <span>{answeredQuestions} / {totalQuestions}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {isCompleted ? (
            <div className="text-center">
              <div className={`text-6xl mb-4 ${score >= 80 ? 'text-green-400' : 'text-red-400'}`}>
                {score >= 80 ? '🎉' : '😅'}
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${score >= 80 ? 'text-green-400' : 'text-red-400'}`}>
                {score >= 80 ? 'Congratulations! You Passed!' : 'Keep Learning!'}
              </h3>
              <p className="text-xl text-white mb-4">
                Your Score: <span className="font-bold">{score}%</span>
              </p>
              <p className="text-gray-300 mb-6">
                {score >= 80 
                  ? "You've mastered the fundamentals of web development! 🧙‍♂️✨"
                  : "Don't give up! Review the lessons and try again. You've got this! 💪"
                }
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/challenges/quiz"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Review Answers
                </Link>
                <button
                  onClick={resetQuiz}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              {answeredQuestions === 0 ? (
                <div>
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Ready to Start?</h3>
                  <p className="text-gray-300 mb-6">
                    Challenge yourself with questions about modern web development technologies.
                  </p>
                  <Link
                    href="/challenges/quiz"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg inline-block"
                  >
                    Start Challenge ⚡
                  </Link>
                </div>
              ) : (
                <div>
                  <div className="text-4xl mb-4">⏳</div>
                  <h3 className="text-xl font-semibold text-white mb-4">In Progress</h3>
                  <p className="text-gray-300 mb-6">
                    You've answered {answeredQuestions} out of {totalQuestions} questions. Keep going!
                  </p>
                  <Link
                    href="/challenges/quiz"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-block"
                  >
                    Continue Challenge 📝
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Challenge Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 rounded-lg p-6 text-center border border-white/10">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="text-lg font-semibold text-white mb-1">Topics Covered</h3>
            <p className="text-gray-300 text-sm">TypeScript, CSS, React, Zustand, Next.js</p>
          </div>
          
          <div className="bg-white/5 rounded-lg p-6 text-center border border-white/10">
            <div className="text-3xl mb-2">⏱️</div>
            <h3 className="text-lg font-semibold text-white mb-1">Estimated Time</h3>
            <p className="text-gray-300 text-sm">15-20 minutes</p>
          </div>
          
          <div className="bg-white/5 rounded-lg p-6 text-center border border-white/10">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="text-lg font-semibold text-white mb-1">Passing Score</h3>
            <p className="text-gray-300 text-sm">80% or higher</p>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-4">💡 Tips for Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Before You Start</h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>• Review the learning materials first</li>
                <li>• Take your time to read each question carefully</li>
                <li>• Don't rush - there's no time limit</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">During the Challenge</h3>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>• Your progress is automatically saved</li>
                <li>• You can review explanations after completing</li>
                <li>• Feel free to retake the challenge anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

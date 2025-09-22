'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useQuizStore } from '@/store/quizStore';
import { questions } from '@/data/questions';

export default function QuizPage() {
  const { 
    answers, 
    currentQuestion, 
    isCompleted, 
    setAnswer, 
    nextQuestion, 
    completeQuiz 
  } = useQuizStore();
  
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  // Check if current question was already answered
  useEffect(() => {
    const existingAnswer = answers.find(a => a.questionId === question?.id);
    if (existingAnswer) {
      setSelectedAnswer(existingAnswer.userAnswer);
      setHasAnswered(true);
      setShowExplanation(true);
    } else {
      setSelectedAnswer('');
      setHasAnswered(false);
      setShowExplanation(false);
    }
  }, [currentQuestion, answers, question?.id]);

  if (isCompleted) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-white mb-8">🎉 Challenge Complete!</h1>
          <p className="text-xl text-gray-200 mb-8">
            You've answered all questions. Check your results!
          </p>
          <Link
            href="/challenges"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-block"
          >
            View Results
          </Link>
        </div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Loading...</h1>
        </div>
      </div>
    );
  }

  const handleAnswerSubmit = () => {
    if (!selectedAnswer.trim()) return;

    const isCorrect = selectedAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
    setAnswer(question.id, selectedAnswer, isCorrect);
    setHasAnswered(true);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      nextQuestion();
    } else {
      completeQuiz();
    }
  };

  const getTopicColor = (topic: string) => {
    const colors: { [key: string]: string } = {
      'TypeScript': 'bg-blue-500',
      'CSS': 'bg-pink-500',
      'React': 'bg-cyan-500',
      'Zustand': 'bg-orange-500',
      'Next.js': 'bg-gray-500'
    };
    return colors[topic] || 'bg-purple-500';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/challenges" 
            className="text-purple-300 hover:text-purple-200 text-sm font-medium mb-4 inline-block"
          >
            ← Back to Challenges
          </Link>
          
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">
              Question {currentQuestion + 1} of {totalQuestions}
            </h1>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTopicColor(question.topic)}`}>
              {question.topic}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-6">
          <h2 className="text-xl font-semibold text-white mb-6">
            {question.question}
          </h2>

          {/* Multiple Choice */}
          {question.type === 'multiple-choice' && question.options && (
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !hasAnswered && setSelectedAnswer(option)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedAnswer === option
                      ? hasAnswered
                        ? option === question.correctAnswer
                          ? 'bg-green-500/20 border-green-400 text-green-200'
                          : 'bg-red-500/20 border-red-400 text-red-200'
                        : 'bg-purple-500/20 border-purple-400 text-purple-200'
                      : hasAnswered && option === question.correctAnswer
                        ? 'bg-green-500/20 border-green-400 text-green-200'
                        : 'bg-white/5 border-white/20 text-gray-200 hover:bg-white/10'
                  } ${hasAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span className="font-medium mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Text Input */}
          {question.type === 'text' && (
            <input
              type="text"
              value={selectedAnswer}
              onChange={(e) => !hasAnswered && setSelectedAnswer(e.target.value)}
              disabled={hasAnswered}
              placeholder="Type your answer here..."
              className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          )}

          {/* Code Input */}
          {question.type === 'code' && (
            <textarea
              value={selectedAnswer}
              onChange={(e) => !hasAnswered && setSelectedAnswer(e.target.value)}
              disabled={hasAnswered}
              placeholder="Write your code here..."
              rows={6}
              className="w-full p-4 rounded-lg bg-gray-900 border border-white/20 text-green-400 font-mono text-sm placeholder-gray-500 focus:outline-none focus:border-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          )}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="bg-blue-900/30 border-l-4 border-blue-400 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-2">
              {selectedAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim() ? '✅ Correct!' : '❌ Incorrect'}
            </h3>
            <p className="text-blue-100 mb-3">{question.explanation}</p>
            {selectedAnswer.toLowerCase().trim() !== question.correctAnswer.toLowerCase().trim() && (
              <p className="text-blue-200 text-sm">
                <strong>Correct answer:</strong> {question.correctAnswer}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between">
          <div>
            {currentQuestion > 0 && (
              <button
                onClick={() => nextQuestion()}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                ← Previous
              </button>
            )}
          </div>
          
          <div className="space-x-4">
            {!hasAnswered ? (
              <button
                onClick={handleAnswerSubmit}
                disabled={!selectedAnswer.trim()}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {currentQuestion < totalQuestions - 1 ? 'Next Question →' : 'Finish Challenge 🎉'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

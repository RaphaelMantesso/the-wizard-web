import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Question {
  id: number;
  question: string;
  type: 'multiple-choice' | 'text' | 'code';
  options?: string[];
  correctAnswer: string;
  explanation: string;
  topic: string;
}

export interface QuizAnswer {
  questionId: number;
  userAnswer: string;
  isCorrect: boolean;
}

interface QuizState {
  answers: QuizAnswer[];
  currentQuestion: number;
  isCompleted: boolean;
  score: number;
  
  // Actions
  setAnswer: (questionId: number, answer: string, isCorrect: boolean) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
  completeQuiz: () => void;
  calculateScore: () => number;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      answers: [],
      currentQuestion: 0,
      isCompleted: false,
      score: 0,

      setAnswer: (questionId, answer, isCorrect) => {
        set((state) => {
          const existingAnswerIndex = state.answers.findIndex(
            (a) => a.questionId === questionId
          );
          
          const newAnswer: QuizAnswer = {
            questionId,
            userAnswer: answer,
            isCorrect,
          };

          if (existingAnswerIndex >= 0) {
            const newAnswers = [...state.answers];
            newAnswers[existingAnswerIndex] = newAnswer;
            return { answers: newAnswers };
          } else {
            return { answers: [...state.answers, newAnswer] };
          }
        });
      },

      nextQuestion: () => {
        set((state) => ({
          currentQuestion: state.currentQuestion + 1,
        }));
      },

      resetQuiz: () => {
        set({
          answers: [],
          currentQuestion: 0,
          isCompleted: false,
          score: 0,
        });
      },

      completeQuiz: () => {
        const score = get().calculateScore();
        set({
          isCompleted: true,
          score,
        });
      },

      calculateScore: () => {
        const { answers } = get();
        const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
        return Math.round((correctAnswers / answers.length) * 100);
      },
    }),
    {
      name: 'wizard-web-quiz',
    }
  )
);

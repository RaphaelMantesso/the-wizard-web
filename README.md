# 🧙‍♂️ The Wizard Web

A magical learning platform for web development built with Next.js, TypeScript, and Tailwind CSS.

## 📚 About

The Wizard Web is an interactive educational website designed to teach modern web development technologies through engaging lessons and challenging quizzes. Students can learn at their own pace and test their knowledge with a comprehensive quiz system.

## ✨ Features

### 🎓 Learning Platform
- **Interactive Lessons**: 6 comprehensive topics covering modern web development
- **Code Examples**: Live code demonstrations with explanations
- **Progressive Learning**: Structured learning path from beginner to advanced

### 🎯 Challenge System
- **12 Interactive Questions**: Multiple choice, text input, and code challenges
- **Progress Tracking**: Automatic save with localStorage persistence
- **Instant Feedback**: Detailed explanations for each answer
- **Pass/Fail System**: 80% required to pass with detailed results

### 🎨 Modern Design
- **Responsive Layout**: Works perfectly on all devices
- **Dark Theme**: Beautiful gradient design with glassmorphism effects
- **Smooth Animations**: Engaging transitions and hover effects
- **Accessible**: Built with accessibility best practices

## 🛠 Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand with persistence
- **Deployment**: Vercel-ready

## 📖 Learning Topics

1. **📘 TypeScript Fundamentals**
   - Basic types and interfaces
   - Function typing
   - Union types and advanced features

2. **🎨 Modern CSS Techniques**
   - Flexbox and CSS Grid
   - Modern layout techniques
   - CSS variables and best practices

3. **⚛️ React Components**
   - Functional components and hooks
   - State management with useState
   - Component communication patterns

4. **🐻 State Management with Zustand**
   - Store creation and usage
   - Async actions and persistence
   - Best practices and patterns

5. **▲ Next.js Essentials**
   - App Router and file-based routing
   - Server and Client Components
   - API routes and deployment

6. **✨ Web Animations**
   - CSS transitions and animations
   - JavaScript-powered animations
   - Performance optimization

## 🎯 Quiz System

The challenge system includes 12 carefully crafted questions covering all learning topics:

- **Question Types**: Multiple choice, text input, and code completion
- **Topics Covered**: TypeScript, CSS, React, Zustand, Next.js, and Animations
- **Scoring**: Percentage-based with 80% passing grade
- **Persistence**: Progress automatically saved using Zustand + localStorage
- **Review**: Detailed explanations and correct answers shown after completion

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RaphaelMantesso/the-wizard-web.git
cd the-wizard-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── challenges/         # Quiz system pages
│   ├── learn/             # Learning content pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── Navigation.tsx     # Main navigation
├── data/                  # Static data
│   └── questions.ts       # Quiz questions
└── store/                 # State management
    └── quizStore.ts       # Zustand store
```

## 🎨 Design System

- **Colors**: Purple/blue gradient theme with glassmorphism
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's scale
- **Components**: Reusable, accessible components
- **Animations**: Smooth transitions and hover effects

## 🧪 Development Approach

This project was built following modern web development best practices:

- **Component-Based Architecture**: Modular, reusable components
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized images, code splitting, and efficient rendering
- **Accessibility**: Semantic HTML and ARIA attributes
- **Responsive Design**: Mobile-first approach

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Author

Built with ❤️ for learning web development

---

*Happy coding! 🧙‍♂️✨*

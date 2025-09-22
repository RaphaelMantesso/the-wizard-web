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

export default function NextJSLesson() {
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
            ▲ Next.js Essentials
          </h1>
          <p className="text-xl text-gray-200">
            Discover the power of Next.js for building full-stack React applications with ease.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">What is Next.js?</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Next.js is a React framework that provides everything you need to build production-ready 
              web applications. It offers features like server-side rendering, static site generation, 
              API routes, and automatic code splitting out of the box.
            </p>
            <div className="bg-gray-900/30 border-l-4 border-gray-400 p-4 rounded">
              <p className="text-gray-200 text-sm">
                💡 <strong>Fun Fact:</strong> This very website you're using is built with Next.js! 
                It demonstrates many of the features we'll cover in this lesson.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">App Router (Next.js 13+)</h2>
            <div className="space-y-6">
              <CodeExample
                title="File-based Routing"
                code={`app/
├── page.tsx                 // Route: /
├── about/
│   └── page.tsx            // Route: /about
├── blog/
│   ├── page.tsx            // Route: /blog
│   └── [slug]/
│       └── page.tsx        // Route: /blog/[slug]
└── dashboard/
    ├── layout.tsx          // Layout for /dashboard/*
    ├── page.tsx            // Route: /dashboard
    └── settings/
        └── page.tsx        // Route: /dashboard/settings`}
                explanation="Next.js uses file-based routing where the folder structure in the 'app' directory automatically creates routes. Dynamic routes use square brackets [param]."
              />

              <CodeExample
                title="Page Component"
                code={`// app/blog/[slug]/page.tsx
interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function BlogPost({ params, searchParams }: PageProps) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>Search params: {JSON.stringify(searchParams)}</p>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  return {
    title: \`Blog Post: \${params.slug}\`,
    description: \`Read our blog post about \${params.slug}\`,
  };
}`}
                explanation="Page components receive params (route parameters) and searchParams (query string). You can also export generateMetadata for dynamic SEO optimization."
              />

              <CodeExample
                title="Layouts"
                code={`// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <nav className="sidebar">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
      <main className="content">
        {children}
      </main>
    </div>
  );
}

// This layout wraps all pages in /dashboard/*`}
                explanation="Layouts wrap pages and persist across route changes. They're perfect for navigation, sidebars, and shared UI elements. Layouts can be nested."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Data Fetching</h2>
            <div className="space-y-6">
              <CodeExample
                title="Server Components (Default)"
                code={`// app/posts/page.tsx - Server Component
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    cache: 'force-cache', // Static generation
    // cache: 'no-store',  // Server-side rendering
    // next: { revalidate: 60 } // Incremental Static Regeneration
  });
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}`}
                explanation="Server Components run on the server and can directly fetch data. They're great for SEO and initial page load performance. Use different cache strategies for different needs."
              />

              <CodeExample
                title="Client Components"
                code={`'use client'; // This directive makes it a Client Component

import { useState, useEffect } from 'react';

export default function InteractivePost() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments on client side
    fetchComments().then(setComments);
  }, []);

  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>
        ❤️ {likes} likes
      </button>
      <CommentSection comments={comments} />
    </div>
  );
}`}
                explanation="Client Components run in the browser and can use hooks, event handlers, and browser APIs. Use 'use client' directive at the top of the file."
              />

              <CodeExample
                title="API Routes"
                code={`// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page') || '1';
  
  // Fetch posts from database
  const posts = await fetchPostsFromDB(parseInt(page));
  
  return NextResponse.json({ posts });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // Create new post
  const newPost = await createPost(body);
  
  return NextResponse.json({ post: newPost }, { status: 201 });
}

// Usage: GET /api/posts?page=2`}
                explanation="API routes let you create backend endpoints. Export HTTP methods as functions. They run on the server and can access databases, external APIs, etc."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Performance Features</h2>
            <div className="space-y-6">
              <CodeExample
                title="Image Optimization"
                code={`import Image from 'next/image';

export default function Gallery() {
  return (
    <div>
      {/* Optimized image with automatic sizing */}
      <Image
        src="/hero-image.jpg"
        alt="Hero image"
        width={800}
        height={400}
        priority // Load immediately for above-the-fold images
      />
      
      {/* Responsive image that fills container */}
      <div className="relative w-full h-64">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}`}
                explanation="Next.js Image component automatically optimizes images, provides lazy loading, and serves modern formats like WebP when supported."
              />

              <CodeExample
                title="Font Optimization"
                code={`// app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${inter.className} \${robotoMono.variable}\`}>
      <body>{children}</body>
    </html>
  );
}`}
                explanation="Next.js automatically optimizes Google Fonts and other web fonts, eliminating layout shift and improving performance."
              />

              <CodeExample
                title="Dynamic Imports"
                code={`import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load heavy components
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false, // Don't render on server
});

// Code splitting with Suspense
const LazyModal = dynamic(() => import('./Modal'));

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart />
      
      <Suspense fallback={<div>Loading...</div>}>
        <LazyModal />
      </Suspense>
    </div>
  );
}`}
                explanation="Dynamic imports enable code splitting, loading components only when needed. This reduces initial bundle size and improves performance."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Deployment & Production</h2>
            <div className="space-y-6">
              <CodeExample
                title="Environment Variables"
                code={`// .env.local
DATABASE_URL=postgresql://localhost:5432/mydb
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your-secret-key

// Using in your app
export default function ApiExample() {
  // Client-side (must start with NEXT_PUBLIC_)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  return <div>API URL: {apiUrl}</div>;
}

// In API routes or Server Components
export async function GET() {
  const dbUrl = process.env.DATABASE_URL; // Server-only
  const secretKey = process.env.SECRET_KEY; // Server-only
  
  // Use these securely on the server
}`}
                explanation="Environment variables starting with NEXT_PUBLIC_ are available in the browser. Others are server-only for security. Use .env.local for local development."
              />

              <CodeExample
                title="Build Configuration"
                code={`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features
  experimental: {
    appDir: true,
  },
  
  // Image domains for external images
  images: {
    domains: ['example.com', 'cdn.example.com'],
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
  
  // Custom webpack config
  webpack: (config) => {
    // Custom webpack modifications
    return config;
  },
};

module.exports = nextConfig;`}
                explanation="next.config.js lets you customize Next.js behavior, configure redirects, modify webpack, and enable experimental features."
              />
            </div>
          </section>

          <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Next.js Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-2">✅ Do</h3>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• Use Server Components by default</li>
                  <li>• Optimize images with next/image</li>
                  <li>• Implement proper error boundaries</li>
                  <li>• Use TypeScript for better DX</li>
                  <li>• Leverage static generation when possible</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">❌ Avoid</h3>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• Using 'use client' unnecessarily</li>
                  <li>• Fetching data in useEffect when possible on server</li>
                  <li>• Large bundle sizes without code splitting</li>
                  <li>• Ignoring Core Web Vitals</li>
                  <li>• Not optimizing for SEO</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              href="/learn/animations"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-block"
            >
              Next: Web Animations ✨
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

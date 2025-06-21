"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

// Mock Category Data (DB-style)
const categories = [
  {
    id: "all",
    label: "All",
    heading: "Insightful && helpful content curated for you.",
  },
  {
    id: "programming",
    label: "Programming",
    heading: "Deep dive into the world of code and software engineering.",
  },
  {
    id: "react",
    label: "React",
    heading:
      "Build interactive UIs faster with React insights and best practices.",
  },
  {
    id: "javascript",
    label: "JavaScript",
    heading: "All things JavaScript – from fundamentals to advanced patterns.",
  },
  {
    id: "tailwind",
    label: "Tailwind",
    heading: "Explore Tailwind CSS tips, tricks, and design workflows.",
  },
];

// Mock Blog Data (DB-style)
const blogData = [
  {
    id: 1,
    title: "The Only Next.js Favicon Guide You'll Need (Updated 2025)",
    slug: "the-only-nextjs-favicon-guide-youll-need",
    description:
      "Learn how to properly add a Favicon to your Next.js application. No nonsense. No fluff.",
    date: "2025-06-11",
    reads: 1463,
    categoryId: "react",
  },
  {
    id: 2,
    title: "Why You Should Learn Tailwind in 2025",
    slug: "why-you-should-learn-tailwind",
    description:
      "Tailwind is more than just a utility-first framework. Here's why it matters.",
    date: "2025-05-20",
    reads: 981,
    categoryId: "tailwind",
  },
  {
    id: 3,
    title: "Understanding JavaScript Closures Once and For All",
    slug: "understanding-javascript-closures",
    description: "Closures explained with real-world examples and zero jargon.",
    date: "2025-04-15",
    reads: 1211,
    categoryId: "javascript",
  },
];

export default function BlogPage() {
  const searchParams = useSearchParams();
  const currentCategoryId = searchParams.get("category") || "all";

  // Get current category object
  const currentCategory =
    categories.find((c) => c.id === currentCategoryId) || categories[0]; // fallback to "all"

  // Filter blogs
  const filteredBlogs = useMemo(() => {
    if (currentCategoryId === "all") return blogData;
    return blogData.filter((blog) => blog.categoryId === currentCategoryId);
  }, [currentCategoryId]);

  return (
    <section className="container mt-14 mb-10 relative flex flex-col gap-10">
      {/* Heading Section */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-primary md:text-6xl md:leading-[64px]">
          {currentCategory.heading}
        </h1>
      </div>

      {/* Category Section */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Categories</h3>
        <div className="hidden lg:block">
          <nav className="-mb-px flex flex-wrap gap-4">
            {categories.map((category) => {
              const href =
                category.id === "all"
                  ? "/blog"
                  : `/blog?category=${category.id}`;

              return (
                <Link
                  key={category.id}
                  href={href}
                  className={`whitespace-nowrap border-b-2 pb-4 text-sm uppercase transition-colors ${
                    currentCategoryId === category.id
                      ? "border-slate-300 text-primary"
                      : "border-transparent text-secondary hover:border-slate-300 hover:text-primary"
                  }`}
                >
                  {category.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Blog List */}
        <ul className="flex flex-col">
          {filteredBlogs.map((blog) => (
            <li key={blog.id}>
              <div className="block">
                <article>
                  <div className="group grid h-full grid-cols-1 md:grid-cols-12">
                    <div className="hidden space-y-2 p-4 md:col-span-3 md:col-start-1 md:block lg:col-span-2">
                      <div className="font-mono text-sm leading-none text-secondary">
                        <time dateTime={blog.date}>
                          {new Date(blog.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <span className="text-secondary">
                        <span className="font-mono text-xs text-secondary">
                          {blog.reads} reads
                        </span>
                      </span>
                    </div>
                    <div className="col-start-4 hidden h-full border-x border-border-primary md:block md:border-dashed"></div>
                    <div className="group col-span-8 flex w-full flex-grow flex-col py-4 md:col-start-5 md:col-end-12 md:p-4">
                      <div className="z-10 text-balance">
                        <h2 className="mb-3 text-base font-medium leading-6 tracking-tight text-primary md:leading-none">
                          {blog.title}
                        </h2>
                        <p className="mb-3 flex-grow text-base leading-6 text-secondary">
                          {blog.description}
                        </p>
                        <Link
                          className="flex items-center text-sm font-medium text-indigo-600"
                          href={`/blog/${blog.slug}`}
                        >
                          <span className="text-sm leading-6">Read More</span>
                          <svg
                            className="relative ml-2.5 mt-px overflow-visible"
                            width="3"
                            height="6"
                            viewBox="0 0 3 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M0 0L3 3L0 6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="-mx-4 h-0 w-svw border-t border-dashed md:m-0 md:w-full"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

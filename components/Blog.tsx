"use client";

import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    slug: "the-only-nextjs-favicon-guide-youll-need",
    title: "The Only Next.js Favicon Guide You'll Need (Updated 2025)",
    excerpt:
      "Learn how to properly add a Favicon to your Next.js application. No nonsense. No fluff.",
    image: "/blog/blog1.jpg",
    hidden: false,
  },
  {
    slug: "introducing-blogfolio-v5",
    title: "Introducing Blogfolio v5",
    excerpt:
      "I've been working hard on my website, and I'm pumped to show you what I've been up to this year. From new features to some behind-the-scenes tech magic, there's a lot to unpack in this 2024 update.",
    image: "/blog/blog2.jpg",
    hidden: false,
  },
  {
    slug: "my-evolved-blogfolio-in-2023",
    title: "My Evolved Blogfolio in 2023",
    excerpt:
      "The Tailwind Labs team has developed and released an official plugin that adds autocomplete to your VSCode environment, and it only takes a few clicks to enable!",
    image: "/blog/blog3.jpeg",
    hidden: false,
  },
  {
    slug: "checking-if-the-url-contains-a-given-string-in-angular-a-comparison-of-three-approaches",
    title:
      "Checking if the URL Contains a Given String in Angular: A Comparison of Three Approaches",
    excerpt:
      "This article discusses three different approaches for checking if a URL contains a given string in Angular, including using the Location service, the JavaScript includes() method, and regular expressions.",
    image: "/blog/blog3.jpeg",
    hidden: true, // md:block lg:hidden
  },
];

export default function Blog() {
  return (
    <ul className="container z-50 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, index) => (
        <li
          key={index}
          className={`z-50 flex h-full flex-col rounded-3xl border border-border-primary bg-bg-primary p-2 ${
            post.hidden ? "hidden md:block lg:hidden" : ""
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="flex h-full flex-col rounded-2xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="h-[280px] w-full rounded-2xl object-cover md:h-[225px]"
            />
            <div className="my-4 flex w-full flex-grow flex-col space-y-4 text-balance px-4">
              <h2 className="text-lg font-medium leading-7 tracking-tight text-primary">
                {post.title}
              </h2>
              <p className="flex-grow leading-7 text-secondary">
                {post.excerpt}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

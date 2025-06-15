import About from "@/components/About";
import About1 from "@/components/About1";
import ENavbar from "@/components/ENavbar";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Services from "@/components/Services";
import { Spotlight } from "@/components/ui/spotlight";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import SkillsScroll from "@/components/SkillsScroll";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Subscribe from "@/components/Subscribe";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog-posts";

export default function Home() {
  // Get the featured post
  const featuredPost = blogPosts.find((post) => post.featured);

  // Get the rest of the posts (excluding the featured one)
  const recentPosts = blogPosts
    .filter((post) => post.id !== featuredPost?.id)
    .slice(0, 5);
  return (
    <>
      <ENavbar />
      <Spotlight
        className="h-[40rem] -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />{" "}
      <div className="dark:bg-grid-white/[0.01] bg-grid-black/[0.04]">
        {" "}
        <Hero />
      </div>
      <Projects />
      <About1 />
      <SkillsScroll />
      <Experience />
      {/* Recent Posts */}
      <section className="my-32 container">
        <div className="mb-20 space-y-4 text-center text-primary">
          <h1>Blog Posts</h1>
          <h5 className="tracking-wider text-fs-xl">
            A collection of blogs I&apos;ve built.
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <Link
          href="/blog"
          className="flex items-center justify-center text-2xl my-10 text-secondary hover:text-red/80 transition-colors"
        >
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>
      <Contact />
      {/* <Subscribe /> */}
      {/* <ShootingStars />
      <StarsBackground /> */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Partner /> */}
    </>
  );
}

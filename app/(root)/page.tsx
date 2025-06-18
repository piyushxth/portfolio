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
import Blog from "@/components/BlogCard";

export default function Home() {
  // Get the featured post
  const featuredPost = blogPosts.find((post) => post.featured);

  // Get the rest of the posts (excluding the featured one)
  const recentPosts = blogPosts
    .filter((post) => post.id !== featuredPost?.id)
    .slice(0, 5);
  return (
    <>
      <Spotlight
        className="h-[40rem] -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />{" "}
      <div className="dark:bg-grid-white/[0.01] bg-grid-black/[0.04]">
        <ENavbar />

        <Hero />
      </div>
      {/* <About1 /> */}
      <Projects />
      <SkillsScroll />
      <Experience />
      {/* Recent Posts */}
      <BlogCard />
      {/* <Contact /> */}
      <Subscribe />
      {/* <ShootingStars />
      <StarsBackground /> */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Partner /> */}
    </>
  );
}

import About from "@/components/About";
import About1 from "@/components/About1";
import DNavbar from "@/components/DNavbar";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Services from "@/components/Services";
import { Spotlight } from "@/components/ui/spotlight";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import SkillsScroll from "@/components/SkillsScroll";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Spotlight
        className="h-[40rem] -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />{" "}
      <div className="dark:bg-grid-white/[0.01] bg-grid-black/[0.04]">
        {" "}
        <DNavbar />
        <Hero />
      </div>
      <About1 />
      <SkillsScroll />
      <Projects />
      <Experience />
      {/* <ShootingStars />
      <StarsBackground /> */}
      <About />
      {/* <Services /> */}
      {/* <Partner /> */}
    </>
  );
}

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Certificates } from "@/components/Certificates";
import { Statistics } from "@/components/Statistics";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Statistics />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
    </>
  );
}

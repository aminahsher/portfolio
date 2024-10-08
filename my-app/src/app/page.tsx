import Hero from "@/components/Hero";
import Image from "next/image";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ContactMe from "@/components/Contact";

export default function Home() {
  return (
    <main>
<Hero/>
<Projects/>
<About/>
<Skills/>
<ContactMe/>
    </main>
  );
}

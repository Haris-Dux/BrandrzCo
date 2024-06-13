import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import OurClients from "@/components/OurClients";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="">
      <section id="home"><HeroSection /></section>
      <section id="service"><Services /></section>
      <section id="about"><AboutUs /></section>
      <section id="projects"><Projects /></section>
      <section id="team"><Team /></section>
      <section id="clients"><OurClients /></section>
    </main>

  );
}

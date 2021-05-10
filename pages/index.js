import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Navbar from "../components/Navbar";
import ServiceSection from "../components/ServiceSection";
import ProjectSection from "../components/ProjectSection";
import ReviewSection from "../components/ReviewSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rembux Softwarehouse</title>
        <meta name="description" content="Rembux softwarehouse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ReviewSection />
    </div>
  );
}

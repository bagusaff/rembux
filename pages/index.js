import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Navbar from "../components/Navbar";
import ServiceSection from "../components/ServiceSection";

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
    </div>
  );
}

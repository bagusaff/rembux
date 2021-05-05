import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Navbar from "../components/Navbar";

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
    </div>
  );
}

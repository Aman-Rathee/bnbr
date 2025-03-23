import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { MorphoGrid } from "@/components/morphoGrid ";


export default function Home() {
  return (
    <>
      <Navbar />
      <MorphoGrid />
      <Hero />
      <Footer />
    </>
  );
}

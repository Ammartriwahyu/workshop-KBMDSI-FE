import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import WhyLearn from "@/components/WhyLearn";
import CourseCatalog from "@/components/CourseCatalog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Companies />
        <WhyLearn />
        <CourseCatalog />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

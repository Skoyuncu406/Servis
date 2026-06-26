import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import WhyEzgiTur from "@/components/WhyEzgiTur";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#161616]">
      <Header />
      <FloatingActions />
      <Hero />
      <About />
      <Services />
      <WhyEzgiTur />
      <Quote />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

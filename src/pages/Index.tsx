
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import AboutSection from "@/components/AboutSection";
import DonationForm from "@/components/DonationForm";
import DonorList from "@/components/DonorList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Impact />
        <AboutSection />
        <DonationForm />
        <DonorList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

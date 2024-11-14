import ContactSection from "@/components/ContactSection";
import ERPSection from "@/components/ErpSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ERPIndustries from "@/components/Industries";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-white">
    <Hero />
    <ERPSection />
    <Features />
    <ERPIndustries />
 
    <ContactSection />
   </div>
  );
}

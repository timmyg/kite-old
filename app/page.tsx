// import Link from "next/link";
// import ButtonSignin from "@/components/ButtonSignin";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
// import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
// import FeaturesListicle from "@/components/FeaturesListicle";
import Testimonials3 from "@/components/Testimonials3";
import { getSiteConfig } from "@/libs/util/server/url";
// import ButtonSignin from "@/components/ButtonSignin";
// import Link from "next/link";

export default function Home() {
  const siteConfig = getSiteConfig();
  return (
    <>
      <Header config={siteConfig} />
      <main>
        <Hero />
        <Problem />
        {/* <FeaturesAccordion /> */}
        {/* <FeaturesListicle /> */}
        <Pricing />
        <Testimonials3 />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

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
import { getAppConfig } from "@/libs/util/server/url";
// import ButtonSignin from "@/components/ButtonSignin";
// import Link from "next/link";

export default function Home() {
  const appConfig = getAppConfig();
  return (
    <>
      <Header config={appConfig} />
      <main>
        <Hero config={appConfig} />
        <Problem config={appConfig} />
        <Pricing config={appConfig} />
        <Testimonials3 config={appConfig} />
        <FAQ config={appConfig} />
        <CTA config={appConfig} />
      </main>
      <Footer config={appConfig} />
    </>
  );
}

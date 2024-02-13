import Image from "next/image";
// import TestimonialsAvatars from "./TestimonialsAvatars";
// import config from "@/config";
import ButtonLead from "./ButtonLead";
import { AppConfig } from "@/libs/util/server/url";

const Hero = ({ config }: { config: AppConfig }) => {
  return (
    <section
      className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20"
      id="hero"
    >
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        {config.hero.header}
        <p className="text-lg opacity-80 leading-relaxed">
          {config.hero.description}
        </p>
        {/* <button className="btn btn-primary btn-wide">
          Get {config.appName}
        </button> */}
        <ButtonLead />

        {/* <TestimonialsAvatars priority={true} /> */}
      </div>
      <div className="lg:w-full rounded-lg overflow-hidden">
        <Image
          // src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          src="/landing/dude-with-computer.png"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;

import { AppConfig } from "@/config/config.apps";
import Image from "next/image";
import Link from "next/link";

export interface CTA {
  header: string;
  description: string;
  buttonText: string;
}

const CallToAction = ({ config }: { config: AppConfig }) => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="/backgrounds/stars.jpg"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            {config.cta.header}
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            {config.cta.description}
          </p>

          <Link className="btn btn-primary btn-wide" href="/#hero">
            {config.cta.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

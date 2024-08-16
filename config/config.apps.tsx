import { CTA } from "@/components/CTA";
import { FAQItemProps } from "@/components/FAQ";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";
export type Theme =
  | "light"
  | "dark"
  | "cupcake"
  | "bumblebee"
  | "emerald"
  | "corporate"
  | "synthwave"
  | "retro"
  | "cyberpunk"
  | "valentine"
  | "halloween"
  | "garden"
  | "forest"
  | "aqua"
  | "lofi"
  | "pastel"
  | "fantasy"
  | "wireframe"
  | "black"
  | "luxury"
  | "dracula"
  | "";

export interface Testimonial {
  username?: string;
  name: string;
  text: string;
  img?: string | StaticImageData;
}
export interface AppConfig {
  id: string;
  domainName: string;
  name: string;
  title?: string;
  description: string;
  hero: {
    header: ReactElement;
    description: string;
  };
  oldWay?: {
    // Changed to inline interface
    header: string;
    description: string;
    steps: {
      icon: string;
      text: string;
    }[];
  };
  crisp?: {
    id: string;
    onlyShowOnRoutes: string[];
  };
  colors?: {
    main?: any;
    theme?: Theme;
  };
  auth?: {
    loginUrl: string;
    callbackUrl: string;
  };
  stripe?: {
    header: string;
    description: string;
    plans: {
      priceId: string;
      name: string;
      description: string;
      price: number;
      priceAnchor?: number;
      isFeatured: boolean;
      features: { name: string }[];
    }[];
  };
  testimonials?: {
    items: Testimonial[];
    header: string;
    description: string;
  };
  faq?: FAQItemProps[];
  cta?: CTA;
}

export const sites: AppConfig[] = [
  {
    name: "Podletter",
    description: "Listen to your email newsletters in your podcast feed",
    id: "podletter",
    domainName: "podletter.xyz",
    hero: {
      header: (
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Never have an{" "}
          <span className="bg-neutral text-neutral-content px-2 md:px-2 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            unread newsletter
          </span>{" "}
          again
        </h1>
      ),
      description: "Listen to your email newsletters in your podcast feed",
    },
    colors: {
      // main: any;
      theme: "cupcake",
    },
  },
  {
    name: "Kite",
    title: "Validate your startup idea in a week",
    description: "Validate your startup idea in a week | Kite",
    id: "kite",
    domainName: "kite.wtf",
    hero: {
      header: (
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Validate your startup idea in{" "}
          <span className="bg-neutral text-neutral-content px-2 md:px-2 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            one week
          </span>
        </h1>
      ),
      description:
        "Share your vision, and we'll test it by posting on Reddit and running ad campaigns to gather real feedback",
    },
    oldWay: {
      header: "99% of innovative ideas fail due to inaction",
      description: "Navigating the uncertainty of new markets is daunting",
      steps: [
        {
          icon: "💡",
          text: "Come up with a unique and innovative idea",
        },
        {
          icon: "🤔",
          text: "Struggle to validate assumptions",
        },
        {
          icon: "🤷‍♂️",
          text: "Fail to find a clear path forward, leading to inaction",
        },
      ],
    },
    stripe: {
      // Added pricing configuration
      header: "Validate Your Idea with a Single Payment",
      description:
        "Get all the insights, research, and validation you need to move forward with confidence. One straightforward payment, no ongoing fees.",
      plans: [
        {
          priceId: "price_1Hh1XYZ123456789", // Example price ID
          name: "Basic Plan",
          description: "Access to basic features",
          price: 249,
          priceAnchor: 299,
          isFeatured: false,
          features: [
            { name: "Reddit Post in Targeted Subreddit(s)" },
            { name: "7 Days of Google Ads" },
            { name: "Customized Market Research Report" },
          ],
        },
        {
          priceId: "price_1Hh1XYZ987654321", // Example price ID
          name: "Pro Plan",
          description: "Access to all features",
          price: 399,
          priceAnchor: 599,
          isFeatured: true,
          features: [
            { name: "All Basic Plan Features" },
            { name: "Instagram, Facebook, and X (formerly Twitter) Ads" },
            { name: "Custom Audience Segmentation" },
            { name: "Market-Specific Outreach Campaign" },
          ],
        },
      ],
    },
    testimonials: {
      header: "Entrepreneurs are raving about Kite",
      description:
        "Don't take our word for it. Here's what they have to say about it.",
      items: [
        {
          name: "Charles Turner",
          text: "Kite has been instrumental in validating my startup idea. The insights I received helped me avoid potential pitfalls that I hadn't even considered. It's a must-have for any entrepreneur!",
          img: "/testimonials/charles.jpg",
        },
        {
          name: "Jessica Harris",
          text: "The process Kite offers is incredibly thorough and efficient. In just a week, I had a clear understanding of the market potential for my idea. It saved me so much time and uncertainty.",
          img: "/testimonials/jessica.jpg",
        },
        {
          name: "Matthew Bennett",
          text: "Kite gave me the confidence to move forward with my startup. The detailed feedback and market analysis were exactly what I needed to take the next step. Highly recommended!",
          img: "/testimonials/matthew.jpg",
        },
      ],
    },
    faq: [
      {
        question: "What exactly does Kite do?",
        answer:
          "Kite provides a comprehensive, one-week validation process for your startup idea. You'll receive detailed insights, market analysis, and customized strategies to help you understand the potential and risks of your idea before investing time and money.",
      },
      {
        question: "How does the validation process work?",
        answer:
          "We combine data-driven research, market trends, and targeted outreach (including ads and social posts) to evaluate the viability of your idea. You'll receive a report outlining key findings and actionable next steps.",
      },
      {
        question: "What do I receive at the end of the validation?",
        answer:
          "You'll get a detailed report that includes market analysis, audience feedback, potential challenges, and recommendations on how to proceed. It's a roadmap to help you make informed decisions about your startup idea.",
      },
      {
        question:
          "Can I customize the validation process for my specific market?",
        answer:
          "Absolutely! Our Pro Plan includes custom audience segmentation and market-specific outreach. We tailor our approach to ensure that your idea is evaluated in the most relevant context.",
      },
      {
        question: "What if my idea isn’t validated successfully?",
        answer:
          "If the validation shows potential risks or challenges, you'll still receive a comprehensive report detailing these issues. This information can be invaluable in refining your idea or pivoting to a more promising direction.",
      },
      {
        question: "I have another question",
        answer:
          "Feel free to reach out to us via the contact form or the chat widget in the bottom right corner of the page. We're here to help!",
      },
    ],
    cta: {
      header: "",
      description: "",
      buttonText: "Get Kite",
    },
  },
];

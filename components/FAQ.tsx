"use client";

import { AppConfig } from "@/libs/util/server/url";
import Link from "next/link";
import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What do I get exactly?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You&apos;ll get a private podcast link to use in your favorite podcast
        player to start getting podletters (podcasts as newsletters, for the
        layperson)
      </div>
    ),
  },
  {
    question: "Does this work with my existing podcast player?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Most likely! We&apos;ve tested it with most major podcast players and
        the only major one it doesn&apos;t work with is Spotify as they
        don&apos;t allow private podcast feeds to be added. See more{" "}
        <Link
          target="_blank"
          href="https://support.patreon.com/hc/en-us/articles/115005429546-Which-podcast-apps-will-my-custom-audio-RSS-link-work-with-"
        >
          here
        </Link>
        .
      </div>
    ),
  },
  {
    question: "What does the audio sound like?",
    answer: (
      <p>
        We use a text-to-speech engine to read the newsletters and are
        constantly improving it. You can see a sample feed{" "}
        <Link
          className="underline"
          href="https://rss.app/feed/nsxBadk9idiftngQ"
          target="_blank"
        >
          here
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Can I get a refund?",
    answer: (
      <p>
        We give a seven-day free trial so you can test it out. After than, you
        can cancel your subscription at any time.
      </p>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Contact us via the widget in the bottom right corner
      </div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = ({ config }: { config: AppConfig }) => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;

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

export interface AppConfig {
  id: string;
  domainName: string;
  name: string;
  description: string;
  hero: {
    header: ReactElement;
    description: string;
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
}

export const sites: AppConfig[] = [
  {
    name: "Podletter",
    description: "Listen to your email newsletters in your podcast feed",
    id: "podletter",
    domainName: "podletter",
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
    description: "Let us validate your startup idea in one week",
    id: "kite",
    domainName: "kite",
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
        "Answer a few questions and we'll strategically validate whether your startup idea is worth pursuing",
    },
  },
];

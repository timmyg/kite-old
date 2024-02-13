import { sites } from "@/types/config.sites";
import { headers } from "next/headers";

export interface SiteConfig {
  domainName: string;
  appName: string;
  hero: {
    description: string;
  };
}

export const getSiteConfig = (): SiteConfig => {
  const headersList = headers();
  const host = headersList.get("host");
  console.log({ host });
  // http://kite.localhost:3334 or https://www.kite.wtf => kite
  const domainName: string | null = host
    ?.replace(/^(?:https?:\/\/)?(?:www\.)?/, "")
    ?.split(":")?.[0]
    ?.split(".")?.[0];
  const site = sites.find((site) => site.domainName === domainName);
  if (!site) {
    throw new Error(`Site not found: ${{ domainName, host }}`);
  }
  return site;
};

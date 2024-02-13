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
  const domainName: string | null = host?.split(":")?.[0]?.split(".")?.[0];
  const site = sites.find((site) => site.domainName === domainName);
  if (!site) {
    throw new Error(`Site not found: ${{ domainName, host }}`);
  }
  return site;
};

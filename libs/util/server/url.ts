import { AppConfig, sites } from "@/config/config.apps";
import { platformConfig } from "@/config/config.platform";
import { headers } from "next/headers";

export const getAppConfig = (): AppConfig => {
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
  return { ...platformConfig, ...site };
};

import { ReactNode } from "react";
import { getSEOTags } from "@/libs/seo";
// import { getAppConfig } from "@/libs/util/server/url";

export const metadata = getSEOTags({
  // title: `Login to ${getAppConfig().name}`,
  canonicalUrlRelative: "/auth/login",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

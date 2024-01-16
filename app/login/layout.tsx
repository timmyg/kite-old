import { ReactNode } from "react";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `Login to ${config.appName}`,
  canonicalUrlRelative: "/auth/login",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

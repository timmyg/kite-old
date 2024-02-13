import { ReactNode, Suspense } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { Viewport } from "next";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import "./globals.css";
import { PHProvider } from "./providers";

import dynamic from "next/dynamic";
import { getAppConfig } from "@/libs/util/server/url";

const PostHogPageview = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

const font = Bricolage_Grotesque({ subsets: ["latin"] });

const config = getAppConfig();

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
  const config = getAppConfig();
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
        </head>
      )}
      <Suspense>
        <PHProvider>
          <body>
            <PostHogPageview />
            {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
            <ClientLayout config={config}>{children}</ClientLayout>
          </body>
        </PHProvider>
      </Suspense>
    </html>
  );
}

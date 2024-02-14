import { AppConfig } from "@/config/config.apps";
import type { Metadata } from "next";
// import { getAppConfig } from "./util/server/url";

// These are all the SEO tags you can add to your pages.
// It prefills data with default title/description/OG, etc.. and you can cusotmize it for each page.
// It's already added in the root layout.js so you don't have to add it to every pages
// But I recommend to set the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)
// See https://shipfa.st/docs/features/seo
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
  config,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, any>;
  config?: AppConfig;
} = {}): Metadata => {
  // console.log("SEO");
  return {
    // up to 50 characters (what does your app do for the user?) > your main should be here
    title: title || config?.name,
    // up to 160 characters (how does your app help the user?)
    description: description || config?.description,
    // some keywords separated by commas. by default it will be your app name
    keywords: keywords || [config?.name],
    applicationName: config?.name,
    // icons: {
    //   icon: `/sites/${config?.id}/logo.png`,
    // },
    icons: {
      icon: [
        {
          // media: "(prefers-color-scheme: dark)",
          url: `/sites/${config?.id}/logo.png`,
          href: `/sites/${config?.id}/logo.png`,
        },
        // {
        //   media: '(prefers-color-scheme: dark)',
        //   url: '/images/icon.png',
        //   href: '/images/icon-dark.png',
        // },
      ],
    },
    // set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png')
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3334/"
        : `https://${config?.domainName}/`
    ),

    openGraph: {
      title: openGraph?.title || config?.name,
      description: openGraph?.description || config?.description,
      url: openGraph?.url || `https://${config?.domainName}/`,
      siteName: (openGraph?.title || config?.name) as string,
      // If you add an opengraph-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [
      //   {
      //     url: `https://${config.domainName}/share.png`,
      //     width: 1200,
      //     height: 660,
      //   },
      // ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || config?.name,
      description: openGraph?.description || config?.description,
      // If you add an twitter-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [openGraph?.image || defaults.og.image],
      card: "summary_large_image",
      creator: "@marc_louvion",
    },

    // If a canonical URL is given, we add it. The metadataBase will turn the relative URL into a fully qualified URL
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    // If you want to add extra tags, you can pass them here
    ...extraTags,
  };
};

// Strctured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// Use this tool to check data is well structure: https://search.google.com/test/rich-results
// You don't have to use this component, but it increase your chances of having a rich snippet on Google.
// I recommend this one below to your /page.js for software apps: It tells Google your AppName is a Software, and it has a rating of 4.8/5 from 12 reviews.
// Fill the fields with your own data
// See https://shipfa.st/docs/features/seo
export const renderSchemaTags = () => {
  // const config = getAppConfig();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "SoftwareApplication",
          // name: config.name,
          // description: config.description,
          // image: `https://${config.domainName}/icon.png`,
          // url: `https://${config.domainName}/`,
          author: {
            "@type": "Person",
            name: "Marc Lou",
          },
          datePublished: "2023-08-01",
          applicationCategory: "EducationalApplication",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "12",
          },
          offers: [
            {
              "@type": "Offer",
              price: "9.00",
              priceCurrency: "USD",
            },
          ],
        }),
      }}
    ></script>
  );
};

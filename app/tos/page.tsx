import Link from "next/link";
// import { getSEOTags } from "@/libs/seo";
// import { getAppConfig } from "@/libs/util/server/url";
// import config from "@/config/config.platform";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

// export const metadata = getSEOTags({
//   title: `Terms and Conditions | ${getAppConfig().name}`,
//   canonicalUrlRelative: "/tos",
// });

const TOS = () => {
  // const config = getAppConfig();
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          {/* Terms and Conditions for {getAppConfig().name} */}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`**Terms of Service for Podletter**

**Effective Date: January 15, 2024**

**1. Introduction**

Welcome to Podletter (https://podletter.xyz). These Terms of Service ("Terms") govern your use of our service that converts newsletters into a podcast feed. By accessing or using our service, you agree to be bound by these Terms.

**2. Service Description**

Podletter offers a service that converts newsletters into a podcast feed. We offer a free trial, followed by a monthly subscription plan which can be cancelled at any time. Access continues until the end of the billing period.

**3. User Account**

To use Podletter, you must register and provide certain information including your name, email, and payment information. You are responsible for maintaining the confidentiality of your account and password.

**4. User Data**

We collect personal data such as your name, email, and payment information. For details on how we handle this data, please refer to our Privacy Policy at https://podletter.com/privacy-policy.

**5. Non-Personal Data Collection**

We use cookies to collect non-personal data to enhance user experience. By using our service, you consent to the use of cookies.

**6. Subscription and Cancellation**

You may subscribe to our service on a monthly basis. Subscriptions can be cancelled at any time, and access will continue until the end of the current billing period.

**7. Governing Law**

These Terms shall be governed by and construed in accordance with the laws of the United States.

**8. Changes to Terms**

We reserve the right to modify these Terms at any time. Users will be notified of any changes via email. Continued use of the service after changes constitutes acceptance of the new Terms.

**9. Contact Us**

For any questions or concerns regarding these Terms, please contact us at t@podletter.xyz.

`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;

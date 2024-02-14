import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
// import { getAppConfig } from "@/libs/util/server/url";
// import config from "@/config/config.platform";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          {/* Privacy Policy for {getAppConfig().name} */}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`**Privacy Policy for Podletter**

**Effective Date: January 15, 2024**

**1. Introduction**

This Privacy Policy applies to Podletter (https://podletter.xyz), a service that converts newsletters into a podcast feed. This policy describes how we collect, use, and share your personal information.

**2. Information Collection**

When you use Podletter, we collect the following information:
- Personal Data: This includes your name, email address, and payment information necessary for the use of our service.
- Non-Personal Data: We use cookies to collect information that does not personally identify you, such as browsing behavior on our website.

**3. Use of Information**

The information we collect is used to:
- Provide and improve our service.
- Process payments and manage user accounts.
- Communicate with users about service updates or changes.
- Enhance user experience and website functionality.

**4. Sharing of Information**

We do not sell or rent personal information to third parties. Information may be shared with third-party service providers to perform functions on our behalf, such as payment processing.

**5. Data Security**

We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.

**6. Cookies**

We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of our service.

**7. Changes to Privacy Policy**

We reserve the right to modify this Privacy Policy at any time. Users will be notified of any changes via email. Continued use of the service after changes constitutes acceptance of the new policy.

**8. Governing Law**

This Privacy Policy shall be governed by and construed in accordance with the laws of the United States.

**9. Contact Us**

For any questions or concerns regarding this Privacy Policy, please contact us at t@podletter.xyz.
`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

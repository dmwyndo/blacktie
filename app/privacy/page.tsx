import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for the ${site.name} website and related services.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="legal-revised">
        <strong>Revised: June 1, 2026</strong>
      </p>

      <p>
        Your information privacy is important to us. We provide this Privacy
        Policy to explain how we collect, use, protect, and disclose information
        and data when you use the website on which this policy is posted
        (&ldquo;<strong>Site</strong>&rdquo;) and related services offered
        through the Site (&ldquo;<strong>Services</strong>&rdquo;). This Privacy
        Policy applies to all users of the Site and Services.
      </p>
      <p>
        This Privacy Policy is specific to this Site. Please see our Mobile
        Messaging Terms &amp; Conditions at the end of our{" "}
        <a href="/terms">Terms of Use</a>.
      </p>
      <p>
        <strong>
          BY USING THE SITE OR SERVICES, YOU ARE CONSENTING TO THIS PRIVACY
          POLICY. PLEASE READ IT CAREFULLY.
        </strong>
      </p>

      <section>
        <h2>1. Personal Information We Collect</h2>
        <p>We may collect the following categories and types of Personal Information:</p>
        <ul>
          <li>
            <strong>Contact Information:</strong> your first and last name,
            mailing address, email address, and phone number;
          </li>
          <li>
            <strong>Other identifying information:</strong> IP address, social
            media usernames, passwords and other security information for
            authentication and access;
          </li>
          <li>
            <strong>Financial Information:</strong> credit card, debit card and
            bank account information;
          </li>
          <li>
            <strong>Demographic information:</strong> gender, age, employment
            information and salary information;
          </li>
          <li>
            <strong>Geolocation data;</strong>
          </li>
          <li>
            <strong>Internet or other electronic activity:</strong> your
            browsing, search, and click history;
          </li>
          <li>
            <strong>Commercial information:</strong> products or services
            purchased or viewed on our Site;
          </li>
          <li>
            <strong>Audio and visual information:</strong> your videos and
            photos; and
          </li>
          <li>
            <strong>Inferences drawn from the categories described above</strong>{" "}
            in order to create a profile about you to reflect your preferences,
            characteristics, behavior and attitude.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Personal Information</h2>
        <p>We may use your Personal Information for the following categories of use:</p>
        <ul>
          <li>
            <strong>Transactional Purposes:</strong> to receive, process,
            confirm, send and track your order, subscription or registration,
            communicate with you about your request, and process any
            subscription or registration you make to one of our Services.
          </li>
          <li>
            <strong>Analytical Purposes:</strong> to analyze preferences, trends
            and statistics.
          </li>
          <li>
            <strong>Marketing and Promotional Purposes:</strong> to inform you of
            our new products, services and offers, provide targeted advertising,
            run contests and promotions, and provide personalized marketing
            communications.
          </li>
          <li>
            <strong>Maintenance and Improvement of the Site and Services:</strong>{" "}
            to provide you with the Site and Services, handle customer service
            requests, and help us diagnose technical and service problems.
          </li>
          <li>
            <strong>Review and content creation purposes:</strong> to enable
            reviews of our products and to display content that you have created
            and allowed us to display.
          </li>
          <li>
            <strong>Security and Fraud Prevention:</strong> to protect the Site
            and services, our company, and others and to prevent fraud, theft
            and misconduct.
          </li>
          <li>
            <strong>Legal and Other Requirements:</strong> to comply with legal
            requirements or when necessary to provide to our lawyers, accountants
            or other advisors.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Sources of Personal Information</h2>
        <p>We may collect Personal Information from the following sources:</p>
        <ul>
          <li>
            <strong>We collect information directly from you</strong>, such as
            when you fill out a form on our Site, sign up for communications from
            us, or ask us to contact you.
          </li>
          <li>
            <strong>We collect information from our Service Providers</strong>{" "}
            that collect certain Personal Information from or about you on our
            behalf, such as analytics software used to measure traffic to the
            Site.
          </li>
          <li>
            <strong>We collect information from other third-party sources</strong>,
            including information you make publicly available on social media
            platforms.
          </li>
          <li>
            <strong>We collect information from you passively</strong> using
            tools like browser cookies, as further described below.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Categories of Third Parties We Share Personal Information With</h2>
        <h3>Service Providers</h3>
        <p>
          From time to time, we may establish a business relationship with other
          businesses whom we believe trustworthy and who have confirmed that
          their privacy practices are consistent with ours
          (&ldquo;Service Providers&rdquo;). We only provide our Service
          Providers with the information necessary for them to perform these
          services on our behalf.
        </p>
        <h3>Our Affiliates</h3>
        <p>
          We may share Personal Information with businesses controlling,
          controlled by, or under common control with us, where such affiliates
          or subsidiaries are acting as our Service Provider, or where required
          by law.
        </p>
        <h3>Third Party Advertising Partners</h3>
        <p>
          We may share Personal Information with third parties (such as
          advertising networks, social media platforms, and measurement/analytics
          partners) to provide cross-contextual behavioral advertising,
          analytics, attribution, and reporting.
        </p>
        <h3>Corporate Transactions</h3>
        <p>
          If we merge, are acquired, or are sold, we may disclose or transfer
          Personal Information in connection with such transaction.
        </p>
        <h3>Compliance with Laws and Law Enforcement</h3>
        <p>
          We may disclose Personal Information if we believe it is necessary or
          appropriate in order to respond to legal requests, to protect the
          safety, property, or rights of our company or of any third party, or
          to comply with the law.
        </p>
        <p>
          <strong>Note regarding Mobile Opt-in data:</strong> Mobile opt-in data
          is not sold or shared with third parties for their own marketing or
          commercial use.
        </p>
      </section>

      <section>
        <h2>5. Privacy Notice Specific to Mobile Messaging</h2>
        <p>
          We will only use information you provide when opting into mobile
          messaging (the &ldquo;Program&rdquo;) to transmit your mobile messages
          and respond to you, if necessary. WE DO NOT SELL, RENT, LOAN, TRADE,
          LEASE OR OTHERWISE TRANSFER ANY PHONE NUMBERS OR CUSTOMER INFORMATION
          COLLECTED THROUGH THE PROGRAM TO ANY THIRD PARTY FOR SUCH THIRD
          PARTY&rsquo;S MARKETING PURPOSES OR OTHERWISE FOR SUCH THIRD
          PARTY&rsquo;S OWN BENEFIT. To view our complete Mobile Messaging Terms
          and Conditions, please see the <a href="/terms">Terms of Use</a> on our
          Site.
        </p>
      </section>

      <section>
        <h2>6. Cookies</h2>
        <p>
          We may use cookies and similar technologies to analyze use of and
          improve the Site and Services. Most web browsers are initially set up
          to accept cookies. You can reset your web browser to refuse all cookies
          or to indicate when a cookie is being sent; however, certain features
          of the Site or Services may not work if you delete or disable cookies.
        </p>
        <p>
          We may use Google Analytics on the Site and Services. For more
          information about how to opt out of having your information used by
          Google Analytics, visit{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://tools.google.com/dlpage/gaoptout/
          </a>
          .
        </p>
      </section>

      <section>
        <h2>7. Session Replay Technology</h2>
        <p>
          We use session replay technology on our Site to collect information
          regarding records and tracks of your interactions with a website or
          application. We use session replays for quality control, customer
          service, fraud prevention and security, and marketing purposes.
        </p>
      </section>

      <section>
        <h2>8. ChatBot Technology</h2>
        <p>
          We use chatbots to help provide customer service and support. If you
          use our chatbot service, we will collect any information you provide
          to us. We will also create and store a transcript of your chat
          interaction with us for quality control, customer service, fraud
          prevention and security.
        </p>
      </section>

      <section>
        <h2>9. Advertising and Online Tracking</h2>
        <p>
          We may place advertisements and allow third-party companies to serve
          ads and collect certain information when you visit the Site. These
          companies may use certain information during your visits to this Site
          and other websites in order to provide advertisements about goods and
          services likely to be of interest to you. To learn more about these
          advertising practices or to opt out of this type of advertising, you
          can visit{" "}
          <a
            href="https://www.networkadvertising.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.networkadvertising.org
          </a>{" "}
          or{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aboutads.info/choices/
          </a>
          .
        </p>
      </section>

      <section>
        <h2>10. Managing Your Information Preferences</h2>
        <p>
          You can opt out of receiving marketing e-mails from us by following
          the link provided at the bottom of all marketing e-mails you receive
          from us. You are able to opt out of receiving marketing e-mails from
          us; however, you cannot opt out of receiving all e-mails from us, such
          as e-mails about the status of your account.
        </p>
      </section>

      <section>
        <h2>11. Be Careful When You Share Information with Others</h2>
        <p>
          Please be aware that whenever you share information on any public area
          of the Site or Services, that information may be accessed by others.
          We cannot control and are not responsible for what such third parties
          may do with your information.
        </p>
      </section>

      <section>
        <h2>12. Security</h2>
        <p>
          We maintain physical, electronic, and procedural safeguards to help
          protect the confidentiality and security of information transmitted to
          us. However, no data transmission over the Internet or other network
          can be guaranteed to be 100% secure. As a result, while we strive to
          protect information transmitted on or through the Site or Services,
          we cannot and do not guarantee the security of any information you
          transmit on or through the Site or Services, and you do so at your own
          risk.
        </p>
      </section>

      <section>
        <h2>13. Links</h2>
        <p>
          Our Site and Services may contain links to other websites. A link to a
          third party&rsquo;s website does not mean that we endorse it or that
          we are affiliated with it. You access such third-party websites or
          content at your own risk.
        </p>
      </section>

      <section>
        <h2>14. Children&rsquo;s Privacy</h2>
        <p>
          The Site and Services are intended for users who are 18 years old or
          older. We do not knowingly collect Personal Information from children
          under the age of 13. If we become aware that we have inadvertently
          received Personal Information from a child under the age of 13, we
          will delete such information from our records.
        </p>
      </section>

      <section>
        <h2>15. Processing in the United States</h2>
        <p>
          Please be aware that your Personal Information and communications may
          be transferred to and maintained on servers or databases located
          outside your state, province, or country. If you are located outside
          of the United States, please be advised that we process and store all
          information in the United States.
        </p>
      </section>

      <section>
        <h2>16. State Privacy Disclosures (California, Nevada, and Other U.S. States)</h2>
        <p>
          Certain U.S. state laws provide residents with rights regarding a
          business&rsquo;s disclosure of Personal Information to third parties.
          Please note that we do not disclose Personal Information to third
          parties for their own direct marketing purposes, and we do not sell
          Personal Information for monetary consideration.
        </p>
      </section>

      <section>
        <h2>17. Notice to Residents of Canada</h2>
        <p>
          If you are a resident of Canada, you may have certain privacy rights
          under Canadian privacy law, including a right to request access to your
          personal information and to request a correction to it if you believe
          it is inaccurate. Please contact us using the contact information
          provided below.
        </p>
      </section>

      <section>
        <h2>18. Privacy Policy Changes</h2>
        <p>
          We may change this Privacy Policy from time to time. If we decide to
          change this Privacy Policy, we will inform you by posting the revised
          Privacy Policy on the Site. By continuing to use the Site or Services,
          you are consenting to the revised Privacy Policy.
        </p>
      </section>

      <section>
        <h2>19. Contact Us</h2>
        <p>
          If you have any questions or concerns, or would like to submit a
          complaint to us, you may contact {site.name} at{" "}
          <a href={site.phoneHref}>{site.phone}</a> or{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p>
          Please print a copy of this privacy policy for your records and please
          check the Site frequently for any changes.
        </p>
      </section>
    </LegalPage>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | Roomade",
  robots: { index: false },
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display mt-9 text-2xl font-extrabold text-ink first:mt-0">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 leading-relaxed">{children}</p>;
}

export default function TermsPage() {
  return (
    <div className="flex flex-1 justify-center bg-teal px-6 py-20">
      <div className="panel w-full max-w-2xl p-8 text-sm leading-relaxed text-ink/85 sm:p-10">
        <h1 className="font-display text-4xl font-extrabold text-ink">
          Terms
        </h1>
        <p className="mt-1 text-xs text-ink/65">
          Last updated August 27, 2026.
        </p>

        <H2>1. What this is</H2>
        <P>
          This site is a pre-launch waitlist for Roomade, a native iOS app
          for shared-flat coordination. It&apos;s operated by [Company Legal
          Name], [Registered Address] (&ldquo;Roomade,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us&rdquo;). Malaysia and South Korea are both target
          markets for early access, these terms apply the same way to
          signups from either. By submitting your email through the
          waitlist form, you agree to these terms.
        </P>

        <H2>2. What joining the waitlist does, and doesn&apos;t, mean</H2>
        <P>
          Joining the waitlist means we&apos;ll email you when early access
          opens up. It doesn&apos;t create an account, doesn&apos;t entitle
          you to access at any particular date, and isn&apos;t a purchase or
          a contract for any product or service. We&apos;re not charging
          anything, and there&apos;s no pricing plan yet.
        </P>

        <H2>3. Eligibility</H2>
        <P>
          You must be able to form a binding agreement to use this site. If
          you&apos;re under the age of majority where you live (18 in most
          places, including Malaysia and South Korea), please only submit
          the form with a parent or guardian&apos;s permission.
        </P>

        <H2>4. The product isn&apos;t built yet</H2>
        <P>
          Roomade is pre-launch software. Features, screenshots, card types,
          and timelines described on this site are our current plan, not a
          finished product, and may change before release. Early access
          will go out through Apple TestFlight before any public App Store
          launch. We make no promise about when, or whether, any particular
          feature ships.
        </P>

        <H2>5. Acceptable use</H2>
        <P>You agree not to, in connection with this site:</P>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>submit someone else&apos;s email address without their permission</li>
          <li>
            use automated tools to scrape this site or submit the waitlist
            form in bulk
          </li>
          <li>
            try to gain unauthorized access to our systems or interfere with
            the site&apos;s normal operation
          </li>
        </ul>

        <H2>6. Intellectual property</H2>
        <P>
          The Roomade name, logo, and the content of this site (text,
          design, and code) belong to us or our licensors. Nothing here
          gives you a license to use them, except to view this page in your
          browser as intended.
        </P>

        <H2>7. No warranty</H2>
        <P>
          This site and the waitlist are provided &ldquo;as is,&rdquo;
          without warranties of any kind, whether express, implied, or
          statutory, including any implied warranty of merchantability,
          fitness for a particular purpose, or non-infringement, to the
          fullest extent permitted by applicable law.
        </P>

        <H2>8. Limitation of liability</H2>
        <P>
          To the fullest extent permitted by law, we won&apos;t be liable
          for any indirect, incidental, or consequential damages arising
          from your use of this site or the waitlist, including if early
          access is delayed, changed, or never ships. Nothing in these
          terms limits liability that can&apos;t be limited under Malaysian
          law or, for South Korean users, under South Korean law, including
          your statutory rights under the Personal Information Protection
          Act described in our Privacy Policy.
        </P>

        <H2>9. Your data protection rights aren&apos;t affected</H2>
        <P>
          These Terms govern your use of the site as a contract. They
          don&apos;t override, and can&apos;t be used to waive, the
          statutory data protection rights described in our{" "}
          <a
            href="/privacy"
            className="underline decoration-coral decoration-2 underline-offset-2"
          >
            Privacy Policy
          </a>
          , including rights available to you under Malaysia&apos;s Personal
          Data Protection Act 2010 or South Korea&apos;s Personal
          Information Protection Act, regardless of the governing law
          chosen for this contract in Section 11.
        </P>

        <H2>10. Changes</H2>
        <P>
          We may update these terms as the product develops. If we make a
          material change, we&apos;ll update the date at the top of this
          page. Continuing to use the site after a change means you accept
          the update.
        </P>

        <H2>11. Governing law</H2>
        <P>
          These terms are governed by the laws of Malaysia, without regard
          to conflict-of-law principles, and any dispute arising from them
          will be subject to the exclusive jurisdiction of the courts of
          Malaysia. This choice of law applies to the contract itself; it
          doesn&apos;t limit the statutory rights described in Section 9.
        </P>

        <H2>12. Contact</H2>
        <P>
          [Company Legal Name], [Registered Address].{" "}
          <a
            href="mailto:roomadeofficialmy@gmail.com"
            className="underline decoration-coral decoration-2 underline-offset-2"
          >
            roomadeofficialmy@gmail.com
          </a>
        </P>
      </div>
    </div>
  );
}

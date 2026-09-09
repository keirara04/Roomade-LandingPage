import type { Metadata } from "next";
import BackHomeLink from "../components/BackHomeLink";

export const metadata: Metadata = {
  title: "Privacy Policy | Roomade",
  robots: { index: false },
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display mt-9 text-2xl font-extrabold text-ink first:mt-0">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display mt-5 text-sm font-bold text-navy">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 leading-relaxed">{children}</p>;
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-1 justify-center bg-teal px-6 py-20">
      <div className="w-full max-w-2xl">
        <BackHomeLink />
        <div className="panel p-8 text-sm leading-relaxed text-ink/85 sm:p-10">
        <h1 className="font-display text-4xl font-extrabold text-ink">
          Privacy Policy
        </h1>
        <p className="mt-1 text-xs text-ink/65">
          Last updated September 7, 2026. Applies to this waitlist site
          only.
        </p>

        <P>
          Roomade&apos;s early access is aimed at flatmates in Malaysia and
          South Korea alike, both are core markets for us, not incidental
          visitors. This notice explains what personal data we collect
          through this waitlist page, why, how long we keep it, who we
          share it with, and the rights you have over it. It&apos;s written
          to meet Malaysia&apos;s Personal Data Protection Act 2010 (PDPA)
          and South Korea&apos;s Personal Information Protection Act
          (PIPA) side by side. It doesn&apos;t cover the Roomade app
          itself, which will have its own in-app privacy notice once
          it&apos;s available.
        </P>
        <P>
          This page is in English. If you&apos;d like a Korean-language
          copy, email us and we&apos;ll send one, an English version
          governs if the two ever conflict.
        </P>

        <H2>1. Who is responsible for your data</H2>
        <P>
          The data controller for this site is Hakeemi Ridza,
          Jasin, Melaka, operating as &ldquo;Roomade.&rdquo; You can
          reach us at{" "}
          <a
            href="mailto:roomadeofficialmy@gmail.com"
            className="underline decoration-coral decoration-2 underline-offset-2"
          >
            roomadeofficialmy@gmail.com
          </a>{" "}
          for any privacy question, including the rights listed below.
        </P>

        <H2>2. What we collect</H2>
        <H3>You give us directly</H3>
        <P>
          Just the email address you submit through the waitlist form. We
          don&apos;t ask for your name, phone number, or anything else.
        </P>
        <H3>Collected automatically</H3>
        <P>
          Our hosting provider records standard server logs (IP address,
          timestamp, request path) for a short period, purely for security
          and abuse prevention, for example, blocking a script that tries to
          submit thousands of fake signups. We don&apos;t use cookies,
          analytics scripts, or advertising trackers on this site.
        </P>

        <H2>3. Why we collect it, and our legal basis</H2>
        <P>
          We collect your email solely to notify you when Roomade opens for
          early access. Under the PDPA, our basis is your consent, given by
          submitting the form. Under PIPA, the same applies: collection and
          use is based on your consent at the point of signup, and you can
          withdraw it at any time (see Section 8). Server logs are kept
          under our legitimate interest in keeping the site secure.
        </P>

        <H2>4. Who we share it with</H2>
        <P>
          We use Supabase (Supabase Inc.) as our database provider to store
          waitlist signups, and a hosting provider to serve this website.
          Both act as data processors on our instructions, they don&apos;t
          use your email for their own purposes. We don&apos;t sell,
          rent, or share your email with advertisers or other third
          parties.
        </P>
        <P>
          Our Supabase database is hosted in the Asia-Pacific region
          (Singapore). For our South Korean users, this means your email
          address is transferred outside Korea to be stored, Section 5 sets
          out the specific disclosures PIPA requires for that transfer.
        </P>

        <H2>5. International transfer (South Korea, PIPA Article 28-8)</H2>
        <P>
          Because South Korea is one of our two target markets, this
          section applies to every signup from Korea, not just an
          occasional edge case. As required by PIPA Article 28-8, here are
          the specifics of the transfer:
        </P>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Recipient: Supabase Inc., our database processor</li>
          <li>Country of storage: Singapore</li>
          <li>Data transferred: your email address only</li>
          <li>
            Purpose: to store your waitlist entry so we can email you about
            early access
          </li>
          <li>
            Retention period abroad: for as long as described in Section 6,
            or until the recipient&apos;s use ends, whichever is earlier
          </li>
          <li>
            Method of transfer: encrypted transmission (HTTPS) to
            Supabase&apos;s Singapore infrastructure at the moment you
            submit the form
          </li>
        </ul>
        <P>
          You have the right to refuse this transfer. Since it&apos;s the
          only way we can add you to the waitlist, refusing means we
          won&apos;t be able to sign you up, but you&apos;re free to check
          back on this page later instead.
        </P>

        <H2>6. How long we keep it</H2>
        <P>
          We keep your email until Roomade launches and the waitlist closes,
          or until you ask us to delete it, whichever comes first. If you
          don&apos;t hear from us within 18 months, we&apos;ll delete
          unconfirmed signups automatically.
        </P>

        <H2>7. If something goes wrong (data breach)</H2>
        <P>
          If we become aware of a personal data breach affecting your email
          address:
        </P>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Under the PDPA, we will notify the Personal Data Protection
            Commissioner (Jabatan Perlindungan Data Peribadi) within 72
            hours of becoming aware of a breach likely to cause significant
            harm, and notify affected individuals within 7 days of that
            Commissioner notification.
          </li>
          <li>
            Under PIPA, we will notify the Personal Information Protection
            Commission (PIPC) without delay where the breach requires it.
          </li>
        </ul>

        <H2>8. Your rights</H2>
        <P>You can ask us, at any time, to:</P>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>confirm whether we hold your email and see a copy of it</li>
          <li>correct it, if you submitted it with a typo</li>
          <li>delete it and remove you from the waitlist</li>
          <li>withdraw your consent to us holding it</li>
          <li>
            limit or object to how we process it, though since we only
            process it for one purpose, this is functionally the same as
            deletion
          </li>
        </ul>
        <P>
          These map to your rights of access, correction, and withdrawal of
          consent under Malaysia&apos;s PDPA (Sections 30 to 32 and 38), and
          to your rights to access, correct, delete, and suspend processing
          of your data under South Korea&apos;s PIPA (Articles 35 to 37).
          To exercise any of them, email{" "}
          <a
            href="mailto:roomadeofficialmy@gmail.com"
            className="underline decoration-coral decoration-2 underline-offset-2"
          >
            roomadeofficialmy@gmail.com
          </a>
          . We&apos;ll act on your request within 21 days.
        </P>

        <H2>9. Security</H2>
        <P>
          Your email is stored in a database with row-level security
          enabled: our public site can only insert new signups, it
          can&apos;t read, list, or export existing ones. Traffic to this
          site is encrypted in transit (HTTPS).
        </P>

        <H2>10. Children&apos;s privacy</H2>
        <P>
          This waitlist isn&apos;t directed at children. Under PIPA, we
          don&apos;t knowingly collect personal information from anyone
          under 14 without verified consent from a legal guardian. Under
          Malaysia&apos;s general law of capacity, we don&apos;t knowingly
          collect personal information from anyone under 18 without a
          parent&apos;s or guardian&apos;s consent. If you believe a child
          has signed up without the required consent, contact us and
          we&apos;ll remove the entry.
        </P>

        <H2>11. Complaints</H2>
        <P>
          If you&apos;re unhappy with how we&apos;ve handled your data,
          please contact us first, we&apos;ll try to sort it out directly.
          You can also lodge a complaint with your local regulator: in
          Malaysia, the Department of Personal Data Protection (Jabatan
          Perlindungan Data Peribadi); in South Korea, the Personal
          Information Protection Commission (PIPC), or report a breach to
          KISA&apos;s Privacy Call Center at 118.
        </P>

        <H2>12. Changes to this policy</H2>
        <P>
          If this policy changes materially, we&apos;ll update the date at
          the top of this page. Since this is a waitlist and we hold very
          little data, we don&apos;t expect frequent changes.
        </P>

        <H2>13. Contact</H2>
        <P>
          Hakeemi Ridza, Jasin, Melaka.{" "}
          <a
            href="mailto:roomadeofficialmy@gmail.com"
            className="underline decoration-coral decoration-2 underline-offset-2"
          >
            roomadeofficialmy@gmail.com
          </a>
        </P>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Privacy Policy | Roomade",
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

export default function AppPrivacyPage() {
  return (
    <div className="flex flex-1 justify-center bg-teal px-6 py-20">
      <div className="panel w-full max-w-2xl p-8 text-sm leading-relaxed text-ink/85 sm:p-10">
        <h1 className="font-display text-4xl font-extrabold text-ink">
          Roomade App Privacy Policy
        </h1>
        <p className="mt-1 text-xs text-ink/65">
          Last updated September 7, 2026.
        </p>

        <P>
          This notice covers the Roomade iOS app (not the waitlist site,
          which has its own notice). It&apos;s written to meet
          Malaysia&apos;s Personal Data Protection Act 2010 as amended
          (PDPA) and South Korea&apos;s Personal Information Protection Act
          (PIPA).
        </P>

        <H2>1. Who is responsible</H2>
        <P>
          Hakeemi Ridza, Jasin, Melaka, operating as &ldquo;Roomade.&rdquo;
          Contact:{" "}
          <a
            href="mailto:roomadeofficialmy@gmail.com"
            className="underline decoration-coral decoration-2 underline-offset-2"
          >
            roomadeofficialmy@gmail.com
          </a>{" "}
          for any privacy question, including the rights listed below.
        </P>

        <H2>2. What we collect</H2>
        <H3>Account & identity</H3>
        <P>
          Email address and password, handled entirely by our backend
          provider, and we never see or store your password in plain text. If
          you sign in with Apple or Google instead, we receive the name and
          email your account there chooses to share with us.
        </P>
        <H3>Profile</H3>
        <P>
          Display name and avatar photo. These are visible to any
          signed-in Roomade user, not only your own housemates. This is a
          deliberate tradeoff in how the app is built, so treat your
          profile as semi-public within the app, not private to your
          household.
        </P>
        <H3>Household & task data</H3>
        <P>
          Everything you and your housemates create to run the household:
          cards (Issues/Needs, Spends, Heads-Up announcements), claims and
          resolutions, comments and activity history, and Heads-Up
          acknowledgements. Anything you type into a card&apos;s title,
          description, or comment is stored as-is and visible to your
          household.
        </P>
        <H3>Chat</H3>
        <P>
          Message text, GIFs you send, who you @mention, and read
          receipts. Read receipts are visible to your entire household, so
          people can see who&apos;s read what. Typing indicators are
          transient and not stored. Message content is not end-to-end
          encrypted, so our backend can technically access it to operate and
          troubleshoot the service.
        </P>
        <H3>Payout details (financial)</H3>
        <P>
          If you add a way for housemates to pay you back, we store,
          depending on what you enter: a DuitNow QR payload, a payment
          link (e.g. Toss, KakaoPay, PayPal.me, Wise), or a bank name,
          account number, and account holder name. This is a more
          restricted part of our database than your profile, visible only
          to people who share a household with you, but it is stored in
          full (not masked) on our servers, only masked when displayed
          on-screen.
        </P>
        <H3>Shared expenses</H3>
        <P>
          Who paid, how much, who owes what share, and whether it&apos;s
          been marked paid, if you use the expense-splitting (Settle Up)
          feature.
        </P>
        <H3>Device & notifications</H3>
        <P>
          A push-notification device token, and your notification
          preferences (which types of alerts you&apos;ve turned on or
          off). Push notification previews never contain your actual
          message content, only generic text like &ldquo;New activity in
          your household.&rdquo;
        </P>
        <H3>Photos & camera</H3>
        <P>
          Camera access to scan a housemate&apos;s invite QR code (not
          stored). Photo library access to attach images to cards, set
          your profile photo, or save your household&apos;s DuitNow QR
          code to your device so your banking app can scan it. For that
          last case we only request the limited &ldquo;add&rdquo;
          permission, not full read access to your photo library.
        </P>
        <H3>Engagement</H3>
        <P>A daily activity-streak counter tied to your account.</P>
        <H3>Locally on your device</H3>
        <P>
          Only your currently active household ID, stored in standard app
          preferences. Your login session is stored securely by our
          backend SDK using the iOS Keychain.
        </P>

        <H2>3. What we don&apos;t collect</H2>
        <P>
          No location data, no advertising identifiers, and no tracking
          across other apps or websites (so no App Tracking Transparency
          prompt is needed). No analytics or crash-reporting SDK is active
          in the app.
        </P>

        <H2>4. Why we collect it, and our legal basis</H2>
        <P>
          To operate the household coordination features you use:
          assigning chores, tracking shared expenses, chatting with
          housemates, and notifying you of activity. Under the PDPA, our
          basis is your consent at signup plus performance of the service
          you&apos;ve asked for. Under PIPA, the basis is contractual
          necessity for the household features you actively use.
        </P>

        <H2>5. Who we share it with</H2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Supabase Inc.: our database, authentication, file storage, and
            realtime infrastructure. Acts as our data processor.
          </li>
          <li>
            Firebase Cloud Messaging (Google): delivers push
            notifications, and also powers &ldquo;Sign in with
            Google.&rdquo; Google may process your device token and, for
            Google sign-in, your Google account&apos;s name and email.
          </li>
          <li>
            Apple: processes the identity token if you use &ldquo;Sign in
            with Apple.&rdquo;
          </li>
          <li>
            GIPHY: when you search for a GIF in chat, your search text is
            sent to GIPHY&apos;s public API. No account identifiers are
            sent, but this is a genuine third party seeing that query
            text.
          </li>
        </ul>
        <P>We don&apos;t sell your data or share it with advertisers.</P>

        <H2>6. International transfer (South Korea, PIPA Article 28-8)</H2>
        <P>
          Our backend is hosted in Singapore. For our Korean users, this
          means personal data, including chat content and payout details,
          is transferred outside Korea. Per PIPA Article 28-8, here are
          the specifics:
        </P>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Recipient: Supabase Inc., our backend processor</li>
          <li>Country of storage: Singapore</li>
          <li>
            Data transferred: your account, profile, household, chat, and
            payout data: whatever you enter into the app
          </li>
          <li>
            Purpose: to operate the household coordination features
            described in Section 2
          </li>
          <li>Retention period abroad: as described in Section 7</li>
          <li>
            Method of transfer: encrypted transmission (HTTPS) at the
            moment you use the app
          </li>
        </ul>
        <P>
          Firebase Cloud Messaging and GIPHY may process data on servers
          outside both Malaysia and Korea (typically the US) as part of
          their own global infrastructure.
        </P>

        <H2>7. How long we keep it</H2>
        <P>
          We keep your account data for as long as your account is active.
          If you delete your account or leave a household, content
          you&apos;ve contributed (chat messages, card activity, comments,
          and payout details already visible to that household) stays
          part of the household&apos;s shared record, since other members
          co-own that history the same way a group chat isn&apos;t erased
          for everyone when one person leaves. Your login credentials and
          profile (name, avatar, email) are deleted from active use once
          your account is closed. To close your account, email{" "}
          <a
            href="mailto:roomadeofficialmy@gmail.com"
            className="underline decoration-coral decoration-2 underline-offset-2"
          >
            roomadeofficialmy@gmail.com
          </a>
          ; we&apos;ll act within 21 days.
        </P>

        <H2>8. Your rights</H2>
        <P>
          You can ask us to access, correct, delete, or withdraw consent
          for your data, and to stop processing it, which is functionally
          the same as deletion, since we only process it to run the app. This maps
          to your rights under Malaysia&apos;s PDPA (Sections 30–32 and
          38) and South Korea&apos;s PIPA (Articles 35–37). Contact{" "}
          <a
            href="mailto:roomadeofficialmy@gmail.com"
            className="underline decoration-coral decoration-2 underline-offset-2"
          >
            roomadeofficialmy@gmail.com
          </a>
          ; we&apos;ll act within 21 days.
        </P>

        <H2>9. Security</H2>
        <P>
          Row-level security means payout details are visible only within
          your household, and chat and household data only to household
          members. Traffic is encrypted in transit (HTTPS).
        </P>

        <H2>10. Children&apos;s privacy</H2>
        <P>
          Not directed at children. Under PIPA, we don&apos;t knowingly
          collect personal information from anyone under 14 without
          verified consent from a legal guardian. Under Malaysia&apos;s
          general law of capacity, we don&apos;t knowingly collect
          personal information from anyone under 18 without a parent&apos;s
          or guardian&apos;s consent.
        </P>

        <H2>11. Breach notification</H2>
        <P>
          Under the PDPA, we&apos;ll notify the Personal Data Protection
          Commissioner (Jabatan Perlindungan Data Peribadi) within 72
          hours of becoming aware of a breach likely to cause significant
          harm, and notify affected individuals within 7 days of that
          Commissioner notification. Under PIPA, we&apos;ll notify
          affected users and the Personal Information Protection
          Commission (PIPC) without delay where the breach requires it.
        </P>

        <H2>12. Complaints</H2>
        <P>
          Malaysia: Department of Personal Data Protection (Jabatan
          Perlindungan Data Peribadi). Korea: Personal Information
          Protection Commission (PIPC), or report a breach to KISA&apos;s
          Privacy Call Center at 118.
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
  );
}

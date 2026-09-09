import type { Metadata } from "next";
import BackHomeLink from "../components/BackHomeLink";

export const metadata: Metadata = {
  title: "App Terms | Roomade",
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

export default function AppTermsPage() {
  return (
    <div className="flex flex-1 justify-center bg-teal px-6 py-20">
      <div className="w-full max-w-2xl">
        <BackHomeLink />
        <div className="panel p-8 text-sm leading-relaxed text-ink/85 sm:p-10">
        <h1 className="font-display text-4xl font-extrabold text-ink">
          Roomade App Terms and Conditions
        </h1>
        <p className="mt-1 text-xs text-ink/65">
          Last updated September 7, 2026.
        </p>

        <H2>1. Acceptance</H2>
        <P>
          By creating an account or using the Roomade app, you agree to
          these Terms. If you don&apos;t agree, don&apos;t use the app.
        </P>

        <H2>2. Eligibility</H2>
        <P>
          You must be at least 18 to create an account and enter this
          agreement. If local law sets a lower age for using apps
          generally (e.g. 14 in Korea for data consent purposes) but a
          higher age for binding contracts, a parent or guardian must
          accept these Terms on your behalf.
        </P>

        <H2>3. Your account</H2>
        <P>
          You&apos;re responsible for keeping your login credentials
          secure and for all activity under your account. Tell us
          immediately if you suspect unauthorized access. You must
          provide accurate information at signup (email, display name).
        </P>

        <H2>4. What Roomade is</H2>
        <P>
          Roomade is a household coordination tool: shared task/chore
          boards, shopping lists, chat, reminders, expense-splitting, and
          a way to display how housemates can pay each other back. It is
          not a bank, payment processor, escrow service, or money
          transmitter, and does not guarantee household members will
          actually pay each other.
        </P>

        <H2>5. Households and invites</H2>
        <P>
          Anyone can create a household and invite others via an invite
          code. The creator and any member can add tasks, chores, and
          shopping items visible to the whole household. Leaving or being
          removed from a household stops your access to its data going
          forward. It does not retroactively delete your past
          contributions from other members&apos; view; that shared history
          stays part of the household&apos;s record, consistent with
          Section 7 of our Privacy Policy.
        </P>

        <H2>6. Payout details: no money moves through Roomade</H2>
        <P>
          If you add a bank account, DuitNow QR, or payment link to your
          profile (&ldquo;Payout Handle&rdquo;), you are giving other
          household members your own payment information so they can pay
          you directly through their own bank or payment app. Roomade
          never receives, holds, transmits, or has custody of any money.
          We are not a party to any payment between users, and we
          don&apos;t verify that a payout handle is accurate, current, or
          belongs to who it claims to. You are solely responsible for:
        </P>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>entering accurate payment details, and updating them if they change;</li>
          <li>
            verifying, before sending money to anyone, that the payout
            handle is genuinely theirs;
          </li>
          <li>
            any loss from sending money to a wrong, outdated, or
            fraudulent payout handle.
          </li>
        </ul>
        <P>
          We disclaim all liability for disputes, fraud, non-payment, or
          incorrect payments arising from use of this feature. If you
          believe a payout handle on your account is fraudulent or was
          added without your consent, contact us immediately.
        </P>

        <H2>7. Expense splitting</H2>
        <P>
          Expense-splitting is a bookkeeping tool for tracking who owes
          whom. Marking a share &ldquo;paid&rdquo; is a manual entry by
          users and is not verified proof of payment. Roomade takes no
          responsibility for unpaid or disputed shared expenses between
          housemates.
        </P>

        <H2>8. User content</H2>
        <P>
          You keep ownership of what you post (chat messages, comments,
          photos, task descriptions). By posting it, you grant Roomade a
          license to store, display, and transmit it as needed to run the
          features you&apos;re using (e.g. showing your chat message to
          your household, sending a push notification about it). We can
          remove content that violates these Terms.
        </P>
        <P>
          You agree not to post content that is illegal, harassing,
          defamatory, or that shares another person&apos;s personal or
          financial information without their consent, and not to use the
          invite/chat system to defraud or impersonate anyone.
        </P>

        <H2>9. Push notifications and permissions</H2>
        <P>
          You can control notification and camera/photo permissions
          through iOS Settings. Some features (e.g. scanning an invite QR
          code) won&apos;t work without the relevant permission.
        </P>

        <H2>10. Third-party services</H2>
        <P>
          Sign-in relies on Apple and Google; push notifications and
          Google sign-in run through Firebase Cloud Messaging; the
          app&apos;s database and file storage run through Supabase; GIF
          search in chat sends your query text to GIPHY. Your use of
          Apple or Google sign-in is also subject to their own terms.
        </P>

        <H2>11. Termination</H2>
        <P>
          You can request deletion of your account at any time by
          contacting us. We can suspend or terminate accounts that
          violate these Terms, misuse the payout or invite features, or
          pose a risk to other users.
        </P>

        <H2>12. Disclaimers</H2>
        <P>
          The app is provided &ldquo;as is.&rdquo; We don&apos;t guarantee
          uninterrupted service, that chore rotations or reminders will
          always fire correctly, or that any user-entered information
          (including payout details) is accurate. To the maximum extent
          permitted by law, we disclaim implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </P>

        <H2>13. Limitation of liability</H2>
        <P>
          To the maximum extent permitted by Malaysian law, Roomade and
          its operators are not liable for indirect, incidental, or
          consequential damages, or for any loss of money, data, or
          goodwill arising from your use of the app, including losses
          connected to the payout or expense-splitting features. This
          does not limit liability that cannot be excluded under
          mandatory consumer-protection law in your country of residence,
          including Korea&apos;s.
        </P>

        <H2>14. Indemnification</H2>
        <P>
          You agree to indemnify Roomade against claims arising from your
          misuse of the app, your content, or your violation of these
          Terms or of another person&apos;s rights.
        </P>

        <H2>15. Governing law</H2>
        <P>
          These Terms are governed by the laws of Malaysia, and Malaysian
          courts have jurisdiction, without regard to conflict-of-law
          rules. If you&apos;re a consumer resident in South Korea,
          nothing in these Terms limits protections you&apos;re entitled
          to under mandatory South Korean consumer-protection law, which
          apply alongside this clause where required.
        </P>

        <H2>16. Changes</H2>
        <P>
          We may update these Terms; continued use after an update means
          you accept the new version. Material changes will be flagged
          with an updated date at the top.
        </P>

        <H2>17. Contact</H2>
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

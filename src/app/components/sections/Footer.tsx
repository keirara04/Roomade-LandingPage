import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-paper/15 px-6 py-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3 text-center text-sm text-paper/70 sm:flex-row sm:justify-between sm:text-left">
        <p className="font-[family-name:var(--font-label)] tracking-wide">
          Roomade &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-paper">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-paper">
            Terms
          </Link>
          <a href="mailto:roomadeofficialmy@gmail.com" className="hover:text-paper">
            roomadeofficialmy@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

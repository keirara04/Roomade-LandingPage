import Image from "next/image";
import Link from "next/link";
import roomadeMark from "../../lib/roomade-mark.png";

export default function Footer() {
  return (
    <footer id="site-footer" className="w-full border-t border-paper/15 px-6 py-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3 text-center text-sm text-paper/95 sm:flex-row sm:justify-between sm:text-left">
        <p className="flex items-center gap-2 font-[family-name:var(--font-label)] tracking-wide">
          <Image src={roomadeMark} alt="" width={20} height={20} />
          Roomade &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="transition-colors hover:text-paper">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-paper">
            Terms
          </Link>
          <a href="mailto:roomadeofficialmy@gmail.com" className="transition-colors hover:text-paper">
            roomadeofficialmy@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

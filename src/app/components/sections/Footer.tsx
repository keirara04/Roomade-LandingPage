import Image from "next/image";
import Link from "next/link";
import ShapeScatter from "../ShapeScatter";
import icon from "../../../../public/icon-512.png";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="ground-deep w-full border-t border-white/10 px-6 py-10"
    >
      <ShapeScatter opacity={0.07} />
      <div className="mx-auto flex w-full max-w-6xl xl:max-w-7xl flex-col items-center gap-4 text-center text-sm text-white/85 sm:flex-row sm:justify-between sm:text-left">
        <p className="flex items-center gap-2.5 font-semibold">
          <Image src={icon} alt="" width={26} height={26} className="rounded-[28%]" />
          Roomade &copy; {new Date().getFullYear()}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link href="/privacy" className="py-1 transition-colors hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="py-1 transition-colors hover:text-white">
            Terms
          </Link>
          <a
            href="mailto:roomadeofficialmy@gmail.com"
            className="py-1 transition-colors hover:text-white"
          >
            roomadeofficialmy@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

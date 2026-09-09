import Link from "next/link";

export default function BackHomeLink() {
  return (
    <Link
      href="/"
      className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
      Back to home
    </Link>
  );
}

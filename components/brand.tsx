import Link from "next/link";

export function Brand({ href = "/" }: { href?: string }) {
  return (
    <Link className="brand" href={href} aria-label="P&G Alumni Association of India — home">
      <span className="brand__pg" aria-hidden="true">
        P&G
      </span>
      <span className="brand__lock">
        <span className="brand__alumni">Alumni</span>
        <span className="brand__india">Association of India</span>
      </span>
    </Link>
  );
}

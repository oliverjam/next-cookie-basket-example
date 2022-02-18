import Link from "next/link";

export default function Header({ basketCount }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link href="/" aria-label="Home">
        🐊
      </Link>
      <Link href="/basket">
        <a>
          Basket
          {basketCount && <span style={{ color: "red" }}> {basketCount}</span>}
        </a>
      </Link>
    </header>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav__list">
            {/* TODO: refactor this into Links based on pages in `pages` directory */}
            <li>
              <Link href="/">
                <a>home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>about</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

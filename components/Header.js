import Link from "next/link";
import { useEffect, useState } from "react";

import BLM from "./BLM";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <BLM />
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
        <li>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

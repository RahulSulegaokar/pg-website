"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand } from "./brand";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onEvents = pathname.startsWith("/events");

  function close() {
    setOpen(false);
  }

  return (
    <>
      <div className="utility">
        <div className="wrap">
          <Link className="util-join" href="/#membership" onClick={close}>
            Join the Chapter
          </Link>
          <a href="mailto:sec@pgaai.in">Contact Us</a>
          <a className="util-hide" href="https://pgalums.com/" target="_blank" rel="noopener noreferrer">
            P&G Alumni Network
          </a>
          <a className="util-hide" href="https://pgalumnifoundation.org/" target="_blank" rel="noopener noreferrer">
            P&G Alumni Foundation
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap">
          <Brand />
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav${open ? " is-open" : ""}`} id="primary-nav" aria-label="Primary">
            <ul>
              <li>
                <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={close}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" onClick={close}>
                  About
                </Link>
              </li>
              <li className="has-menu">
                <Link href="/#events" aria-current={onEvents ? "page" : undefined} onClick={close}>
                  Events
                </Link>
                <div className="menu">
                  <Link href="/#events" onClick={close}>
                    All events
                  </Link>
                  <Link href="/events/2026-conference" onClick={close}>
                    Conference 2026 — 31 Oct 2026
                  </Link>
                  <Link href="/events/2025-conference" onClick={close}>
                    Conference 2025 — archive
                  </Link>
                </div>
              </li>
              <li>
                <Link href="/#leadership" onClick={close}>
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/#membership" onClick={close}>
                  Membership
                </Link>
              </li>
              <li>
                <a href="#contact" onClick={close}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

import Link from "next/link";
import { Brand } from "./brand";

type FooterVariant = "home" | "2026" | "2025";

const legal =
  "Procter & Gamble and P&G are trade names of The Procter & Gamble Company and are used pursuant to an agreement with The Procter & Gamble Company. P&G Alumni Association of India is an independent organisation apart from The Procter & Gamble Company and is part of the P&G Alumni Network.";

export function SiteFooter({ variant = "home" }: { variant?: FooterVariant }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand href="/#top" />
            <p>Connecting the talent, ideas and friendships of P&G Alumni across India.</p>
            {variant === "home" ? (
              <div className="socials">
                <a href="https://www.linkedin.com/company/p&g-alumni-network/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.2 8.75 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21h-3.65Z" />
                  </svg>
                </a>
                <a href="https://twitter.com/pgalums" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.5 3h3.2l-7 8 7.3 10h-5.6l-4.4-6-5 6H2.8l7.3-8.6L3.5 3h5.7l4.1 5.6ZM16.4 19.1h1.8L7.7 4.8H5.8Z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/PGAlumniNetwork/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.8 3.5c-2.4 0-4 1.45-4 4.15V9.9H8.1V13h2.7v8Z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCxdwm6MkC_g3dygI7e0CjPQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.75-1.77C18.25 5 12 5 12 5s-6.25 0-7.85.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.75 1.77C5.75 19 12 19 12 19s6.25 0 7.85-.43a2.5 2.5 0 0 0 1.75-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12Z" />
                  </svg>
                </a>
              </div>
            ) : null}
          </div>

          {variant === "home" ? <HomeColumns /> : null}
          {variant === "2026" ? <Event2026Columns /> : null}
          {variant === "2025" ? <Event2025Columns /> : null}
        </div>

        <div className="footer-bottom">
          <span>© {year} P&G Alumni Association of India. All rights reserved.</span>
          <span>
            <a href="mailto:sec@pgaai.in">sec@pgaai.in</a> · pgaai.in
          </span>
        </div>
        <p className="legal">{legal}</p>
      </div>
    </footer>
  );
}

function HomeColumns() {
  return (
    <>
      <div>
        <h4>Chapter</h4>
        <ul>
          <li><Link href="/#about">About PGAAI</Link></li>
          <li><Link href="/#leadership">Management committee</Link></li>
          <li><Link href="/#membership">Membership & newsletter</Link></li>
          <li><Link href="/#contact">Contact us</Link></li>
        </ul>
      </div>
      <div>
        <h4>Events</h4>
        <ul>
          <li><Link href="/events/2026-conference">Conference 2026</Link></li>
          <li><Link href="/events/2025-conference">Conference 2025</Link></li>
          <li><Link href="/#events">Chapter calendar</Link></li>
          <li><Link href="/events/2026-conference#pay">Pay & register</Link></li>
        </ul>
      </div>
      <div>
        <h4>Network</h4>
        <ul>
          <li><a href="https://pgalums.com/" target="_blank" rel="noopener noreferrer">P&G Alumni Network</a></li>
          <li><a href="https://pgalums.com/chapters/india/" target="_blank" rel="noopener noreferrer">India chapter on pgalums.com</a></li>
          <li><a href="https://pgalumnifoundation.org/" target="_blank" rel="noopener noreferrer">P&G Alumni Foundation</a></li>
          <li><a href="mailto:sec@pgaai.in">sec@pgaai.in</a></li>
        </ul>
      </div>
    </>
  );
}

function Event2026Columns() {
  return (
    <>
      <div>
        <h4>Event</h4>
        <ul>
          <li><a href="#fees">Registration fees</a></li>
          <li><a href="#pay">Pay & register</a></li>
          <li><a href="#venue">Venue & map</a></li>
          <li><a href="/assets/calendar/conference-2026.ics" download>Add to calendar</a></li>
        </ul>
      </div>
      <div>
        <h4>Chapter</h4>
        <ul>
          <li><Link href="/#about">About PGAAI</Link></li>
          <li><Link href="/#leadership">Management committee</Link></li>
          <li><Link href="/#membership">Membership</Link></li>
          <li><Link href="/#contact">Contact us</Link></li>
        </ul>
      </div>
      <div>
        <h4>Network</h4>
        <ul>
          <li><a href="https://pgalums.com/" target="_blank" rel="noopener noreferrer">P&G Alumni Network</a></li>
          <li><a href="https://pgalums.com/chapters/india/" target="_blank" rel="noopener noreferrer">India chapter</a></li>
          <li><a href="mailto:sec@pgaai.in">sec@pgaai.in</a></li>
        </ul>
      </div>
    </>
  );
}

function Event2025Columns() {
  return (
    <>
      <div>
        <h4>Event</h4>
        <ul>
          <li><a href="#fees">Fees as published</a></li>
          <li><a href="/assets/event-2025-flyer.png" download>Download the 2025 poster</a></li>
          <li><Link href="/events/2026-conference">Conference 2026</Link></li>
          <li><Link href="/#events">All events</Link></li>
        </ul>
      </div>
      <div>
        <h4>Chapter</h4>
        <ul>
          <li><Link href="/#about">About PGAAI</Link></li>
          <li><Link href="/#leadership">Management committee</Link></li>
          <li><Link href="/#membership">Membership</Link></li>
          <li><Link href="/#contact">Contact us</Link></li>
        </ul>
      </div>
      <div>
        <h4>Network</h4>
        <ul>
          <li><a href="https://pgalums.com/" target="_blank" rel="noopener noreferrer">P&G Alumni Network</a></li>
          <li><a href="https://pgalums.com/chapters/india/" target="_blank" rel="noopener noreferrer">India chapter</a></li>
          <li><a href="mailto:sec@pgaai.in">sec@pgaai.in</a></li>
        </ul>
      </div>
    </>
  );
}

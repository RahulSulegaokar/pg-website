import type { Metadata } from "next";
import Link from "next/link";
import { HeroCarousel } from "@/components/carousel";
import { NewsletterForm } from "@/components/newsletter-form";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://pgaai.in/" },
};

export default function HomePage() {
  return (
    <>
      <main id="main">
        <section className="hero">
          <div className="wrap hero__grid">
            <div>
              <p className="eyebrow">P&G Alumni Association of India</p>
              <h1>Connecting P&G Alumni across India.</h1>
              <p className="lede">
                The India chapter of the global P&G Alumni Network brings former Procter & Gamble people together for
                learning, lifelong friendships and giving back — from Mumbai to every corner of the country.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/events/2026-conference">
                  Register for Conference 2026 <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <a className="btn btn--ghost" href="#about">
                  About the chapter
                </a>
              </div>
              <div className="hero__meta">
                <div>
                  <strong>31 Oct 2026</strong>
                  <span>Next conference</span>
                </div>
                <div>
                  <strong>St. Regis, Mumbai</strong>
                  <span>Venue</span>
                </div>
                <div>
                  <strong>45,000+</strong>
                  <span>Alumni worldwide</span>
                </div>
              </div>
            </div>
            <HeroCarousel />
          </div>
        </section>

        <section className="section section--tight">
          <div className="wrap">
            <div className="section-head center">
              <p className="eyebrow">Why alumni gather</p>
              <h2>Learning, networking and camaraderie</h2>
              <p className="lede">Every PGAAI gathering is built around three things our members ask for the most.</p>
            </div>
            <div className="grid value-grid">
              <article className="value">
                <div className="value__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3 2 8l10 5 10-5-10-5Z" />
                    <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
                  </svg>
                </div>
                <h3>Eminent alum & external speakers</h3>
                <p>
                  Leaders from the P&G alumni community and outside experts share what they are learning now — practical,
                  candid and off the record.
                </p>
              </article>
              <article className="value">
                <div className="value__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1Z" />
                  </svg>
                </div>
                <h3>Complementary health assessment</h3>
                <p>CONNECT & HEAL set up at the venue to offer members a complimentary health assessment through the day.</p>
              </article>
              <article className="value">
                <div className="value__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9.5" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
                    <path d="M16 3.1a4 4 0 0 1 0 7.8" />
                  </svg>
                </div>
                <h3>Networking and camaraderie</h3>
                <p>The evening is the point: cocktails and dinner with friends and ex-colleagues you have not seen for far too long.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section band" id="events">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow eyebrow--light">Chapter calendar</p>
              <h2>See what’s happening next!</h2>
              <p>Conferences, learning sessions and alumni gatherings across India.</p>
            </div>
            <div className="events">
              <article className="event-row">
                <div className="event-row__date">
                  31 Oct<small>2026</small>
                </div>
                <div className="event-row__body">
                  <strong>Learning & Networking Conference 2026</strong>
                  <span className="event-row__tag">Registration open</span>
                  <p>St. Regis, Mumbai · Speakers, health assessment, cocktails & dinner</p>
                </div>
                <div className="event-row__cta">
                  <Link className="link-arrow" href="/events/2026-conference">
                    Find out details and register
                  </Link>
                </div>
              </article>
              <article className="event-row">
                <div className="event-row__date">
                  10 Oct<small>2026</small>
                </div>
                <div className="event-row__body">
                  <strong>Early-bird registration closes</strong>
                  <span className="event-row__tag">Closed</span>
                  <p>Single ₹2,000 · Couple ₹3,500 · Additional ₹1,500</p>
                </div>
                <div className="event-row__cta">
                  <Link className="link-arrow" href="/events/2026-conference#fees">
                    See fee details
                  </Link>
                </div>
              </article>
              <article className="event-row">
                <div className="event-row__date">
                  11 Oct<small>2025</small>
                </div>
                <div className="event-row__body">
                  <strong>Learning & Networking Conference 2025</strong>
                  <span className="event-row__tag">Archive</span>
                  <p>St. Regis, Mumbai · Previous edition of the annual conference</p>
                </div>
                <div className="event-row__cta">
                  <Link className="link-arrow" href="/events/2025-conference">
                    View event archive
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Chapter events</p>
              <h2>The annual Learning & Networking Conference</h2>
              <p className="lede">
                PGAAI’s flagship gathering returns to St. Regis, Mumbai every October. Explore this year’s event or browse
                last year’s edition.
              </p>
            </div>
            <div className="grid" style={{ gap: "2.25rem" }}>
              <article className="event-card" id="conference-2026">
                <div className="event-card__media">
                  <img
                    src="/assets/event-2026-flyer.jpg"
                    width={816}
                    height={1056}
                    alt="Conference 2026 poster: Learning & Networking Conference, 31 October 2026, St. Regis, Mumbai."
                  />
                </div>
                <div className="event-card__body">
                  <span className="badge badge--live">Registration open</span>
                  <h3>Learning & Networking Conference 2026</h3>
                  <p className="lede" style={{ fontSize: "1rem" }}>
                    A full day with eminent alumni and external speakers, a complimentary health assessment at the venue,
                    and an evening of cocktails and dinner with your P&G friends and ex-colleagues.
                  </p>
                  <ul className="facts">
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M8 3v4M16 3v4M3 11h18" />
                      </svg>
                      <span>
                        <strong>Saturday, 31 October 2026</strong> · St. Regis, Mumbai
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M12 21s-7-5.6-7-11a7 7 0 1 1 14 0c0 5.4-7 11-7 11Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      <span>Speakers · Health assessment by CONNECT & HEAL · Cocktails & dinner</span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M3 6h18v12H3z" />
                        <path d="M3 10h18" />
                      </svg>
                      <span>Early bird closed 10 October 2026 — at-the-gate rates apply</span>
                    </li>
                  </ul>
                  <div className="price-chips">
                    <span className="chip">
                      Single <strong>₹2,500</strong>
                    </span>
                    <span className="chip">
                      Couple <strong>₹4,000</strong>
                    </span>
                    <span className="chip">
                      Additional <strong>₹2,000</strong>
                    </span>
                  </div>
                  <div className="btn-row">
                    <Link className="btn btn--primary" href="/events/2026-conference">
                      Event page & registration <span className="arrow" aria-hidden="true">→</span>
                    </Link>
                    <Link className="btn btn--ghost" href="/events/2026-conference#pay">
                      Pay & register now
                    </Link>
                  </div>
                </div>
              </article>

              <article className="event-card event-card--flip" id="conference-2025">
                <div className="event-card__media">
                  <img
                    src="/assets/event-2025-flyer.png"
                    width={622}
                    height={812}
                    alt="Conference 2025 poster: Learning & Networking Conference, 11 October 2025, St. Regis, Mumbai."
                  />
                </div>
                <div className="event-card__body">
                  <span className="badge badge--past">Event concluded</span>
                  <h3>Learning & Networking Conference 2025</h3>
                  <p className="lede" style={{ fontSize: "1rem" }}>
                    The 2025 edition brought the India chapter back together at St. Regis, Mumbai on 11 October 2025 — the
                    same three-part format members now look forward to every year.
                  </p>
                  <ul className="facts">
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M8 3v4M16 3v4M3 11h18" />
                      </svg>
                      <span>
                        <strong>Saturday, 11 October 2025</strong> · St. Regis, Mumbai
                      </span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M4 4h16v16H4z" />
                        <path d="M8 9h8M8 13h8M8 17h5" />
                      </svg>
                      <span>Eminent alum & external speakers · Health assessment · Cocktails & dinner</span>
                    </li>
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M3 6h18v12H3z" />
                        <path d="M3 10h18" />
                      </svg>
                      <span>Fees as published: ₹2,000 single · ₹3,500 couple · ₹1,500 additional</span>
                    </li>
                  </ul>
                  <div className="btn-row">
                    <Link className="btn btn--ghost" href="/events/2025-conference">
                      View event archive <span className="arrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--mist" id="about">
          <div className="wrap about-grid">
            <div>
              <p className="eyebrow">About us</p>
              <h2>The India Chapter of the P&G Alumni Network</h2>
              <p>
                The <strong>India Chapter</strong> is part of the global P&G Alumni Network, connecting former Procter &
                Gamble employees who share a passion for lifelong relationships, continuous learning, and making a
                positive impact.
              </p>
              <p>
                Our chapter brings alumni together through networking events, inspiring conversations, professional
                development, and social gatherings that strengthen both local connections and our global community.
              </p>
              <p>
                Whether you recently left P&G or have been an alumnus for years, we invite you to reconnect with former
                colleagues, expand your network, and be part of our growing chapter.
              </p>
              <ul className="tick-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m4 12.5 5 5L20 6.5" />
                  </svg>
                  <span>Part of a global network of more than 45,000 P&G alumni</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m4 12.5 5 5L20 6.5" />
                  </svg>
                  <span>Recognised and supported by Procter & Gamble</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m4 12.5 5 5L20 6.5" />
                  </svg>
                  <span>Volunteer-led — a management committee of alumni, for alumni</span>
                </li>
              </ul>
              <div className="btn-row mt-3">
                <a className="btn btn--primary" href="https://pgalums.com/chapters/india/" target="_blank" rel="noopener noreferrer">
                  Chapter page on pgalums.com
                </a>
                <a className="btn btn--ghost" href="#leadership">
                  Meet the committee
                </a>
              </div>
            </div>
            <div className="about-art" role="img" aria-label="Decorative illustration of the P&G Alumni Association of India network">
              <svg viewBox="0 0 600 450" aria-hidden="true" focusable="false">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="35%" r="70%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity=".28" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="band" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity=".22" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity=".05" />
                  </linearGradient>
                </defs>
                <rect width="600" height="450" fill="url(#glow)" />
                <g fill="none" stroke="#ffffff" strokeOpacity=".34">
                  <circle cx="300" cy="205" r="70" />
                  <circle cx="300" cy="205" r="112" />
                  <circle cx="300" cy="205" r="156" />
                  <circle cx="300" cy="205" r="205" strokeDasharray="4 10" />
                </g>
                <g fill="#ffffff" fillOpacity=".9">
                  <circle cx="300" cy="135" r="7" />
                  <circle cx="370" cy="205" r="6" />
                  <circle cx="230" cy="205" r="6" />
                  <circle cx="349" cy="273" r="7" />
                  <circle cx="251" cy="273" r="5" />
                  <circle cx="300" cy="49" r="5" />
                  <circle cx="438" cy="120" r="5" />
                  <circle cx="162" cy="120" r="5" />
                  <circle cx="480" cy="300" r="6" />
                  <circle cx="120" cy="300" r="6" />
                </g>
                <g stroke="#ffffff" strokeOpacity=".38" strokeWidth="1.2" fill="none">
                  <path d="M300 135 370 205 349 273 251 273 230 205Z" />
                  <path d="M300 49 300 135M438 120 370 205M162 120 230 205M480 300 349 273M120 300 251 273" />
                </g>
                <rect x="215" y="185" width="170" height="40" rx="6" fill="url(#band)" />
                <text x="300" y="213" textAnchor="middle" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="#ffffff" fillOpacity=".92">
                  P&G
                </text>
              </svg>
              <div className="about-art__caption">
                <strong>Alumni, across generations</strong>
                <span>Mumbai · Delhi · Bengaluru · Hyderabad · Chennai · Kolkata · and beyond</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="leadership">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Chapter leadership</p>
              <h2>PGAAI Management Committee</h2>
              <p className="lede">
                Your committee is made up of alumni volunteers who plan the conference, the chapter calendar and member
                communications.
              </p>
            </div>
            <div className="grid leader-grid">
              <article className="leader leader--chair">
                <div className="avatar" aria-hidden="true">DG</div>
                <h3>Deepak Gupta</h3>
                <p className="leader__role">Chairperson</p>
                <p>Leads the chapter and its annual conference programme.</p>
              </article>
              <article className="leader">
                <div className="avatar" aria-hidden="true">SG</div>
                <h3>Sreemoyee Ghosh Dastidar</h3>
                <p className="leader__role">Secretary</p>
                <p>First point of contact for members, registrations and records.</p>
              </article>
              <article className="leader">
                <div className="avatar" aria-hidden="true">KV</div>
                <h3>KV Laxminarayan</h3>
                <p className="leader__role">Management Committee</p>
                <p>Member of the PGAAI management committee.</p>
              </article>
              <article className="leader">
                <div className="avatar" aria-hidden="true">RJ</div>
                <h3>Rajesh Jaswal</h3>
                <p className="leader__role">Management Committee</p>
                <p>Member of the PGAAI management committee.</p>
              </article>
              <article className="leader">
                <div className="avatar" aria-hidden="true">VM</div>
                <h3>Viraj Mehta</h3>
                <p className="leader__role">Management Committee</p>
                <p>Member of the PGAAI management committee.</p>
              </article>
              <article className="leader">
                <div className="avatar" aria-hidden="true" style={{ background: "linear-gradient(135deg,#109dab,#63b946)" }}>
                  ✉
                </div>
                <h3>Chapter office</h3>
                <p className="leader__role">Secretariat</p>
                <p>
                  Write to <a href="mailto:sec@pgaai.in">sec@pgaai.in</a> for anything chapter related.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--mist" id="membership">
          <div className="wrap">
            <div className="newsletter__card">
              <div>
                <p className="eyebrow eyebrow--light">Membership & newsletter</p>
                <h2>Never miss a chapter event</h2>
                <p>
                  Add your name to the PGAAI mailing list and we will send you conference invitations, early-bird
                  reminders and chapter news. Nothing else, we promise.
                </p>
              </div>
              <div>
                <NewsletterForm />
                <p className="form-note">
                  Prefer email? Write to{" "}
                  <a href="mailto:sec@pgaai.in" style={{ color: "#fff", textDecoration: "underline" }}>
                    sec@pgaai.in
                  </a>{" "}
                  and we will add you manually.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Good to know</p>
              <h2>Frequently asked questions</h2>
            </div>
            <div className="faq">
              <details open>
                <summary>Who can attend PGAAI events?</summary>
                <p>
                  Every former Procter & Gamble employee — and their partner or guest. Members come from every function,
                  level and era of P&G, and the conference is deliberately designed so that newcomers feel as welcome as
                  long-serving alumni.
                </p>
              </details>
              <details>
                <summary>How do I pay for the conference?</summary>
                <p>
                  Register and pay by NEFT/IMPS bank transfer to the P&G Alumni Association of India account, or scan the
                  UPI QR code on the event page and pay through any UPI app. Please inform your transfer details to{" "}
                  <a href="mailto:haribalsm@gmail.com">haribalsm@gmail.com</a> so your seat is confirmed.
                </p>
              </details>
              <details>
                <summary>What does the registration fee include?</summary>
                <p>
                  Access to all speaker sessions, the complimentary health assessment by CONNECT & HEAL at the venue, and
                  the evening of networking with cocktails and dinner. The <em>couple</em> rate is for an alumnus and their
                  partner; the <em>additional</em> rate applies to each extra guest.
                </p>
              </details>
              <details>
                <summary>Where does the conference take place?</summary>
                <p>
                  The conference is held at St. Regis, Mumbai. Exact timings and the full agenda are shared with registered
                  members closer to the date.
                </p>
              </details>
              <details>
                <summary>How do I update my contact details or volunteer?</summary>
                <p>
                  Email the chapter secretariat at <a href="mailto:sec@pgaai.in">sec@pgaai.in</a>. The committee is
                  volunteer-run, so offers of help with speakers, sponsorship or the conference itself are always welcome.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section section--mist" id="contact">
          <div className="wrap">
            <div className="section-head center">
              <p className="eyebrow">Contact</p>
              <h2>Talk to the chapter</h2>
              <p className="lede">Registration queries, speaker suggestions, sponsorship, or simply to say hello.</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
              <article className="value">
                <h3>Chapter secretariat</h3>
                <p>
                  <a href="mailto:sec@pgaai.in">sec@pgaai.in</a>
                </p>
              </article>
              <article className="value">
                <h3>Registration & payments</h3>
                <p>
                  <a href="mailto:haribalsm@gmail.com">haribalsm@gmail.com</a>
                </p>
              </article>
              <article className="value">
                <h3>Website</h3>
                <p>
                  <a href="https://pgaai.in/">pgaai.in</a>
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="home" />
    </>
  );
}

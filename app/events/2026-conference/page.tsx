import type { Metadata } from "next";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Learning & Networking Conference 2026 — 31 October 2026, St. Regis Mumbai",
  description:
    "PGAAI Learning & Networking Conference 2026 on 31 October 2026 at St. Regis, Mumbai. Eminent alum and external speakers, a complimentary health assessment by CONNECT & HEAL, and networking over cocktails and dinner. Registration open.",
  alternates: { canonical: "https://pgaai.in/events/2026-conference" },
  openGraph: {
    title: "PGAAI Learning & Networking Conference 2026",
    description:
      "31 October 2026 · St. Regis, Mumbai. Speakers, complimentary health assessment, networking and camaraderie over cocktails and dinner.",
    url: "https://pgaai.in/events/2026-conference",
    images: ["/assets/event-2026-flyer.jpg"],
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "PGAAI Learning & Networking Conference 2026",
  startDate: "2026-10-31",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  description:
    "Eminent alum and external speakers, a complimentary health assessment by CONNECT & HEAL at the venue, and networking and camaraderie over cocktails and dinner.",
  location: {
    "@type": "Place",
    name: "St. Regis, Mumbai",
    address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
  },
  organizer: { "@type": "Organization", name: "P&G Alumni Association of India", url: "https://pgaai.in/", email: "sec@pgaai.in" },
  offers: [
    { "@type": "Offer", name: "Single", price: "2500", priceCurrency: "INR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Couple", price: "4000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Additional guest", price: "2000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  ],
};

export default function Conference2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <main id="main">
        <nav className="breadcrumb wrap" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#events">Events</Link></li>
            <li aria-current="page">Conference 2026</li>
          </ol>
        </nav>

        <section className="event-hero">
          <div className="wrap event-hero__grid">
            <div>
              <span className="badge badge--live">Registration open</span>
              <h1>Learning & Networking Conference 2026</h1>
              <p className="lede">
                The India chapter’s flagship gathering returns to St. Regis, Mumbai. A day of learning with eminent
                alumni and external speakers, a complimentary health assessment at the venue, and an evening of networking
                and camaraderie over cocktails and dinner with friends and ex-colleagues.
              </p>
              <div className="event-hero__key">
                <div><span>Date</span><strong>Saturday, 31 October 2026</strong></div>
                <div><span>Venue</span><strong>St. Regis, Mumbai</strong></div>
                <div><span>Hosted by</span><strong>P&G Alumni Association of India</strong></div>
              </div>
              <div className="btn-row">
                <a className="btn btn--solid-light" href="#pay">
                  Pay & register now <span className="arrow" aria-hidden="true">→</span>
                </a>
                <a className="btn btn--light" href="#fees">See registration fees</a>
                <a className="btn btn--light" href="/assets/calendar/conference-2026.ics" download>
                  Add to calendar
                </a>
              </div>
            </div>
            <div className="flyer-frame">
              <img
                src="/assets/event-2026-flyer.jpg"
                width={816}
                height={1056}
                alt="Event poster: Learning & Networking Conference 2026, 31 October 2026, St. Regis, Mumbai — early bird and at-the-gate fees, bank transfer details and UPI QR code."
              />
              <a className="flyer-frame__link" href="/assets/event-2026-flyer.jpg" target="_blank" rel="noopener noreferrer">
                View the full poster ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">What to expect</p>
              <h2>Three reasons members come back every year</h2>
              <p className="lede">
                The format is deliberately simple: learn something new, look after yourself, and spend real time with the
                people who shaped your career.
              </p>
            </div>
            <div className="grid prog-grid">
              <article className="prog">
                <h3>Eminent alum & external speakers</h3>
                <p>
                  Conversations with alumni who have gone on to lead businesses, build institutions and break new ground —
                  plus external voices worth your time.
                </p>
              </article>
              <article className="prog">
                <h3>Complementary health assessment</h3>
                <p>by CONNECT & HEAL at the venue. Drop by through the day for a complimentary health assessment between sessions.</p>
              </article>
              <article className="prog">
                <h3>Networking and camaraderie</h3>
                <p>Over cocktails & dinner — with friends & ex-colleagues. The part of the evening nobody wants to end.</p>
              </article>
            </div>
            <div className="archive-note mt-3">
              <strong>Running order:</strong> the detailed agenda, speaker line-up and timings are emailed to registered
              members ahead of the conference. Doors open through the morning of Saturday, 31 October 2026.
            </div>
          </div>
        </section>

        <section className="section section--mist" id="fees">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Registration fees</p>
              <h2>Early bird and at-the-gate pricing</h2>
              <p className="lede">The early-bird window closed on 10 October 2026. At-the-gate rates now apply.</p>
            </div>
            <p className="table-caption">
              All amounts in Indian Rupees (₹). The couple rate covers an alumnus and their partner; the additional rate
              applies to each extra guest.
            </p>
            <div className="table-scroll">
              <table className="fee-table">
                <thead>
                  <tr>
                    <th scope="col">Registration window</th>
                    <th scope="col">Single</th>
                    <th scope="col">Couple</th>
                    <th scope="col">Additional guest</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="is-closed">
                    <th scope="row">
                      Early bird <small>closed 10 October 2026</small>
                    </th>
                    <td><span className="strike">₹2,000</span></td>
                    <td><span className="strike">₹3,500</span></td>
                    <td><span className="strike">₹1,500</span></td>
                  </tr>
                  <tr className="is-open">
                    <th scope="row">
                      At the gate <small>current rates</small>
                    </th>
                    <td><strong>₹2,500</strong></td>
                    <td><strong>₹4,000</strong></td>
                    <td><strong>₹2,000</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="scroll-hint">Swipe the table sideways to see all four columns →</p>
            <div className="fee-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8h.01M11 12h1v4h1" />
              </svg>
              <span>
                Your registration covers all speaker sessions, the complimentary health assessment by CONNECT & HEAL at
                the venue, and the evening of networking with cocktails and dinner. Seats are confirmed once payment is
                received and your transfer details are shared with us.
              </span>
            </div>
          </div>
        </section>

        <section className="section" id="pay">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Pay & register now</p>
              <h2>Two easy ways to pay</h2>
              <p className="lede">
                Pay by NEFT/IMPS bank transfer, or scan the UPI QR code with any UPI app. Either way, please tell us you
                have paid so we can confirm your seat.
              </p>
            </div>
            <div className="pay-grid">
              <article className="bank-card">
                <h3>NEFT / IMPS bank transfer</h3>
                <ul className="bank-list">
                  <li>
                    <span>IFSC code</span>
                    <strong>
                      KKBK0001404 <CopyButton value="KKBK0001404" />
                    </strong>
                  </li>
                  <li>
                    <span>Bank</span>
                    <strong>Kotak Mahindra, Kandivali (E) Branch</strong>
                  </li>
                  <li>
                    <span>Beneficiary</span>
                    <strong>P&G Alumni Association of India</strong>
                  </li>
                  <li>
                    <span>A/c number</span>
                    <strong>
                      678010009641 (Saving) <CopyButton value="678010009641" />
                    </strong>
                  </li>
                </ul>
                <p className="pay-alert">
                  Please inform transfer details to{" "}
                  <a href="mailto:haribalsm@gmail.com?subject=Conference%202026%20payment%20details">haribalsm@gmail.com</a>
                </p>
              </article>
              <article className="qr-card">
                <h3>Scan & pay through any UPI app</h3>
                <img
                  src="/assets/upi-qr-kotak.png"
                  width={216}
                  height={216}
                  alt="UPI QR code for P and G Alumni Association of India, Kotak Mahindra Bank."
                />
                <p className="qr-card__upi">
                  0791404A00691954.bqr@kotak <CopyButton value="0791404A00691954.bqr@kotak" />
                </p>
                <dl>
                  <dt>Beneficiary:</dt>
                  <dd>P AND G ALUMNI ASSOCIATION OF INDIA</dd>
                  <br />
                  <dt>UPI ID:</dt>
                  <dd>0791404A00691954.bqr@kotak</dd>
                  <br />
                  <dt>Merchant code:</dt>
                  <dd>1512038A</dd>
                </dl>
              </article>
            </div>
            <div className="archive-note mt-3">
              <strong>After paying, email us:</strong> send your name, the names of any guests, the amount paid and the
              transaction reference to{" "}
              <a href="mailto:haribalsm@gmail.com?subject=Conference%202026%20payment%20details">haribalsm@gmail.com</a>,
              copying <a href="mailto:sec@pgaai.in">sec@pgaai.in</a>. We will confirm your registration by return email.
            </div>
          </div>
        </section>

        <section className="section section--mist" id="venue">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Venue</p>
              <h2>St. Regis, Mumbai</h2>
              <p className="lede">Lower Parel, Mumbai — easily reached by road and rail, with valet parking at the hotel.</p>
            </div>
            <div className="venue-grid">
              <div>
                <ul className="facts">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M12 21s-7-5.6-7-11a7 7 0 1 1 14 0c0 5.4-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    <span>
                      <strong>The St. Regis Mumbai</strong>
                      <br />
                      462, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013
                    </span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M8 3v4M16 3v4M3 11h18" />
                    </svg>
                    <span>
                      <strong>Saturday, 31 October 2026</strong> — agenda and timings shared with registered members
                    </span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M3 6h18v12H3z" />
                      <path d="M3 10h18" />
                    </svg>
                    <span>Complimentary health assessment desk by CONNECT & HEAL at the venue</span>
                  </li>
                </ul>
                <div className="btn-row">
                  <a className="btn btn--primary" href="https://www.google.com/maps/search/?api=1&query=The+St.+Regis+Mumbai" target="_blank" rel="noopener noreferrer">
                    Open in Google Maps <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <a className="btn btn--ghost" href="/assets/calendar/conference-2026.ics" download>
                    Add to calendar
                  </a>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title="Map showing The St. Regis Mumbai"
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.8135%2C18.9895%2C72.8365%2C19.0075&layer=mapnik&marker=18.9985%2C72.8250"
                />
                <p className="map-fallback">
                  Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="wrap">
            <div className="section-head center">
              <p className="eyebrow">Questions</p>
              <h2>Need help with your registration?</h2>
              <p className="lede">
                Write to the chapter secretariat or to the registration desk — a fellow alumnus will get back to you.
              </p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
              <article className="value">
                <h3>Chapter secretariat</h3>
                <p><a href="mailto:sec@pgaai.in">sec@pgaai.in</a></p>
              </article>
              <article className="value">
                <h3>Registration & payments</h3>
                <p><a href="mailto:haribalsm@gmail.com">haribalsm@gmail.com</a></p>
              </article>
              <article className="value">
                <h3>Other events</h3>
                <p><Link href="/events/2025-conference">Conference 2025 archive</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--mist">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Also from PGAAI</p>
              <h2>Last year’s conference</h2>
            </div>
            <div className="btn-row">
              <Link className="btn btn--ghost" href="/events/2025-conference">
                Learning & Networking Conference 2025 — archive <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <Link className="btn btn--ghost" href="/#events">
                Back to all events
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="2026" />
    </>
  );
}

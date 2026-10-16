import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Learning & Networking Conference 2025 — Event archive",
  description:
    "Archive page for the PGAAI Learning & Networking Conference 2025, held on 11 October 2025 at St. Regis, Mumbai — speakers, a complimentary health assessment by CONNECT & HEAL, and networking over cocktails and dinner.",
  alternates: { canonical: "https://pgaai.in/events/2025-conference" },
  openGraph: {
    title: "PGAAI Learning & Networking Conference 2025 — archive",
    description:
      "Held 11 October 2025 at St. Regis, Mumbai. Speakers, complimentary health assessment, networking and camaraderie over cocktails and dinner.",
    url: "https://pgaai.in/events/2025-conference",
    images: ["/assets/event-2025-flyer.png"],
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "PGAAI Learning & Networking Conference 2025",
  startDate: "2025-10-11",
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
};

export default function Conference2025Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <main id="main">
        <nav className="breadcrumb wrap" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#events">Events</Link></li>
            <li aria-current="page">Conference 2025</li>
          </ol>
        </nav>

        <section className="event-hero">
          <div className="wrap event-hero__grid">
            <div>
              <span className="badge badge--past">Event concluded · archive</span>
              <h1>Learning & Networking Conference 2025</h1>
              <p className="lede">
                The 2025 edition of the India chapter’s annual conference was held on 11 October 2025 at St. Regis,
                Mumbai. It set the format members now expect: eminent alum and external speakers, a complimentary health
                assessment at the venue, and an evening of networking and camaraderie over cocktails and dinner.
              </p>
              <div className="event-hero__key">
                <div><span>Held on</span><strong>Saturday, 11 October 2025</strong></div>
                <div><span>Venue</span><strong>St. Regis, Mumbai</strong></div>
                <div><span>Hosted by</span><strong>P&G Alumni Association of India</strong></div>
              </div>
              <div className="btn-row">
                <Link className="btn btn--solid-light" href="/events/2026-conference">
                  See the 2026 conference <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <a className="btn btn--light" href="#fees">Fees as published</a>
                <a className="btn btn--light" href="mailto:sec@pgaai.in?subject=Sharing%20memories%20from%20the%202025%20conference">
                  Share your memories
                </a>
              </div>
            </div>
            <div className="flyer-frame">
              <img
                src="/assets/event-2025-flyer.png"
                width={622}
                height={812}
                alt="Event poster: Learning & Networking Conference 2025, 11 October 2025, St. Regis, Mumbai — early bird and at-the-gate fees, bank transfer details and UPI QR code."
              />
              <a className="flyer-frame__link" href="/assets/event-2025-flyer.png" target="_blank" rel="noopener noreferrer">
                View the full poster ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">The programme</p>
              <h2>What the day looked like</h2>
              <p className="lede">Three parts, in the order members enjoy them most.</p>
            </div>
            <div className="grid prog-grid">
              <article className="prog">
                <h3>Eminent alum & external speakers</h3>
                <p>Alumni who have gone on to lead businesses and institutions, alongside external speakers, shared what they are learning now.</p>
              </article>
              <article className="prog">
                <h3>Complementary health assessment</h3>
                <p>by CONNECT & HEAL at the venue — available to every member attending through the day.</p>
              </article>
              <article className="prog">
                <h3>Networking and camaraderie</h3>
                <p>Over cocktails & dinner with friends & ex-colleagues — the highlight of the 2025 edition.</p>
              </article>
            </div>
            <div className="archive-note mt-3">
              <strong>This event has concluded.</strong> Registration and payment for the 2025 conference are closed. To
              share photographs, feedback or a memory from the day, write to{" "}
              <a href="mailto:sec@pgaai.in?subject=Sharing%20memories%20from%20the%202025%20conference">sec@pgaai.in</a> —
              we would love to add it to the chapter archive.
            </div>
          </div>
        </section>

        <section className="section section--mist" id="fees">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Archive</p>
              <h2>Fees as published for 2025</h2>
              <p className="lede">Retained here for reference. The early-bird window for 2025 closed on 1 October 2025.</p>
            </div>
            <p className="table-caption">All amounts in Indian Rupees (₹), as published on the 2025 event poster.</p>
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
                  <tr>
                    <th scope="row">
                      Early bird <small>until 1 October 2025</small>
                    </th>
                    <td><strong>₹2,000</strong></td>
                    <td><strong>₹3,500</strong></td>
                    <td><strong>₹1,500</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      At the gate <small>from 2 October 2025</small>
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
              <span>Fees covered all speaker sessions, the complimentary health assessment at the venue, and the evening of cocktails and dinner.</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Payment record</p>
              <h2>How members paid in 2025</h2>
              <p className="lede">Kept on record so members can match old transactions in their statements.</p>
            </div>
            <div className="pay-grid">
              <article className="bank-card">
                <h3>NEFT / IMPS bank transfer</h3>
                <ul className="bank-list">
                  <li><span>IFSC code</span><strong>KKBK0001404</strong></li>
                  <li><span>Bank</span><strong>Kotak Mahindra, Kandivali (E) Branch</strong></li>
                  <li><span>Beneficiary</span><strong>P&G Alumni Association of India</strong></li>
                  <li><span>A/c number</span><strong>678010009641 (Saving)</strong></li>
                </ul>
                <p className="pay-alert">
                  Transfer details were to be informed to <a href="mailto:haribalsm@gmail.com">haribalsm@gmail.com</a>
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
                <p className="qr-card__upi">0791404A00691954.bqr@kotak</p>
                <dl>
                  <dt>Beneficiary:</dt>
                  <dd>P AND G ALUMNI ASSOCIATION OF INDIA</dd>
                  <br />
                  <dt>Merchant code:</dt>
                  <dd>1512038A</dd>
                </dl>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--mist">
          <div className="wrap about-grid">
            <div>
              <p className="eyebrow">Looking ahead</p>
              <h2>Conference 2026 — registration is open</h2>
              <p>
                The next edition returns to St. Regis, Mumbai on <strong>Saturday, 31 October 2026</strong> with the same
                three-part format and the same warm room full of P&G friends.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/events/2026-conference">
                  Conference 2026 details <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <Link className="btn btn--ghost" href="/events/2026-conference#pay">
                  Pay & register now
                </Link>
              </div>
            </div>
            <div className="flyer-frame" style={{ maxWidth: 320 }}>
              <img src="/assets/event-2026-flyer.jpg" width={816} height={1056} alt="Poster for the 2026 conference." />
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="wrap">
            <div className="section-head center">
              <p className="eyebrow">Questions</p>
              <h2>Ask the chapter</h2>
              <p className="lede">Anything about the 2025 archive or the upcoming 2026 conference.</p>
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
                <h3>Next event</h3>
                <p><Link href="/events/2026-conference">Conference 2026 — 31 Oct 2026</Link></p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="2025" />
    </>
  );
}

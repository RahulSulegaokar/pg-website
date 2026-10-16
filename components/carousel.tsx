"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = 3;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused, index]);

  function go(next: number) {
    setIndex((next + SLIDES) % SLIDES);
  }

  return (
    <div
      className="carousel"
      aria-roledescription="carousel"
      aria-label="Featured PGAAI events"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(index - 1);
        if (event.key === "ArrowRight") go(index + 1);
      }}
    >
      <div className="carousel__track" aria-live="polite">
        <figure className={`carousel__slide${index === 0 ? " is-active" : ""}`} role="tabpanel" aria-label="Conference 2026">
          <img
            src="/assets/event-2026-flyer.jpg"
            width={816}
            height={1056}
            alt="Poster for the P&G Alumni Association of India Learning & Networking Conference 2026, 31 October 2026 at St. Regis, Mumbai."
          />
          <figcaption className="carousel__cta">
            <span>
              <h3>Learning & Networking Conference 2026</h3>
              <p>31 October 2026 · St. Regis, Mumbai</p>
            </span>
            <Link className="btn btn--solid-light btn--sm" href="/events/2026-conference">
              Event details
            </Link>
          </figcaption>
        </figure>

        <figure className={`carousel__slide${index === 1 ? " is-active" : ""}`} role="tabpanel" aria-label="Conference 2025">
          <img
            src="/assets/event-2025-flyer.png"
            width={622}
            height={812}
            alt="Poster for the Learning & Networking Conference 2025 held on 11 October 2025 at St. Regis, Mumbai."
          />
          <figcaption className="carousel__cta">
            <span>
              <h3>Learning & Networking Conference 2025</h3>
              <p>11 October 2025 · St. Regis, Mumbai · Archive</p>
            </span>
            <Link className="btn btn--solid-light btn--sm" href="/events/2025-conference">
              View archive
            </Link>
          </figcaption>
        </figure>

        <div className={`carousel__slide${index === 2 ? " is-active" : ""}`} role="tabpanel" aria-label="About the India chapter">
          <div className="carousel__panel">
            <span className="carousel__panel-mark" aria-hidden="true">
              P&G
            </span>
            <h3>
              One network.
              <br />
              Lifelong relationships.
            </h3>
            <p>
              Speakers, health assessments, cocktails and dinner — with the friends and ex-colleagues you built your
              career alongside.
            </p>
            <Link className="btn btn--light btn--sm" href="/#membership">
              Join the chapter <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="carousel__nav">
        <button type="button" aria-label="Previous slide" onClick={() => go(index - 1)}>
          ←
        </button>
        <button type="button" aria-label="Next slide" onClick={() => go(index + 1)}>
          →
        </button>
      </div>
      <div className="carousel__dots" role="tablist" aria-label="Choose slide">
        {Array.from({ length: SLIDES }, (_, slide) => (
          <button
            key={slide}
            type="button"
            role="tab"
            aria-label={`Show slide ${slide + 1}`}
            aria-selected={slide === index}
            onClick={() => go(slide)}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { useToast } from "./toast";

export function NewsletterForm() {
  const announce = useToast();
  const [email, setEmail] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    announce(`Thanks — ${email} is on the list. (Demo form)`);
    setEmail("");
  }

  return (
    <form className="subscribe" onSubmit={onSubmit} noValidate>
      <label className="visually-hidden" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button className="btn btn--solid-light" type="submit">
        Subscribe
      </button>
    </form>
  );
}

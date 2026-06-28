"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { studio } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="bg-bone px-5 py-24 text-ink md:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-ink/50">Contact</p>
            <h2 className="display-xl text-6xl md:text-8xl">
              Start a
              <br />
              Project
            </h2>
            <a
              href={`mailto:${studio.email}`}
              className="mt-8 inline-block border-b border-ink/30 pb-1 text-lg transition-colors hover:border-ink"
            >
              {studio.email}
            </a>
            <p className="mt-2 font-serif text-lg italic text-ink/60">{studio.name}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <div className="flex h-full flex-col justify-center rounded-sm border border-ink/15 p-8">
              <h3 className="font-display text-2xl uppercase tracking-tightest">Thank you.</h3>
              <p className="mt-2 text-ink/60">
                Your enquiry is in. We&apos;ll be in touch within two business days.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <Field name="name" label="Name" />
              <Field name="email" label="Email" type="email" />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-ink/50">
                  Tell us about your space
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="resize-none border-b border-ink/25 bg-transparent pb-2 outline-none transition-colors focus:border-ink"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 self-start rounded-full bg-ink px-8 py-3 text-sm font-medium text-bone transition-opacity hover:opacity-80 disabled:opacity-50"
              >
                {status === "loading" ? "Sending…" : "Send enquiry →"}
              </button>

              {status === "error" && <p className="text-sm text-red-600">{error}</p>}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
}: {
  name: string;
  label: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-ink/50">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="border-b border-ink/25 bg-transparent pb-2 outline-none transition-colors focus:border-ink"
      />
    </div>
  );
}

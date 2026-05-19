import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--espresso)]">
      {/* Background video with image poster fallback */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroImage}
        aria-hidden="true"
      >
        {/* Drop in a real hero.mp4 here when available */}
      </video>
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Warm dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--espresso) 70%, transparent) 0%, color-mix(in oklab, var(--espresso) 60%, transparent) 60%, color-mix(in oklab, var(--espresso) 75%, transparent) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 text-center text-[var(--cream)]">
        <span className="mb-7 text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--cream)]/75">
          Raleigh, NC &nbsp;—&nbsp; Est. 2011
        </span>

        <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Coffee Worth
          <br />
          <span className="italic font-normal">Celebrating.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base font-light text-[var(--cream)]/80 sm:text-lg">
          Craft-roasted in Raleigh. Prepared to order.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#locations"
            className="inline-flex h-11 items-center justify-center rounded-[10px] bg-[var(--amber)] px-6 text-sm font-semibold text-[var(--espresso)] transition-colors hover:bg-[var(--yellow)]"
          >
            Order Online
          </a>
          <a
            href="#coffee"
            className="inline-flex h-11 items-center justify-center rounded-[10px] border border-[var(--cream)]/70 px-6 text-sm font-medium text-[var(--cream)] transition-colors hover:bg-[var(--cream)] hover:text-[var(--espresso)]"
          >
            Shop Our Coffee
          </a>
        </div>
      </div>

      <a
        href="#coffee"
        aria-label="Scroll to coffee"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--cream)]/70 transition-colors hover:text-[var(--cream)]"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
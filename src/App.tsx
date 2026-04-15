import { useEffect, useState } from "react";

const navLinks: { name: string; href: string; icon: "users" | "discord" | "bag" }[] = [
  { name: "Help Center", href: "https://help.driftrealm.lol", icon: "users" },
  { name: "Discord", href: "https://discord.com/invite/driftrealm", icon: "discord" },
  { name: "Store", href: "https://store.driftrealm.lol", icon: "bag" },
];

function NavIcon({ type }: { type: "users" | "discord" | "bag" }) {
  if (type === "users") {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (type === "bag") {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 640 512" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
      <path d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91 337.461 337.461 0 0 0-14.9 30.6 447.848 447.848 0 0 0-134.426 0 309.541 309.541 0 0 0-15.135-30.6 1.89 1.89 0 0 0-1.924-.91A483.689 483.689 0 0 0 116.085 69.137a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375A487.666 487.666 0 0 0 176.02 479.918a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588 321.173 321.173 0 0 1-45.868-21.853 1.885 1.885 0 0 1-.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1-.162 3.126 301.407 301.407 0 0 1-45.89 21.83 1.875 1.875 0 0 0-1 2.611 391.055 391.055 0 0 0 30.014 48.815 1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352C623.729 277.594 590.933 167.465 524.531 69.836ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239S193.056 219.1 222.491 219.1c29.665 0 53.306 26.82 52.843 59.239 0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239S388.437 219.1 417.871 219.1c29.667 0 53.307 26.82 52.844 59.239 0 32.654-23.177 59.241-52.844 59.241Z" />
    </svg>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    // Failsafe so the page does not stay blocked if video buffering is slow.
    const timeoutId = window.setTimeout(() => {
      setIsVideoReady(true);
    }, 9000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        className={`absolute inset-0 h-full w-full object-cover motion-safe:animate-[bgZoom_22s_ease-in-out_infinite_alternate] transition-opacity duration-500 ${
          isVideoReady ? "opacity-100" : "opacity-0"
        }`}
        src="https://driftsociety.lol/img/bg.mp4"
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoReady(true)}
        onCanPlayThrough={() => setIsVideoReady(true)}
      />

      <div className="absolute inset-0 bg-black/35 backdrop-blur-[3px]" />

      {!isVideoReady && (
        <div className="absolute inset-0 z-20 grid place-items-center bg-[#0a0a0a]">
          <p className="animate-pulse text-sm tracking-[0.2em] text-white/70">LOADING</p>
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1540px] flex-col px-4 pt-5 pb-14 sm:px-8">
        <header className="animate-[fadeDown_700ms_ease-out]">
          <nav className="mx-auto w-full rounded-full border border-white/10 bg-[rgba(10,10,10,0.3)] p-2 shadow-lg backdrop-blur-[16px]">
            <div className="flex items-center justify-between gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 transition-transform duration-200 hover:scale-105"
              >
                <img
                  src="/drift-realm-logo.png"
                  alt="Drift Realm logo"
                  className="h-[34px] w-auto"
                />
                <span className="hidden text-lg font-semibold tracking-wide text-white/65 sm:block">
                  Drift Realm
                </span>
              </a>

              <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 p-1 md:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/65 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                  >
                    <span className="opacity-70">
                      <NavIcon type={link.icon} />
                    </span>
                    {link.name}
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 md:hidden"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {isMenuOpen && (
            <div className="mx-auto mt-2 w-full rounded-xl border border-white/10 bg-[rgba(10,10,10,0.3)] p-3 backdrop-blur-[16px] md:hidden">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/85 transition-colors hover:bg-white/10"
                  >
                    <span className="opacity-70">
                      <NavIcon type={link.icon} />
                    </span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        <section className="flex flex-1 items-center justify-center text-center">
          <div className="w-full animate-[fadeUp_900ms_ease-out]">
            <h1 className="mt-5 text-[clamp(1.85rem,5.6vw,4.2rem)] font-bold leading-none tracking-[0.02em] sm:whitespace-nowrap">
              Welcome to Drift Realm
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/80 sm:text-lg">
              The best FiveM drifting server
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

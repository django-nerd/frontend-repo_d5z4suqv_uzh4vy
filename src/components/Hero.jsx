import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col items-start">
        <span className="inline-flex items-center rounded-full bg-black/80 text-white px-3 py-1 text-xs font-medium shadow-lg">
          Beirut, Lebanon
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-white max-w-4xl">
          Joseph El Khoury
        </h1>
        <p className="mt-2 text-xl sm:text-2xl text-zinc-700 dark:text-zinc-300 font-medium">
          Digital Designer & Front‑End Developer
        </p>
        <p className="mt-5 text-zinc-700 dark:text-zinc-300 text-lg max-w-2xl">
          I craft modern, minimalist interfaces with a focus on motion, accessibility, and performance.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-[#0055FF] text-white px-6 py-3 hover:brightness-110 transition font-medium shadow-sm"
          >
            View Selected Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-zinc-300/80 dark:border-zinc-700 px-6 py-3 hover:bg-white/70 dark:hover:bg-zinc-800/60 transition font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Soft gradient to ensure text legibility while keeping Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white dark:from-zinc-950/50 dark:via-zinc-950/60 dark:to-zinc-950" />
    </section>
  );
}

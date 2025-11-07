import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-12 flex flex-col items-start">
        <span className="inline-flex items-center rounded-full bg-zinc-900/90 text-white px-3 py-1 text-xs font-medium shadow-lg">Available for freelance</span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight text-zinc-900 dark:text-white max-w-3xl">
          Building polished web experiences with a modern, playful touch
        </h1>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300 text-lg max-w-2xl">
          Frontend Engineer crafting interactive sites, delightful animations, and performant apps.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="rounded-md bg-zinc-900 text-white px-5 py-2.5 hover:bg-zinc-800 transition font-medium">View Projects</a>
          <a href="#contact" className="rounded-md border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 hover:bg-white/60 dark:hover:bg-zinc-800/60 transition font-medium">Contact</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white dark:from-zinc-950/40 dark:via-zinc-950/50 dark:to-zinc-950" />
    </section>
  );
}

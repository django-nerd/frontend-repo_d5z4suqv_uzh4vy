import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="relative h-44 w-44 sm:h-56 sm:w-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=900&auto=format&fit=crop"
              alt="Portrait of Joseph El Khoury"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
            <MapPin className="h-4 w-4 text-[#0055FF]" />
            <span>Beirut, Lebanon</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">About Me</h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I’m Joseph El Khoury, a creative technologist blending digital design and front‑end engineering to craft
            sophisticated, minimalist experiences. My work balances clarity, motion, and usability—helping brands tell
            their story through thoughtful interfaces.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'Next.js', 'UI/UX', 'Figma', 'Tailwind', 'Motion Design'].map((skill) => (
              <span key={skill} className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

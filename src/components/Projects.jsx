import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description:
      'An immersive portfolio experience using Spline and WebGL with smooth scroll and section transitions.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: 'https://joseph-elkhoury-portfolio.vercel.app/',
  },
  {
    title: 'SaaS Dashboard',
    description:
      'A modular analytics dashboard with real-time charts, dark mode, and accessible components.',
    tags: ['Next.js', 'Tailwind', 'Recharts'],
    link: '#',
  },
  {
    title: 'Design System Starter',
    description:
      'A reusable UI kit with tokens, themes, and documentation to speed up product shipping.',
    tags: ['Storybook', 'TypeScript', 'Radix UI'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-10">
          <Code2 className="h-5 w-5 text-zinc-500" />
          <h2 className="text-2xl font-semibold tracking-tight">Selected Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300" />
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

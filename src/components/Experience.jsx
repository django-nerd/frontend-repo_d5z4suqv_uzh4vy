import { Calendar } from 'lucide-react';

const timeline = [
  {
    role: 'Senior Front‑End Engineer',
    company: 'Studio North',
    date: '2023 — Present',
    highlight: 'Leading interactive marketing sites with motion-first approach.',
  },
  {
    role: 'Product Designer',
    company: 'Freelance',
    date: '2020 — 2023',
    highlight: 'Delivered brand websites and design systems for startups.',
  },
  {
    role: 'BSc Computer Science',
    company: 'LAU',
    date: '2016 — 2020',
    highlight: 'Human-computer interaction focus and web technologies.',
  },
];

export default function Experience() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Calendar className="h-5 w-5 text-zinc-500" />
          <h2 className="text-2xl font-semibold tracking-tight">Timeline / Experience</h2>
        </div>
        <ol className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4">
          {timeline.map((item) => (
            <li key={item.role} className="mb-10 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#0055FF] text-white text-xs shadow">
                {item.date.split(' ')[0]}
              </span>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{item.role}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.company} · {item.date}</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.highlight}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

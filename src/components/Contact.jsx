import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300 max-w-2xl">
          Have a project in mind or want to collaborate? I’m open to freelance and interesting opportunities.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@josephelkhoury.dev"
            className="inline-flex items-center gap-2 rounded-md bg-[#0055FF] text-white px-5 py-2.5 hover:brightness-110 transition"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 hover:bg-white/70 dark:hover:bg-zinc-800/60 transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 hover:bg-white/70 dark:hover:bg-zinc-800/60 transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

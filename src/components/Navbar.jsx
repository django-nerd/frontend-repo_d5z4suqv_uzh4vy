import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-lg">
          <span className="align-middle">Joseph El Khoury</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="mailto:hello@josephelkhoury.dev"
            aria-label="Email"
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

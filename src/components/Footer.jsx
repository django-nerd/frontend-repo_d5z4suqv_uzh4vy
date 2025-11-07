export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Joseph El Khoury. All rights reserved.
        </p>
        <div className="text-xs text-zinc-500">
          Built with React, Tailwind, and a sprinkle of 3D.
        </div>
      </div>
    </footer>
  );
}

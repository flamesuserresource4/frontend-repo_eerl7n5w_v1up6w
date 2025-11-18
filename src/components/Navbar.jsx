import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-14 items-center justify-between rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white">Aurexis Solution</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a className="hover:text-white transition" href="#services">Services</a>
            <a className="hover:text-white transition" href="#work">Work</a>
            <a className="hover:text-white transition" href="#about">About</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-500/20 transition">Let's talk</a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <div className="px-4 py-3 flex flex-col gap-3 text-slate-200">
              <a className="hover:text-white transition" href="#services" onClick={() => setOpen(false)}>Services</a>
              <a className="hover:text-white transition" href="#work" onClick={() => setOpen(false)}>Work</a>
              <a className="hover:text-white transition" href="#about" onClick={() => setOpen(false)}>About</a>
              <a className="hover:text-white transition" href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

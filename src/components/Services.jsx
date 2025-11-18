import { Code2, Hexagon, Rocket, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Sparkles className="h-5 w-5 text-cyan-300"/>,
    title: 'Brand & Visual Systems',
    desc: 'Minimal identities, grid systems, and design languages that scale.'
  },
  {
    icon: <Hexagon className="h-5 w-5 text-cyan-300"/>,
    title: '3D & Motion',
    desc: 'Tasteful Spline scenes, micro-interactions, and buttery transitions.'
  },
  {
    icon: <Code2 className="h-5 w-5 text-cyan-300"/>,
    title: 'Web Engineering',
    desc: 'Vite + React frontends, FastAPI backends, and modern tooling.'
  },
  {
    icon: <Rocket className="h-5 w-5 text-cyan-300"/>,
    title: 'Performance & SEO',
    desc: 'Ship blazing-fast sites optimized for Core Web Vitals.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">What we do</h2>
          <p className="mt-2 text-slate-300">A focused set of services to take your product from concept to launch.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 hover:bg-white/10 transition">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/20">
                {s.icon}
              </div>
              <h3 className="mt-4 text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

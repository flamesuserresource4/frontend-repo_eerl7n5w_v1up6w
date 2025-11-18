import { motion } from 'framer-motion';

const items = [
  {
    title: 'Fintech Dashboard',
    tag: 'Web App',
    img: 'https://images.unsplash.com/photo-1551281044-8e146f81dc4b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'AI Landing',
    tag: 'Marketing',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'E‑commerce',
    tag: 'Storefront',
    img: 'https://images.unsplash.com/photo-1520608421741-68228b76b6ae?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected work</h2>
          <p className="mt-2 text-slate-300">A snapshot of projects we craft with precision and motion.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((card, i) => (
            <motion.a key={i} href="#contact" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <img src={card.img} alt="" className="h-56 w-full object-cover opacity-80 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <span className="text-xs text-cyan-300/80">{card.tag}</span>
                <h3 className="text-white font-medium">{card.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.6),transparent_60%)]" />
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 text-center backdrop-blur-xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Have a project in mind?</h2>
          <p className="mt-2 text-slate-300">Tell us about your goals and we’ll craft a minimal, 3D-enhanced experience that performs.</p>
          <form onSubmit={(e)=> e.preventDefault()} className="mt-6 grid grid-cols-1 gap-3">
            <input required placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"/>
            <input required type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"/>
            <textarea required placeholder="Project brief" rows="4" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"/>
            <button className="mt-2 inline-flex justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:bg-slate-100 transition">Send inquiry</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

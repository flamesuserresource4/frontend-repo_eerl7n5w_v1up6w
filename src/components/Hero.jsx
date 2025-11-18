import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 flex items-center">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.25),transparent_40%)] pointer-events-none" />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
          >
            Minimal, interactive experiences for modern brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-lg sm:text-xl text-slate-300"
          >
            We design and build fast, futuristic websites with tasteful 3D, smooth motion, and a clean visual system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-white/90 text-slate-900 px-6 py-3 font-medium hover:bg-white transition">See our work</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white/90 hover:bg-white/10 transition">Start a project</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <CTA />
      <footer className="py-10 text-center text-sm text-slate-400">© {new Date().getFullYear()} Aurexis Solution. All rights reserved.</footer>
    </div>
  );
}

export default App;
import { Menu, Scissors, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-accent" />
            <span className="font-poppins text-xl font-bold text-white">Haircut Avenue.</span>
          </Link>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLinks />
            <button className="rounded-full bg-accent px-6 py-2 font-medium text-primary transition hover:bg-accent-hover">
              S'INSCRIRE →
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              <NavLinks mobile />
              <button className="mt-4 w-full rounded-full bg-accent px-6 py-2 font-medium text-primary transition hover:bg-accent-hover">
                S'INSCRIRE →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLinks({ mobile }: { mobile?: boolean }) {
  const links = [
    { to: "/", text: "Accueil" },
    { to: "/tarifs", text: "Tarifs" },
    { to: "/apropos", text: "À propos" },
    { to: "/franchise", text: "Devenir une franchise" },
  ];

  return links.map((link) => (
    <Link
      key={link.to}
      to={link.to}
      className={`
        transition-colors
        ${mobile
          ? "block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-primary-light"
          : "text-white/90 hover:text-white"
        }
      `}
    >
      {link.text}
    </Link>
  ));
}
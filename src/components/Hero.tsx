import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-primary">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622292776526-3e4d0b9e5d9f')] 
        opacity-20 bg-cover bg-center mix-blend-overlay"
      />
      
      <div className="relative flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl pt-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-left"
          >
            <h1 className="mb-6 font-poppins text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Un style impeccable,<br />
              sans limites avec Haircut Avenue
            </h1>
            <p className="mb-8 text-lg text-white/90 sm:text-xl">
              Découvrez l'excellence de la coiffure avec nos abonnements premium. 
              Une expérience sur mesure pour votre style unique.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button 
                onClick={() => navigate('/tarifs')}
                className="rounded-full bg-gradient-to-r from-accent to-accent-hover px-8 py-3 
                  font-medium text-primary transition hover:from-accent-hover hover:to-accent uppercase"
              >
                S'abonner au forfait royal
              </button>
              <button 
                onClick={() => navigate('/tarifs')}
                className="rounded-full border-2 border-white px-8 py-3 
                  font-medium text-white transition hover:bg-white/10 uppercase"
              >
                Découvrir les offres
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
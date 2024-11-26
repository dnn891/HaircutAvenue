import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Scissors, TrendingUp } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-primary pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-4 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <h1 className="mb-6 font-poppins text-4xl font-bold text-white sm:text-5xl">
              Notre Histoire
            </h1>
            <p className="max-w-2xl text-lg text-white/80">
              Depuis notre création, Haircut Avenue s'est engagé à redéfinir l'expérience de la coiffure moderne. Notre mission est de rendre accessible l'excellence capillaire à tous nos clients.
            </p>
          </div>

          <div className="mb-24">
            <h2 className="mb-8 font-poppins text-3xl font-bold text-white">Notre Vision</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-8">
                <h3 className="mb-4 font-poppins text-xl font-semibold text-white">Excellence</h3>
                <p className="text-white/80">
                  Nous nous efforçons d'offrir une qualité de service inégalée, en utilisant les meilleures techniques et produits du marché.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-8">
                <h3 className="mb-4 font-poppins text-xl font-semibold text-white">Innovation</h3>
                <p className="text-white/80">
                  Nous restons à la pointe des dernières tendances et technologies pour vous offrir le meilleur de la coiffure moderne.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-8 font-poppins text-3xl font-bold text-white">Nos Chiffres</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Users, label: "Clients Satisfaits", value: "10,000+" },
                { icon: Scissors, label: "Coupes Réalisées", value: "50,000+" },
                { icon: Award, label: "Prix Gagnés", value: "15+" },
                { icon: TrendingUp, label: "Années d'Expérience", value: "12+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-white/5 p-6 text-center"
                >
                  <stat.icon className="mx-auto mb-4 h-8 w-8 text-accent" />
                  <div className="mb-2 text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
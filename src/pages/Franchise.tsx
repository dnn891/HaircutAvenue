import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BadgeDollarSign, Briefcase, GraduationCap, HeartHandshake } from 'lucide-react';

export function Franchise() {
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
              Devenir Franchisé Haircut Avenue
            </h1>
            <p className="max-w-2xl text-lg text-white/80">
              Rejoignez le réseau leader de la coiffure premium et développez votre propre salon avec notre soutien expert.
            </p>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-8">
              <h2 className="mb-6 font-poppins text-2xl font-bold text-white">Pourquoi nous rejoindre ?</h2>
              <ul className="space-y-4">
                {[
                  "Une marque reconnue dans le secteur de la coiffure",
                  "Un concept innovant et rentable",
                  "Une formation complète et un accompagnement continu",
                  "Des outils marketing performants",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80">
                    <span className="text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white/5 p-8">
              <h2 className="mb-6 font-poppins text-2xl font-bold text-white">Investissement</h2>
              <div className="space-y-4 text-white/80">
                <p>• Droit d'entrée : À partir de 25 000€</p>
                <p>• Investissement global : 80 000€ - 120 000€</p>
                <p>• Redevance : 5% du CA HT</p>
                <p>• Redevance publicitaire : 2% du CA HT</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 font-poppins text-3xl font-bold text-white">Notre Support</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Formation",
                  description: "Programme complet de formation initiale et continue",
                },
                {
                  icon: Briefcase,
                  title: "Business Plan",
                  description: "Aide à l'élaboration de votre business plan",
                },
                {
                  icon: HeartHandshake,
                  title: "Accompagnement",
                  description: "Support quotidien pour votre développement",
                },
                {
                  icon: BadgeDollarSign,
                  title: "Marketing",
                  description: "Outils marketing et communication clés en main",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-white/5 p-6 text-center"
                >
                  <item.icon className="mx-auto mb-4 h-8 w-8 text-accent" />
                  <h3 className="mb-2 font-poppins text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-accent p-8 text-center">
            <h2 className="mb-4 font-poppins text-2xl font-bold text-primary">Prêt à nous rejoindre ?</h2>
            <p className="mb-6 text-primary/80">
              Contactez-nous dès maintenant pour discuter de votre projet de franchise
            </p>
            <button className="rounded-full bg-primary px-8 py-3 font-medium text-white transition hover:bg-primary-light">
              Demander plus d'informations
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
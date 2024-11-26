import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Scissors, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Scissors,
    title: "Coupe professionnelle",
    description: "Des coiffeurs experts pour un résultat impeccable"
  },
  {
    icon: Award,
    title: "Soins premium",
    description: "Des produits haut de gamme pour vos cheveux"
  },
  {
    icon: Clock,
    title: "Service rapide",
    description: "Optimisez votre temps avec nos services efficaces"
  }
];

export function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-white py-24" id="apropos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-16 font-poppins text-3xl font-bold text-primary sm:text-4xl">
            Pourquoi nous choisir ?
          </h2>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 font-poppins text-xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
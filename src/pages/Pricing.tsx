import { motion } from 'framer-motion';
import { PricingCard } from '../components/PricingCard';

export function Pricing() {
  return (
    <div className="min-h-screen bg-primary pt-16">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-4 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 className="mb-4 font-poppins text-4xl font-bold text-white sm:text-5xl">
              Nos forfaits
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Choisissez le forfait qui correspond à vos besoins et profitez de nos services premium
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PricingCard
              title="Standard"
              price={29}
              description="Restez frais durant toute avec le Pack Standard"
              features={[
                { included: true, text: "2 coupe /mois" },
                { included: true, text: "Cadeau Haircut" },
                { included: false, text: "Shampoing" },
                { included: false, text: "Barbe" },
              ]}
            />
            
            <PricingCard
              title="Boss"
              price={49}
              description="2 semaines offertes si vous souscrivez a cet abonnement"
              features={[
                { included: true, text: "3 coupes / mois" },
                { included: true, text: "Barbe inclus" },
                { included: true, text: "Shampoing" },
                { included: true, text: "Pack Cadeau Haircut" },
              ]}
              isBestDeal
            />
            
            <PricingCard
              title="Royal"
              price={89}
              description="Venez vous coiffer quand vous le souhaitez"
              features={[
                { included: true, text: "Tout Pack Boss inclus" },
                { included: true, text: "Coupes illimitées" },
                { included: true, text: "Skin care" },
                { included: true, text: "-30% sur les extras" },
              ]}
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
import { PricingCard } from './PricingCard';

export function Pricing() {
  return (
    <section className="bg-purple-950 px-8 py-24" id="tarifs">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-3 gap-8">
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
    </section>
  );
}
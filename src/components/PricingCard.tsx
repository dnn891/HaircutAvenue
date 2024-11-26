interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: Array<{
    included: boolean;
    text: string;
  }>;
  isBestDeal?: boolean;
}

export function PricingCard({ title, price, description, features, isBestDeal }: PricingCardProps) {
  return (
    <div className={`rounded-3xl p-8 ${isBestDeal ? 'bg-purple-900 ring-2 ring-purple-400' : 'bg-purple-950'}`}>
      {isBestDeal && (
        <span className="mb-4 inline-block rounded-full bg-purple-400/30 px-4 py-1 text-sm text-purple-200">
          #bestdeal
        </span>
      )}
      
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <div className="mb-4 mt-2 flex items-baseline">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="ml-1 text-white/70">/mois</span>
      </div>
      
      <p className="mb-6 text-white/70">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            {feature.included ? (
              <span className="text-green-400">✓</span>
            ) : (
              <span className="text-gray-500">✕</span>
            )}
            <span className={feature.included ? 'text-white' : 'text-gray-500'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <button className="mt-8 w-full rounded-full bg-white px-6 py-3 font-medium text-purple-900 transition hover:bg-gray-100">
        Choisir ce forfait →
      </button>
    </div>
  );
}
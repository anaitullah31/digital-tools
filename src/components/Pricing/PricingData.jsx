import { use } from "react";
import PricingCard from "./PricingCard";

const PricingData = ({ allPricingData }) => {
  const pricing = use(allPricingData);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center pb-20">
        {pricing.map((subscription) => (
          <PricingCard key={subscription.id} subscription={subscription} />
        ))}
      </div>
    </div>
  );
};

export default PricingData;

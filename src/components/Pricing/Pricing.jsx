import { Suspense } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import PricingData from "./PricingData";

const loadingPringData = async () => {
  const res = await fetch("subscription.json");
  return res.json();
};

const Pricing = () => {
  const allPricingData = loadingPringData();
  return (
    <div>
      <SectionHeading
        title="Simple, Transparent Pricing"
        description="Choose the plan that fits your needs. Upgrade or downgrade anytime."
      />
      <div>
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <PricingData allPricingData={allPricingData} />
        </Suspense>
      </div>
    </div>
  );
};

export default Pricing;

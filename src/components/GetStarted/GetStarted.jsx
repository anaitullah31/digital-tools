import SectionHeading from "../SectionHeading/SectionHeading";
import GetStartedCard from "./GetStartedCard";
import Package from "../../assets/package.png";
import Rocket from "../../assets/rocket.png";
import User from "../../assets/user.png";

const GetStarted = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <SectionHeading
        title="Get Started in 3 Steps"
        description="Start using premium digital tools in minutes, not hours."
      />
      <div className="flex gap-8 pt-8">
        <GetStartedCard
          cardTitle="Create Account"
          cardDescription="Sign up for free in seconds. No credit card required to get started."
          image={User}
          index="01"
        />
        <GetStartedCard
          cardTitle="Choose Products"
          cardDescription="Browse our catalog and select the tools that fit your needs."
          image={Package}
          index="02"
        />
        <GetStartedCard
          cardTitle="Start Creating"
          cardDescription="Download and start using your premium tools immediately."
          image={Rocket}
          index="03"
        />
      </div>
    </div>
  );
};

export default GetStarted;

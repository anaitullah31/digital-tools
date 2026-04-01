import Button from "../Button/Button";
import Banner from "../../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto py-5 md:py-10 px-2">
      <div className="flex gap-8 justify-between items-center flex-col lg:flex-row-reverse">
        <img className="w-" src={Banner} />
        <div>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            <span className="">Supercharge Your</span> <br className="" />{" "}
            <span>Digital Workflow</span>
          </h1>
          <p className="py-6">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br className="hidden md:block" />
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-4">
            <Button>Explore Products</Button>
            <Button style="btn-outline btn-primary">
              <CiPlay1 /> Watch Vemo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import "./App.css";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Stat from "./components/Stat/Stat";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stat />
      <GetStarted />
      <Pricing />
      <div className="bg-[#101727] text-white">
        <Footer />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stat from "./components/Stat/Stat";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stat />
      <GetStarted />
      <div className="bg-[#101727] text-white">
        <Footer />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-[#101727] text-white">
        <Footer />
      </div>
    </>
  );
}

export default App;

import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Products from "./components/Products/Products";
import Stat from "./components/Stat/Stat";
import Workflow from "./components/Workflow/Workflow";
import SectionHeading from "./components/SectionHeading/SectionHeading";
import Cart from "./components/Cart/Cart";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToCart = useCallback((product) => {
    
    setCarts((prevCarts) => [...prevCarts, product]);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Stat />

      <div className="mb-8 mt-16">
        <SectionHeading
          title="Premium Digital Tools"
          description="Choose from our curated collection of premium digital products designed to boost your productivity and creativity."
        />

        <div className="mt-6 flex justify-center">
          <div className="flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => handleTab("product")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeTab === "product"
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow"
                  : "text-gray-700"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => handleTab("cart")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeTab === "cart"
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow"
                  : "text-gray-700"
              }`}
            >
              Cart ({carts.length})
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {activeTab === "product" && (
              <Products products={products} handleAddToCart={handleAddToCart} />
            )}
            {activeTab === "cart" && <Cart carts={carts} />}
          </>
        )}
      </div>

      <GetStarted />
      <Pricing />
      <Workflow />

      <div className="bg-[#101727] text-white">
        <Footer />
      </div>
    </>
  );
}

export default App;

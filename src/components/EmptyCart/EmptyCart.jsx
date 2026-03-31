import CartImage from "../../assets/products/shopping-cart.png";

const EmptyCart = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Cart</h2>

      <div className="flex flex-col items-center justify-center border border-gray-200 rounded-xl py-20 text-center bg-white">
        {/* Icon */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4">
          <img src={CartImage} alt="" />
        </div>

        {/* Text */}
        <p className="text-gray-500 text-sm">Your cart is empty</p>
      </div>
    </div>
  );
};

export default EmptyCart;

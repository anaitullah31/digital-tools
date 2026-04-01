import React from "react";

const ProductCard = ({ product, handleAddToCart }) => {
  const { name, description, price, tagType, features, icon, period } = product;

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-lg">
          <img src={icon} alt={name} className="w-6 h-6" />
        </div>

        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
          {tagType}
        </span>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
        <p className="mt-3 text-sm leading-6 text-gray-500">{description}</p>
      </div>

      <div className="mt-5">
        <span className="text-3xl font-bold text-gray-900">${price}</span>
        <span className="text-base text-gray-500">/{period}</span>
      </div>

      <ul className="mt-5 space-y-3 text-sm text-gray-600">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleAddToCart(product)}
        className="mt-6 w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-3 text-sm font-semibold text-white cursor-pointer"
      >
        Buy Now
      </button>
    </div>
  );
};

export default React.memo(ProductCard);

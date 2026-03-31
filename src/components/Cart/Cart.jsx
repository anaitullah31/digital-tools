import EmptyCart from "../EmptyCart/EmptyCart";

const Cart = ({ carts, handleRemoveCartItem, handleCheckout }) => {
  const total = carts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0,
  );
  return (
    <div>
      {carts.length > 0 ? (
        <section className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
            <div className="space-y-3">
              {carts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="h-5 w-5 object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveCartItem(item)}
                    className="text-sm font-medium text-pink-500 hover:text-pink-600 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-gray-500">Total:</p>
              <h2 className="text-2xl font-bold text-gray-900">${total}</h2>
            </div>

            <button onClick={handleCheckout} className="mt-5 w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-3 text-sm font-semibold text-white cursor-pointer">
              Proceed To Checkout
            </button>
          </div>
        </section>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;

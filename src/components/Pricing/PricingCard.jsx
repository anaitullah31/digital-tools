import Button from "../Button/Button";

const PricingCard = ({ subscription }) => {
  const { name, description, price, features, buttonText, tag } = subscription;
  console.log(tag);

  return (
    <div
      className={`relative w-full max-w-sm card shadow-sm pt-6 ${
        tag
          ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
          : "bg-base-100"
      }`}
    >
      {tag && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="badge badge-warning px-3 py-2 text-xs font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="card-body flex flex-col">
        <div className="space-y-3">
          <div>
            <h2 className="text-3xl font-bold">{name}</h2>
            <p>{description}</p>
          </div>
          <span className="text-xl">${price}/Month</span>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
          {features.map((feature, i) => (
            <li key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button className={`btn ${tag ? 'btn-outline' : ' btn-primary'} w-full`}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

const GetStartedCard = ({ image, index, cardTitle, cardDescription }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm py-8">
      <div className="absolute top-3 right-3 bg-purple-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
        {String(index).padStart(2, "0")}
      </div>
      <figure className="px-10 pt-10">
        <img src={image} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDescription}</p>
      </div>
    </div>
  );
};

export default GetStartedCard;

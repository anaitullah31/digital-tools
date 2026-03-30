const SectionHeading = ({ title, description }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default SectionHeading;

const Destination = ({ country, description, imgSrc }) => {
  return (
    <div className="destination">
      <img src={imgSrc} alt={country} />
      <h3>{country}</h3>
      <p>{description}</p>
    </div>
  );
};

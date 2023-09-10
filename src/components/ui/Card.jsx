const Card = ({ title, cover }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <h1 className="card__title truncate-2">{title}</h1>
    </div>
  );
};

export default Card;

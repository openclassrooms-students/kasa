import { Link } from "react-router-dom";

const Card = ({id, title, cover }) => {
  return (
    <Link to={`/property/${id}`} className="link-none">
      <div
        className="card"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <h1 className="card__title truncate-2">{title}</h1>
      </div>
    </Link>
  );
};

export default Card;

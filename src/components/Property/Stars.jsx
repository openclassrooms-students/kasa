export const Stars = ({ rating = "0" }) => {
  const parsedRating = parseInt(rating);

  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFull = index + 1 > parsedRating;
    return (
      <i
        key={index}
        className={`fa-solid fa-star`}
        style={{ color: isFull ? "#E3E3E3" : "#FF6060" }}
      ></i>
    );
  });

  return <div className="stars">{stars}</div>;
};

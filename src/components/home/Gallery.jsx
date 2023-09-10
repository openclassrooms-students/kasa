import React from "react";
import useFetchData from "../../hooks/useFetchData";
import Card from "../ui/Card";

const Gallery = () => {
  const { data, loading, error } = useFetchData("../../data/data.json");
  console.log(data, loading, error);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur : {error.message}</p>;
  }

  return (
    <div className="card-container">
      {loading && <p> Chargement en cours...</p>}
      {error && <p>Erreur : {error.message}</p>}
      {data &&
        data.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} />
        ))}
    </div>
  );
};

export default Gallery;

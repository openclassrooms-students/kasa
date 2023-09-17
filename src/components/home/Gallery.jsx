import React from "react";
import useFetchData from "../../hooks/useFetchData";
import Card from "../ui/Card";

const Gallery = () => {
  const { data, loading, error } = useFetchData("../../data/data.json");
  return (
    <div className="card-container">
      {loading && <p> Chargement en cours...</p>}
      {error && <p>Erreur : {error.message}</p>}
      {data && data.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default Gallery;

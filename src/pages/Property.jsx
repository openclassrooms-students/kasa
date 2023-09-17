import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import Collapses from "../components/Property/Collapses";
import { Host } from "../components/Property/Host";
import { PersonalInfo } from "../components/Property/PersonalInfo";
import { Carousel } from "../components/ui/Carousel";

const Property = () => {
  const { data, loading, error } = useFetchData();
  const { id } = useParams();

  const property = data && data.find((property) => property.id === id);

  // if (property) {
  //   return redirect("/found");
  // }

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  return (
    <div>
      <Carousel images={property?.pictures} />
      <div className="property__info">
        <Host {...property} />
        <PersonalInfo {...property} />
      </div>

      <Collapses {...property} />
    </div>
  );
};

export default Property;

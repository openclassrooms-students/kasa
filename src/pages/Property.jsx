import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import Collapses from "../components/Property/Collapses";
import { Host } from "../components/Property/Host";
import { PersonalInfo } from "../components/Property/PersonalInfo";
import { Carousel } from "../components/ui/Carousel";
import { useNavigate } from "react-router-dom";

const Property = () => {
  const { data, loading, error } = useFetchData();
  const { id } = useParams();
  const navigate = useNavigate();

  const property = data && data.find((property) => property.id === id);

  if (!property)
    return (
      <div className="property">
        <p className="property">identifiant {id} de ce bien n'existe pas</p>
        <button className="bag" onClick={() => navigate("/")}>
          Retour
        </button>
      </div>
    );

  if (loading)
    return (
      <div className="property">
        <p>Chargement en cours...</p>
      </div>
    );
  if (error)
    return (
      <div className="property">
        <p>Erreur : {error.message}</p>
      </div>
    );

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

import React from "react";
import Collapse from "../ui/Collapse";

const Collapses = ({ description, equipments }) => {
  return (
    <div className="property__collapses">
      <Collapse title="Description">
        <p>{description}</p>
      </Collapse>

      <Collapse title="Equipments">
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};

export default Collapses;

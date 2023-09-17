import React from "react";
import { Stars } from "./Stars";

export const PersonalInfo = ({ rating, host }) => {
  return (
    <div className="personal-info">
      <div className="personal-info_profil">
        <h3 className="personal-info__name">
          {host?.name.split(" ").map((word, index) => (
            <span key={index}>{word} </span>
          ))}
        </h3>
        <img
          className="personal-info__img"
          src={host?.picture}
          alt={"photo de profil de " + host?.name}
        />
      </div>

      <Stars rating={rating} />
    </div>
  );
};

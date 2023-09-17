import React from "react";
import Tag from "../ui/Tag";

export const Host = ({ title, location, tags }) => {
  return (
    <div className="">
      <h1 className="host__title">{title}</h1>
      <p className="host__location">{location}</p>
      <div className="bag__container">
        {tags.map((tag) => (
          <Tag key={tag} title={tag} />
        ))}
      </div>
    </div>
  );
};

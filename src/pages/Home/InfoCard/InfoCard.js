import React from "react";

const InfoCard = ({ pd }) => {
  // console.log(pd);
  const { id, name, description, image, bgClass } = pd;
  return (
    <div className={`card px-6 card-side shadow-xl ${bgClass}`}>
      <figure>
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;

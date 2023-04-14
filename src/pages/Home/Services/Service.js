import React from "react";

const Service = ({ service }) => {
  const { id, name, description, image } = service;
  return (
    <div className="card w-100 bg-base-100 shadow-xl">
      <figure className=" pt-10">
        <img src={image} alt="Shoes" className="rounded-xl " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;

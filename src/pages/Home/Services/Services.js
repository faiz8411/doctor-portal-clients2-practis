import React from "react";
import Fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const ServiceData = [
    { id: 1, name: "Fluoride Treatment", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", image: Fluoride },
    { id: 2, name: "Cavity Filling", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", image: cavity },
    { id: 3, name: "Teeth Whitening", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", image: whitening },
  ];
  return (
    <div className="mt-5">
      <div>
        <h5 className="text-center font-bold text-primary">OUR SERVICES</h5>
        <h2 className="text-center text-3xl text-accent">Services We Provide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ServiceData.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

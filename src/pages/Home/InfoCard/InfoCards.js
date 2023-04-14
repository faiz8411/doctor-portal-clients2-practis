import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const InfoCards = () => {
  const CardData = [
    { id: 1, name: "Opening Hours", description: "Lorem Ipsum is simply dummy text of the pri", image: clock, bgClass: "bg-primary" },
    { id: 2, name: "Visit our location", description: "Brooklyn, NY 10036, United States", image: marker, bgClass: "bg-accent" },
    { id: 3, name: "Contact us ", description: "+000 123 456789", image: phone, bgClass: "bg-primary" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CardData.map((pd) => (
        <InfoCard key={pd.id} pd={pd}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;

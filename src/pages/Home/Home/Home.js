import React from "react";
import Banner from "../Banner/Banner";
import DentalPoster from "../DentalPoster/DentalPoster";
import InfoCards from "../InfoCard/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import TestMonial from "../TestMonial/TestMonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DentalPoster></DentalPoster>
      <MakeAppointment></MakeAppointment>
      <TestMonial></TestMonial>
    </div>
  );
};

export default Home;

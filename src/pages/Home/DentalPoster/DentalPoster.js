import React from "react";
import dentalBanner from "../../../assets/images/treatment.png";

const DentalPoster = () => {
  return (
    <div className="hero min-h-screen mt-5">
      <div className="hero-content flex-col lg:flex-row">
        <img src={dentalBanner} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Exceptional Dental <br /> Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it
            has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DentalPoster;

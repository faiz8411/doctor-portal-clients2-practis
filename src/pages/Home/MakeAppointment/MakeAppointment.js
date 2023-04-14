import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="mt-28"
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="hidden md:block lg:w-1/2 -mt-32 rounded-lg " />
          <div>
            <h4 className="text-primary">Appointment</h4>
            <h1 className="text-white text-4xl ">Make an appointment Today</h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it
              has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
              packages and web page
            </p>
            <PrimaryButton>get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;

import React from "react";

const AppointmentOptions = ({ pd, setTreatment }) => {
  const { name, id, slots } = pd;
  const onSubmit = () => {};
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-primary ">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
        <p>
          {slots.length} {slots.length > 0 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-center">
          <label disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary text-white" onClick={() => setTreatment(pd)}>
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;

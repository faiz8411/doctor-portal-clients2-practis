import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOptions from "./AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ SelectedDate }) => {
  const [appointmentOption, setAppointmentOption] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("appointmentOption.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOption(data));
  }, []);
  return (
    <div className="mt-16">
      <h5 className="text-xl text-center text-primary font-bold">Available Services on {format(SelectedDate, "PP")}</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointmentOption.map((pd) => (
          <AppointmentOptions key={pd.name} pd={pd} setTreatment={setTreatment}></AppointmentOptions>
        ))}
      </div>
      {treatment && <BookingModal SelectedDate={SelectedDate} setTreatment={setTreatment} treatment={treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;

import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [SelectedDate, SetSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner SelectedDate={SelectedDate} SetSelectedDate={SetSelectedDate}></AppointmentBanner>
      <AvailableAppointments SelectedDate={SelectedDate} SetSelectedDate={SetSelectedDate}></AvailableAppointments>
    </div>
  );
};

export default Appointment;

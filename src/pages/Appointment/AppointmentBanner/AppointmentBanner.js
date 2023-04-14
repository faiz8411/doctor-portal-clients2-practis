import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ SelectedDate, SetSelectedDate }) => {
  return (
    <header>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="w-1/2 rounded-lg " alt="chair" />
          <div>
            <DayPicker mode="single" selected={SelectedDate} onSelect={SetSelectedDate} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;

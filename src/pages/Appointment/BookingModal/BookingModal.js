import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, SelectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(SelectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const slot = form.slot.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      mobile,
      email,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input type="text" disabled value={date} placeholder="Type here" className="input input-bordered w-full " />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full " />
            <input name="email" placeholder="Your Email" type="text" className="input input-bordered w-full " />
            <input name="mobile" placeholder="Mobile Number" type="text" className="input input-bordered w-full " />
            <input className="btn btn-accent" type="submit" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

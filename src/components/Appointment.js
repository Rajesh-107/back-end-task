import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';


const Appointment = ({date, setDate}) => {
   
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl p-20">
        <figure>
          <img className="w-40" src="https://e7.pngegg.com/pngimages/964/394/png-clipart-foreign-doctor-material-doctors-doctor-material.png" alt="Album" />
        </figure>
        <div className="card-body">
        <DayPicker
         mode="single"
         selected={date}
         onSelect={setDate} />
        </div>
        
      </div>
      
    </>
  );
};

export default Appointment;

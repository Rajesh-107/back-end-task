import { format } from "date-fns";
import React from "react";

const AppointmentAvaiable = ({date}) => {
  return (
    <div>
      <p className="ml-10">
        You Selected date{" "}
        <span className="text-xl text-center text-red-600">{format(date, "PP")}</span>{" "}
      </p>
    </div>
  );
};

export default AppointmentAvaiable;

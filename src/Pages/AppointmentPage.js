import React from 'react';
import { useState } from 'react';
import Appointment from '../components/Appointment';
import AppointmentAvaiable from '../components/AppointmentAvaiable';

const AppointmentPage = () => {
    const [date, setDate] = useState(new Date())
    return (
        <>
            <Appointment date={date} setDate={setDate}/>
            <AppointmentAvaiable date={date}/>
        </>
    );
};

export default AppointmentPage;
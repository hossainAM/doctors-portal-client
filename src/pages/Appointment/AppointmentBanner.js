import React from 'react';
import Chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {

    return (
        <>
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img src={Chair} className="max-w-sm rounded-lg shadow-2xl mx-auto" alt="dentist chair" />
                </div>
                <div className='flex-1'>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default AppointmentBanner;
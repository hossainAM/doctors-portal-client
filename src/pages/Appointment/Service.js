import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="space-y-2 flex flex-col items-center" >
                    <h2 className="card-title text-secondary text-xl">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : <span className='text-red-500'>Try another Day</span>}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                </div>
                <div className="card-actions justify-center pt-4">
                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;
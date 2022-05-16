import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader/Loader';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP');

    //using react query- auto updating and date wise loading data; auto loading on focus for different user;
    const {data: services, isLoading, refetch} = useQuery(['available', formatedDate], () =>
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
    )

    if(isLoading){
        return <Loader></Loader>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [formatedDate])

//   console.log(treatment)

    return (
        <div>
            <h3 className='text-secondary text-xl text-center'>Available Appointments on {format(date, 'PP')} </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} date={date} refetch={refetch} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;
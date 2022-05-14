import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const services = [
    {
        _id: 1,
        name: "Fluoride Treatment",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: fluoride
    },
    {
        _id: 2,
        name: "Cavity Filling",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: cavity
    },
    {
        _id: 3,
        name: "Teeth Whitening",
        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img: whitening
    },
]

const Services = () => {
    return (
        <div className='my-32 px-12'>
            <div className='text-center'>
                <h1 className='text-primary uppercase font-bold text-xl'>Our Services</h1>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
import React from 'react';
import ButtonPrimary from '../../shared/Button/ButtonPrimary';

const Contact = () => {
    return (
        <section className='my-20 bg-no-repeat bg-cover py-8' style={{backgroundImage: "url('https://i.ibb.co/J388jwy/appointment.png')"}}>
            <div className='mb-5'>
                <h1 className='text-primary text-center text-xl font-bold'>Contact Us</h1>
                <h2 className='text-3xl text-center text-white'>Stay connected with us</h2>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input type="email" placeholder="Email Address" className="input w-80 lg:w-full max-w-md" />
                <input type="text" placeholder="Subject" className="input w-80 lg:w-full max-w-md" />
                <textarea className="textarea w-80 lg:w-full max-w-md" placeholder="Bio"></textarea>
                <ButtonPrimary>submit</ButtonPrimary>
            </div>
        </section>
    );
};

export default Contact;
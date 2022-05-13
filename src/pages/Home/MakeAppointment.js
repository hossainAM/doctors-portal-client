import React from 'react';
import ButtonPrimary from '../../shared/Button/ButtonPrimary';
import doctorImg from '../../assets/images/doctor-small.png'

const MakeAppointment = () => {
    return (
       <section className='flex bg-no-repeat bg-cover my-40' style={{backgroundImage: "url('https://i.ibb.co/J388jwy/appointment.png')"}}>
           <div className='flex-1 hidden lg:block'>
               <img className='mt-[-100px]' src={doctorImg} alt="" />
           </div>
           <div className='flex flex-1 flex-col justify-center items-center lg:items-start'>
                <h3 className="text-xl text-primary py-4 font-bold">Appointment</h3>
                <h2 className="text-3xl text-white">Make an Appointment Today</h2>
                <p className="py-6 text-white text-center lg:text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit delectus tempora dolorum eum magnam fugit ipsum, odit, incidunt cupiditate nobis iusto adipisci quos eaque architecto ut ullam nostrum est maxime totam! Officia necessitatibus doloremque, porro iusto officiis assumenda accusantium.</p>
            <ButtonPrimary>Get Started</ButtonPrimary>
           </div>
       </section>
    );
};

export default MakeAppointment;

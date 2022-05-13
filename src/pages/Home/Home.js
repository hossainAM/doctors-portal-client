import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import SpecialCare from './SpecialCare';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import Footer from '../../shared/Footer/Footer';
import Contact from './Contact';

const Home = () => {
    return (
        <>
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SpecialCare></SpecialCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Home;
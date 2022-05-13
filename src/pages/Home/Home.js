import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import SpecialCare from './SpecialCare';
import MakeAppointment from './MakeAppointment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SpecialCare></SpecialCare>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;
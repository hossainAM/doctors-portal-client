import React from 'react';
import spcialTreatment from '../../assets/images/treatment.png'
import ButtonPrimary from '../../shared/Button/ButtonPrimary';

const SpecialCare = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='flex-1'>
                    <img style={{width: 'full', height: '576px'}} src={spcialTreatment} alt="exceptional dental care"/>
                </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default SpecialCare;
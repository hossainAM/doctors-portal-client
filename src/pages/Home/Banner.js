import React from 'react';
import bannerImg from '../../assets/images/chair.png'
import ButtonPrimary from '../../shared/Button/ButtonPrimary';

const Banner = () => {
    return (
        <div className = "hero min-h-screen bg-no-repeat bg-cover md:bg-fixed"
        style = {
            {
                backgroundImage: "URL('https://i.ibb.co/3F7cbv6/bg.png')"
            }
        } >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img src={bannerImg} alt="dentist chair"/>
                </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime libero architecto ea nisi tenetur, error veniam voluptatem sunt ab temporibus delectus, voluptates quae non suscipit.</p>
                    <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Banner;
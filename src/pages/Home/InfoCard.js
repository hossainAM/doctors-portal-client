import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5'><img src={img} alt="Album"/></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default InfoCard;
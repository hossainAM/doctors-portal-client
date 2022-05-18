import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Please make payment for: {id}</h2>
        </div>
    );
};

export default Payment;
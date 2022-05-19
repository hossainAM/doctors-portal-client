import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
       if(user) {
        //    console.log(user)
         fetch(`http://localhost:5000/booking?patient=${user.email}`, {

             method: 'GET',
             headers: {
                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
             }
         })
        .then(res => {
            // console.log('response', res);
            if(res.status === 401 || res.status === 403){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');
            }
            return res.json(); 
        })
        .then(data => {
            // console.log(data)
            setAppointments(data)
        })
       }
    }, [user, navigate])
    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                        <th>Payment</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => 
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`} className='btn btn-xs btn-success'>Pay</Link>}</td>
                                <td>{(a.price && a.paid) && <div>
                                        <p className='text-success'>Paid</p>
                                        <p>TransactionId: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
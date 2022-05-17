import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader/Loader';
import UserRow from './UserRow';

const AllUsers = () => {
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h2>All users: {users.length}</h2>
            <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Make Admin</th>
                    <th>Remove Admin</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <UserRow key={user._id} user={user} refetch={refetch}></UserRow>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllUsers;
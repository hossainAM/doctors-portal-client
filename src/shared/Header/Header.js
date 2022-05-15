import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth);

     //Sign out
     const handleSignOut = () => {
         signOut(auth);
     }

    const menuItems = <>
        <li><NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to='/'>Home</NavLink></li>
        <li><NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to='/about'>About</NavLink></li>
        <li><NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to='/appointment'>Appointment</NavLink></li>
        <li><NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to='/reviews'>Reviews</NavLink></li>
        <li><NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to='/contact'>Contact</NavLink></li>
        {user 
        ? 
        <li><NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to='/login' onClick={handleSignOut}>Sign Out</NavLink></li>
        :
        <li><NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to='/login'>Login</NavLink></li>
        }
        <li><NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to='/signup'>Sign Up</NavLink></li>
    </>

    return (
        <div className="navbar bg-primary">
            <div className="navbar-start w-50 justify-center">
                <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                   {menuItems}
                </ul>
            </div>
            </div>
    );
};

export default Header;
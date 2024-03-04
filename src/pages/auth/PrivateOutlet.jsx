import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateOutlet = () => {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
    return token ? <Outlet/> : <Navigate to="/login"/>

};

export default PrivateOutlet;
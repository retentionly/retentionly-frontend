import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Login/Register';

const PublicRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default PublicRoute
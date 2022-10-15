import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventConfirmedDashboard from '../../pages/EventConfirmedDashboard'

const UserRoute = () => {
    return (
        <Routes>
            <Route path="/user" element={<EventConfirmedDashboard />}></Route>
        </Routes>
    )
}

export default UserRoute
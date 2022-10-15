import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Admin = () => {

  const { admin } = useSelector(state => state)

  return (
    <>
      <Outlet />
    </>
  )
}

export default Admin
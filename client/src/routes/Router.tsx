import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'

export default function Router() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
      <Routes>
          <Route path='/' element={<Landing />} />
      </Routes>
    </div>
    </>
  )
}

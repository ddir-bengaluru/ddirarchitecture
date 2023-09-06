import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import Projects from '../components/Projects/Projects'

export default function Router() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/:project_name' element={<Projects />} />
          <Route path='*' element={<Landing />} />
      </Routes>
    </div>
    </>
  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import Projects from '../components/Projects/Projects'
import Categories from '../components/Categories/Categories'
import NotFound from '../components/NotFound/NotFound'

export default function Router() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/:project_name' element={<Projects />} />
          <Route path='/categories/:category_name' element={<Categories />} />
          <Route path='/404-not-found' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </>
  )
}

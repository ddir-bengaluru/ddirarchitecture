import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import Projects from '../components/Projects/Projects'
import Categories from '../components/Categories/Categories'
import NotFound from '../components/NotFound/NotFound'
import Art from '../components/Art/Art'
import About from '../components/About/About'

export default function Router() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/:project_name' element={<Projects />} />
          <Route path='/categories/:category_name' element={<Categories />} />
          <Route path='/search/:search_key' element={<Categories />} />
          <Route path='/art/:art_name' element={<Art />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/404-not-found' element={<NotFound statuscode={404} />} />
          <Route path='*' element={<NotFound statuscode={404} />} />
      </Routes>
    </div>
    </>
  )
}

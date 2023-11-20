import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import Projects from '../components/Projects/Projects'
import Categories from '../components/Categories/Categories'
import NotFound from '../components/NotFound/NotFound'
import Art from '../components/Art/Art'
import About from '../components/About/About'
import Clients from '../components/Client/Client'
import Team from '../components/Team/Team'
import News from '../components/News/News'
import NewsDetails from '../components/NewsDetails/NewsDetails'

export default function Router() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/:project_name' element={<Projects />} />
          <Route path='/categories/:category_name' element={<Categories />} />
          <Route path='/art/:art_name' element={<Art />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/clients' element={<Clients />} />
           <Route path='/team' element={<Team />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/:news_id' element={<NewsDetails />} />
          <Route path='/404-not-found' element={<NotFound statuscode={404} />} />
          <Route path='/500-null-state' element={<NotFound statuscode={500} />} />
          <Route path='*' element={<NotFound statuscode={404} />} />
      </Routes>
    </div>
    </>
  )
}

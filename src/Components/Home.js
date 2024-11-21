import React from 'react'
import Header from './Header'
import Hero from './Hero'
import "../Styles/Home.css"
import Newtones from './Newtones'
import Populartones from './Populartones'
import Footer from './Footer'


function Home() {
  return (
    <div className='background-color'>
      <Header/>
      <Hero/>
      <Newtones/>
      <Populartones/>
      <Footer/>
    </div>
  )
}

export default Home

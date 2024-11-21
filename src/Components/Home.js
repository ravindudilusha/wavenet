import React from 'react'
import Header from './Header'
import Hero from './Hero'
import "../Styles/Home.css"
import Newtones from './Newtones'
import Populartones from './Populartones'


function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Newtones/>
      <Populartones/>
    </div>
  )
}

export default Home

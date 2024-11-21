import React from 'react'
import Heroimage from "../Assests/Heroimage.svg";
import "../Styles/Hero.css";

function Hero() {
  return (
      <img fluid src={Heroimage} className='w-100 mt-3 hero-image'/>
  )
}

export default Hero

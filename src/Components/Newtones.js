import React, { useEffect } from "react";
import "../Styles/Newtones.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import musicplay1 from "../Assests/musicplay1.jpg";
import musicplay2 from "../Assests/musicplay2.jpeg";
import musicplay3 from "../Assests/musicplay3.jpeg";
import musicplay4 from "../Assests/musicplay4.jpeg";
import musicplay5 from "../Assests/musicplay5.jpeg";
import musicplay6 from "../Assests/musicplay6.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Newtones() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in milliseconds
      easing: 'ease-in-out',
      once: true,  // ensures animations only happen once
    });
  }, []);

  const musicCards = [
    { 
      title: "Blank Space", 
      artist: "Taylor Swift", 
      price: "$10.99", 
      monthly: "$0.99/mo", 
      image: musicplay1 
    },
    { 
      title: "Down", 
      artist: "Jay Sean", 
      price: "$11.99", 
      monthly: "$1.29/mo", 
      image: musicplay2 
    },
    { 
      title: "Perfect", 
      artist: "Ed Sheeran", 
      price: "$9.99", 
      monthly: "$0.89/mo", 
      image: musicplay3 
    },
    { 
      title: "No Lie", 
      artist: "Dua Lipa", 
      price: "$12.99", 
      monthly: "$1.99/mo", 
      image: musicplay4 
    },
    { 
      title: "APT.", 
      artist: "Bruno Mars", 
      price: "$11.99", 
      monthly: "$1.99/mo", 
      image: musicplay5 
    },
    { 
      title: "Estside.", 
      artist: "Kalid", 
      price: "$10.99", 
      monthly: "$1.99/mo", 
      image: musicplay6 
    },
  ];

  return (
    <div className="mt-5 container">
      {/* Header */}
      <div className="heading-container">
        <p className="heading">New tones</p>
        <div className="Seemore-container">
          <p className="m-0 Seemore-heading">See more</p>
          <FaArrowRight />
        </div>
      </div>

      {/* Music Cards */}
      <div className="row">
        {musicCards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="row g-0">
                <div className="col-4 position-relative d-flex align-items-center">
                  <img
                    src={card.image}
                    className="p-2 img-fluid music-image"
                    alt={`${card.title} Thumbnail`}
                  />
                  {/* Play Icon */}
                  <div className="play-icon-container">
                    <FaPlay className="play-icon" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center card-title-container">
                      <p className="m-0 card-title">{card.title}</p>
                      <IoShareSocialOutline />
                    </div>
                    <p className="m-0 text-start card-text">{card.artist}</p>
                    <p className="m-0 text-start price-text">{card.price}</p>
                    <div className="d-flex align-items-center gap-1 mt-2 price-container">
                      <button className="buynow-button">Buy now</button>
                      <p className="m-0 monthly-payment">{card.monthly}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newtones;

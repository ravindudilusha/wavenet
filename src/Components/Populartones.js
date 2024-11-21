import React from "react";
import "../Styles/Newtones.css";
import { FaArrowRight } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import musicplay7 from "../Assests/musicplay7.jpeg";
import musicplay8 from "../Assests/musicplay8.jpeg";
import musicplay3 from "../Assests/musicplay3.jpeg";
import musicplay4 from "../Assests/musicplay4.jpeg";
import musicplay5 from "../Assests/musicplay5.jpeg";
import musicplay6 from "../Assests/musicplay6.jpeg";

function PopularTones() {
  const musicCards = [
    { 
      title: "Baby", 
      artist: "Justin Bieber", 
      price: "$14.99", 
      monthly: "$2.99/mo", 
      image: musicplay7 
    },
    { 
      title: "On My Way", 
      artist: "Alan Walker", 
      price: "$11.99", 
      monthly: "$1.29/mo", 
      image: musicplay8 
    },
    { 
      title: "Bad Guy", 
      artist: "Billie Eilish", 
      price: "$9.99", 
      monthly: "$0.89/mo", 
      image: musicplay3 
    },
    { 
      title: "Blinding Lights", 
      artist: "The Weeknd", 
      price: "$11.99", 
      monthly: "$1.19/mo", 
      image: musicplay4 
    },
    { 
      title: "Levitating", 
      artist: "Dua Lipa", 
      price: "$13.99", 
      monthly: "$1.39/mo", 
      image: musicplay5 
    },
  ];

  return (
    <div className="mt-5 container">
      {/* Header */}
      <div className="heading-container">
        <p className="heading">Popular tones</p>
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

export default PopularTones;

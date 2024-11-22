import React from 'react'
import logo from "../Assests/logo.svg";
import "../Styles/footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";

function Footer() {
  return (
    <footer className="mt-4 bg-white text-dark py-4 ">
    <div className="container footer-container">
      <div className="row">
        {/* Logo */}
        <div className="col-md-3 mb-3">
          <img
            src={logo}
            alt="Company Logo"
            className="float-start img-fluid mb-2"
            style={{ maxWidth: "150px" }}
          />
        </div>

        {/* Company Information */}
        <div className="text-start col-md-3 mb-3">
          <p className='footer-title'>Company information</p>
          <ul className="list-unstyled footer-content">
            <li>About Wavenet</li>
            <li>Contact us</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-start col-md-3 mb-3">
          <p className='footer-title'>Legal</p>
          <ul className="list-unstyled footer-content">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-start col-md-3 mb-3">
          <p className='text-start footer-title'>Quick Links</p>
          <ul className="list-unstyled footer-content">
            <li>Home</li>
            <li>My tones</li>
            <li>Message RBT</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between mt-3 small">
        <p>© 2024 Wavenet. All rights reserved.</p>
        <div className='d-flex gap-2 social-links'>
        <FaFacebookSquare />
        <RiInstagramFill />
        <AiFillTikTok />
        </div>

      </div>
    </div>
  </footer>
  );
}

export default Footer

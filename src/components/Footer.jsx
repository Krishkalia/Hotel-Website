import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="section footer-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-3 mb-5">
            <ul className="list-unstyled link">
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><Link to="/rooms">Rooms</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <ul className="list-unstyled link">
              <li><Link to="/rooms">The Rooms &amp; Suites</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-5 pr-md-5 contact-info">
            <p>
              <span className="d-block">
                <span className="ion-ios-location h5 mr-3 text-primary"></span>
                Address:
              </span> 
              <span>SH37, Rundal, Tehsil-Churah, District-Chamba,<br /> Himachal Pradesh, 176321</span>
            </p>
            <p>
              <span className="d-block">
                <span className="ion-ios-telephone h5 mr-3 text-primary"></span>
                Phone:
              </span> 
              <span>+91 98168 80296</span>
            </p>
            <p>
              <span className="d-block">
                <span className="ion-ios-chatboxes h5 mr-3 text-primary"></span>
                WhatsApp:
              </span> 
              <span>+91 97363 08008</span>
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <p>Sign up for our newsletter</p>
            <form action="#" className="footer-newsletter">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email..." />
                <button type="submit" className="btn"><span className="fa fa-paper-plane"></span></button>
              </div>
            </form>
          </div>
        </div>
        <div className="row pt-5">
          <p className="col-md-6 text-left">
            Copyright &copy;{new Date().getFullYear()} All rights reserved | Hotel Shaan - A Home Away From Home
          </p>
            
          <p className="col-md-6 text-right social">
            <a href="#"><span className="fa fa-tripadvisor"></span></a>
            <a href="#"><span className="fa fa-facebook"></span></a>
            <a href="#"><span className="fa fa-twitter"></span></a>
            <a href="#"><span className="fa fa-linkedin"></span></a>
            <a href="#"><span className="fa fa-vimeo"></span></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

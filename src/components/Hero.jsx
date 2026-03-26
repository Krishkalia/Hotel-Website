import React from 'react';

const Hero = ({ title, subtitle, backgroundImage, backgroundPosition = 'center center', blur = false }) => {
  return (
    <section className="site-hero overlay" style={{ overflow: 'hidden' }}>
      <div 
        className="hero-bg" 
        style={{ 
          backgroundImage: `url("${backgroundImage}")`,
          backgroundPosition: backgroundPosition,
          filter: blur ? 'blur(5px)' : 'none',
          transform: blur ? 'scale(1.1)' : 'none'
        }}
        data-stellar-background-ratio="0.5"
      ></div>
      <div className="container">
        <div className="row site-hero-inner justify-content-center align-items-center">
          <div className="col-md-10 text-center" data-aos="fade-up">
            {subtitle && <span className="custom-caption text-uppercase text-white d-block mb-3">{subtitle}</span>}
            <h1 className="heading">{title}</h1>
          </div>
        </div>
      </div>

      <a className="mouse smoothscroll bounce-arrow" href="#next">
        <div className="scroll-arrow">
          <i className="fa fa-angle-down"></i>
        </div>
      </a>
    </section>
  );
};

export default Hero;

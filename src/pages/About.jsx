import React from 'react';
import Hero from '../components/Hero';

const About = () => {
  return (
    <div>
      <Hero
        title="About Us"
        backgroundImage="/images/hotel-shaan/new_images/18.jpg"
        backgroundPosition="center bottom"
        blur={true}
      />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
              <figure className="img-absolute">
                <img src="/images/hotel-shaan/hotel2.jpg" alt="Hotel Interior" className="img-fluid" />
              </figure>
              <img src="/images/hotel-shaan/hotel3.jpg" alt="Hotel Exterior" className="img-fluid rounded" />
            </div>
            <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
              <h2 className="heading">Hotel Shaan</h2>
              <p className="mb-4">Welcome to Hotel Shaan, where comfort meets the majestic beauty of Himachal Pradesh. Located in the serene Village of Surela, our hotel is managed with a commitment to providing a "Home Away From Home" experience.</p>
              <p className="mb-4">Whether you are on a solo trek towards the challenging Sach Pass or traveling with family to explore the hidden gems of Chamba district, Hotel Shaan offers the perfect retreat to rest and rejuvenate.</p>
              <p>Our goal is to provide exceptional hospitality and delicious local food that keeps you coming back to us again and again.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7">
              <h2 className="heading" data-aos="fade-up">Our Hotel Management</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="block-2">
                <div className="flipper">
                  <div className="front" style={{ backgroundImage: 'url("/images/person_4.jpg")' }}>
                    <div className="box">
                      <h2>Sanjeev Kumar</h2>
                      <p>Owner</p>
                    </div>
                  </div>
                  <div className="back">
                    <blockquote>
                      <p>&ldquo;Welcome to Hotel Shaan. We take pride in our service and look forward to hosting you in our beautiful corner of the world.&rdquo;</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="media-with-text">
                <div className="img-wrap-2">
                  <img src="/images/hotel-shaan/new_images/32.jpg" alt="Mountain View" className="img-fluid" />
                </div>
                <h2 className="heading">Scenic Views</h2>
                <p>Enjoy panoramic views of the Chamba mountains right from your balcony. The tranquility here is unmatched.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="media-with-text">
                <div className="img-wrap-2">
                  <img src="/images/hotel-shaan/new_images/19.jpg" alt="Food" className="img-fluid" />
                </div>
                <h2 className="heading">Delicious Food</h2>
                <p>Our restaurant serves freshly prepared meals that focus on quality and taste, giving you a taste of local hospitality.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="media-with-text">
                <div className="img-wrap-2">
                  <img src="/images/hotel-shaan/hotel5.jpg" alt="Rooms" className="img-fluid" />
                </div>
                <h2 className="heading">Clean & Comfortable</h2>
                <p>We maintain high standards of cleanliness and comfort in all our rooms to ensure a restful stay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

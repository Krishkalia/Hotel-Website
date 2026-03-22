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
            <div className="col-md-10 col-lg-8 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <div 
                className="card mb-3" 
                style={{ 
                  maxWidth: '650px', 
                  borderRadius: '15px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  border: '1px solid #e0e0e0'
                }}
              >
                <div className="row g-0 h-100">
                  <div className="col-md-5 position-relative" style={{ zIndex: 2, boxShadow: '4px 0 10px rgba(0,0,0,0.08)' }}>
                    <img 
                      src="/images/person_4.jpg" 
                      className="img-fluid h-100 w-100" 
                      style={{ objectFit: 'cover' }} 
                      alt="Sanjeev Kumar" 
                    />
                  </div>
                  <div className="col-md-7 d-flex align-items-center" style={{ backgroundColor: '#fafafa', zIndex: 1 }}>
                    <div className="card-body p-4 p-md-5 text-left" style={{ textAlign: 'left' }}>
                      <h4 className="card-title font-weight-bold mb-2" style={{ color: '#222' }}>Sanjeev Kumar</h4>
                      <p className="card-text mb-4"><span className="badge bg-primary text-white" style={{ padding: '8px 12px', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Owner</span></p>
                      <p className="card-text text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6', fontStyle: 'italic' }}>
                        &ldquo;Welcome to Hotel Shaan. We take pride in our service and look forward to hosting you in our beautiful corner of the world.&rdquo;
                      </p>
                    </div>
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
            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} 
                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.1)'; }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)'; }}>
                <div className="img-wrap-2">
                  <img src="/images/hotel-shaan/new_images/32.jpg" alt="Mountain View" className="img-fluid w-100" style={{ objectFit: 'cover', height: '250px' }} />
                </div>
                <div className="card-body p-4 text-left" style={{ backgroundColor: '#fff' }}>
                  <h3 className="heading font-weight-bold mb-3" style={{ fontSize: '1.75rem', color: '#222' }}>Scenic Views</h3>
                  <p className="text-muted" style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>Enjoy panoramic views of the Chamba mountains right from your balcony. The tranquility here is unmatched.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.1)'; }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)'; }}>
                <div className="img-wrap-2">
                  <img src="/images/hotel-shaan/new_images/19.jpg" alt="Food" className="img-fluid w-100" style={{ objectFit: 'cover', height: '250px' }} />
                </div>
                <div className="card-body p-4 text-left" style={{ backgroundColor: '#fff' }}>
                  <h3 className="heading font-weight-bold mb-3" style={{ fontSize: '1.75rem', color: '#222' }}>Delicious Food</h3>
                  <p className="text-muted" style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>Our restaurant serves freshly prepared meals that focus on quality and taste, giving you a taste of local hospitality.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.1)'; }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)'; }}>
                <div className="img-wrap-2">
                  <img src="/images/hotel-shaan/hotel5.jpg" alt="Rooms" className="img-fluid w-100" style={{ objectFit: 'cover', height: '250px' }} />
                </div>
                <div className="card-body p-4 text-left" style={{ backgroundColor: '#fff' }}>
                  <h3 className="heading font-weight-bold mb-3" style={{ fontSize: '1.75rem', color: '#222' }}>Clean & Comfortable</h3>
                  <p className="text-muted" style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>We maintain high standards of cleanliness and comfort in all our rooms to ensure a restful stay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

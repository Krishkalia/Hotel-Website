import React from 'react';
import Hero from '../components/Hero';

const Rooms = () => {
  const rooms = [
    {
      title: "Standard Double Room",
      description: "Cozy and comfortable with a queen-sized bed, perfect for couples or solo travelers.",
      price: "Refined Comfort",
      image: "/images/hotel-shaan/new_images/13.jpg"
    },
    {
      title: "Deluxe Room",
      description: "Featuring essential amenities and large windows to capture the mountain views.",
      price: "Elegant Stay",
      image: "/images/hotel-shaan/new_images/21.jpg"
    },
    {
      title: "Super Deluxe Room",
      description: "Includes AC, premium interior finishes, and a more spacious layout for extra comfort.",
      price: "Premium Experience",
      image: "/images/hotel-shaan/new_images/23.jpg"
    },
    {
      title: "Family Suite",
      description: "Large rooms with extra seating area, ideal for families or friends traveling together.",
      price: "Spacious Retreat",
      image: "/images/hotel-shaan/new_images/12.jpg"
    }
  ];

  return (
    <div>
      <Hero 
        title="Our Rooms" 
        backgroundImage="/images/hero_2.jpg" 
        blur={true}
      />

      <section className="section bg-light">
        <div className="container">
          <div className="row">
            {rooms.map((room, index) => (
              <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" key={index}>
                <div className="room">
                  <figure className="img-wrap">
                    <img src={room.image} alt={room.title} className="img-fluid mb-3" />
                  </figure>
                  <div className="p-3 text-center room-info">
                    <h2>{room.title}</h2>
                    <p className="mb-3">{room.description}</p>
                    <span className="text-uppercase letter-spacing-1">{room.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7">
              <h2 className="heading mb-3" data-aos="fade-up">Room Amenities</h2>
              <p data-aos="fade-up" data-aos-delay="100">Enjoy a range of premium facilities designed to make your stay extraordinary.</p>
            </div>
          </div>
          <div className="row">
            {[
              { icon: "fa fa-snowflake-o", title: "Air Conditioning", desc: "Stay cool and comfortable with modern climate control." },
              { icon: "fa fa-wifi", title: "Free Wi-Fi", desc: "High-speed internet to keep you connected with the world." },
              { icon: "fa fa-cutlery", title: "Dining Choice", desc: "Delicious local and international flavors at our restaurant." },
              { icon: "fa fa-image", title: "Valley Views", desc: "Wake up to breathtaking vistas of the surrounding mountains." },
              { icon: "fa fa-bell-o", title: "24/7 Service", desc: "Round-the-clock room service for all your personal needs." },
              { icon: "fa fa-tint", title: "Hot Water", desc: "Continuous hot water supply for a refreshing bath experience." },
              { icon: "fa fa-coffee", title: "Tea/Coffee", desc: "Complimentary electric kettle and beverage kit in every room." },
              { icon: "fa fa-magic", title: "Premium Care", desc: "Luxury toiletries and fresh linens for a spa-like stay." }
            ].map((amenity, i) => (
              <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={i * 50} key={i}>
                <div className="amenity-card text-center">
                  <div className="amenity-icon d-flex align-items-center justify-content-center">
                    <i className={amenity.icon}></i>
                  </div>
                  <h3 className="amenity-title">{amenity.title}</h3>
                  <p className="amenity-desc">{amenity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;

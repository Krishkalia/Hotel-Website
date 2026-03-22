import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Re-initialize Owl Carousel and AOS if needed
    let homeSlider;
    let testimonialSlider;
    if (window.jQuery) {
      const $ = window.jQuery;
      homeSlider = $('.home-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        autoplayHoverPause: true,
        items: 1,
        navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
        responsive: {
          0: { items: 1, nav: false },
          600: { items: 2, nav: false },
          1000: { items: 3, nav: true }
        }
      });

      testimonialSlider = $('.js-carousel-2').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        autoplayHoverPause: true,
        items: 1,
        navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
        responsive: {
          0: { items: 1, nav: false },
          600: { items: 1, nav: false },
          1000: { items: 1, nav: true }
        }
      });
    }
  }, []);

  const hotelImages = [
    "/images/hotel-shaan/hotel1.jpg",
    "/images/hotel-shaan/hotel2.jpg",
    "/images/hotel-shaan/hotel3.jpg",
    "/images/hotel-shaan/hotel4.jpg",
    "/images/hotel-shaan/hotel5.jpg",
    "/images/hotel-shaan/hotel6.jpg",
    "/images/hotel-shaan/new_images/10.jpg",
    "/images/hotel-shaan/new_images/30.jpg",
    "/images/hotel-shaan/new_images/1.jpg",
    "/images/hotel-shaan/new_images/34.jpg"
  ];

  return (
    <div>
      <Hero
        title="Home Away From Home"
        subtitle="Welcome To Hotel Shaan"
        backgroundImage="/images/hotel-shaan/new_images/34.jpg"
        blur={true}
      />

      <section className="py-5 bg-light" id="next">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
              <figure className="img-absolute">
                <img src={hotelImages[1]} alt="Food" className="img-fluid" />
              </figure>
              <img src={hotelImages[2]} alt="Hotel View" className="img-fluid rounded" />
            </div>
            <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
              <h2 className="heading">Welcome!</h2>
              <p className="mb-4">Experience the warm hospitality of Hotel Shaan, your home away from home in the beautiful mountains of Chamba district. Located on the way to Sach Pass, we offer breathtaking views, delicious food, and comfortable accommodations for travelers and families alike.</p>
              <p><Link to="/about" className="btn btn-primary text-white py-2 mr-3">Learn More</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7">
              <h2 className="heading" data-aos="fade-up">Rooms &amp; Suites</h2>
              <p data-aos="fade-up" data-aos-delay="100">Our rooms are designed to provide maximum comfort and a peaceful atmosphere. Each room features modern amenities and stunning valley views.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <Link to="/rooms" className="room">
                <figure className="img-wrap">
                  <img src="/images/hotel-shaan/new_images/13.jpg" alt="Double Room" className="img-fluid mb-3" />
                </figure>
                <div className="p-3 text-center room-info">
                  <h2>Standard Double Room</h2>
                  <span className="text-uppercase letter-spacing-1">Comfortable & Cozy</span>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <Link to="/rooms" className="room">
                <figure className="img-wrap">
                  <img src="/images/hotel-shaan/new_images/21.jpg" alt="Deluxe Room" className="img-fluid mb-3" />
                </figure>
                <div className="p-3 text-center room-info">
                  <h2>Deluxe Room</h2>
                  <span className="text-uppercase letter-spacing-1">Refined & Elegant</span>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <Link to="/rooms" className="room">
                <figure className="img-wrap">
                  <img src="/images/hotel-shaan/new_images/12.jpg" alt="Family Suite" className="img-fluid mb-3" />
                </figure>
                <div className="p-3 text-center room-info">
                  <h2>Family Suite</h2>
                  <span className="text-uppercase letter-spacing-1">Spacious & Modern</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section slider-section bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7">
              <h2 className="heading" data-aos="fade-up">Photos</h2>
              <p data-aos="fade-up" data-aos-delay="100">A glimpse of our hotel, rooms, and the beautiful surroundings of Village Surela.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="home-slider major-caousel owl-carousel mb-5" data-aos="fade-up" data-aos-delay="200">
                {hotelImages.map((img, index) => (
                  <div key={index} className="slider-item">
                    <a href={img} data-fancybox="images" data-caption={`Hotel Shaan Photo ${index + 1}`}>
                      <img src={img} alt={`Slide ${index + 1}`} className="img-fluid" />
                    </a>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4" data-aos="fade-up">
                <Link to="/gallery" className="btn btn-primary text-white py-2 px-4">View All Photos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7">
              <h2 className="heading" data-aos="fade-up">What our Guests Say</h2>
            </div>
          </div>
          <div className="row">
            <div className="js-carousel-2 owl-carousel mb-5" data-aos="fade-up" data-aos-delay="200">
              {[
                {
                  name: "Reeta Verma",
                  text: "Very happy with my stay at Hotel Shaan. Beautiful rooms, quick service, and a peaceful atmosphere. The staff made us feel welcome and comfortable.",
                  color: "#4a7c59" // Forest Green
                },
                {
                  name: "YASH SONI",
                  text: "Very good behaviour of all staff. Great rooms.",
                  color: "#d4a373" // Sand
                },
                {
                  name: "amisha sharma",
                  text: "The rooms are awesome staff is really nice food fabulous the price is very reasonable really good experience in this hotel you can stay here.",
                  color: "#6b705c" // Olive
                },
                {
                  name: "Pawan Goyat",
                  text: "Very happy with my stay at Hotel Shaan. Beautiful rooms, quick service, and a peaceful atmosphere. The staff made us feel welcome and comfortable.",
                  color: "#bc6c25" // Brown
                },
                {
                  name: "Rakesh Kumar",
                  text: "Excellent behavior of all staff and hospitality is top-notch. Beautiful rooms with a very peaceful atmosphere. The location is mind-blowing.",
                  color: "#264653" // Dark Teal
                },
                {
                  name: "Anita Sharma",
                  text: "Very tasty food and airy rooms. A great place to stay while traveling towards Sach Pass. Highly recommended for family stays.",
                  color: "#e76f51" // Terracotta
                },
                {
                  name: "Vikram Singh",
                  text: "The views from the balcony are simply stunning. Clean rooms and very helpful staff. One of the best hotels in Churah valley.",
                  color: "#457b9d" // Steel Blue
                }
              ].map((review, i) => (
                <div key={i} className="testimonial text-center slider-item">
                  <div className="author-image mb-3">
                    <div
                      className="rounded-circle mx-auto d-flex align-items-center justify-content-center text-white font-weight-bold"
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: review.color || '#ccc',
                        fontSize: '2rem',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <blockquote>
                    <p>&ldquo;{review.text}&rdquo;</p>
                  </blockquote>
                  <p><em>&mdash; {review.name}</em></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-image overlay" style={{ backgroundImage: `url("${hotelImages[0]}")` }}>
        <div className="container" >
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
              <h2 className="text-white font-weight-bold">Ready to Visit Us? Contact Now!</h2>
            </div>
            <div className="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="200">
              <Link to="/contact" className="btn btn-outline-white-primary py-3 text-white px-5">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

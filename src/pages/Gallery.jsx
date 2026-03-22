import React, { useEffect } from 'react';
import Hero from '../components/Hero';

const Gallery = () => {
  const newImageIds = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38];
  
  const images = [
    ...Array.from({ length: 6 }, (_, i) => `/images/hotel-shaan/hotel${i + 1}.jpg`),
    ...newImageIds.map(id => `/images/hotel-shaan/new_images/${id}.jpg`)
  ];

  useEffect(() => {
    // If Fancybox is initialized via window or script, it should pick up data-fancybox attributes
    // In many templates, it's auto-initialized. 
    // If not, we might need to manually trigger it, but let's follow the Home.jsx pattern.
  }, []);

  return (
    <div>
      <Hero 
        title="Photo Gallery" 
        backgroundImage="/images/hero_1.jpg" 
        blur={true}
      />

      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7">
              <h2 className="heading" data-aos="fade-up">A Glimpse of Shaan</h2>
              <p data-aos="fade-up" data-aos-delay="100">Explore our beautiful rooms, delicious food, and the breathtaking scenery of Village Surela.</p>
            </div>
          </div>
          
          <div className="row no-gutters">
            {images.map((img, index) => (
              <div className="col-md-4 col-sm-6" key={index} data-aos="fade-up" data-aos-delay={index % 3 * 100}>
                <a href={img} data-fancybox="gallery" data-caption={`Hotel Shaan - Image ${index + 1}`} className="gallery-item">
                  <div className="gallery-img-container">
                    <img src={img} alt={`Gallery ${index + 1}`} className="img-fluid" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                    <div className="gallery-overlay">
                      <span className="ion-ios-search h3 text-white"></span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .gallery-item {
          display: block;
          position: relative;
          overflow: hidden;
          margin: 5px;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }
        .gallery-item:hover {
          transform: scale(1.02);
        }
        .gallery-img-container {
          position: relative;
        }
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
      `}} />
    </div>
  );
};

export default Gallery;

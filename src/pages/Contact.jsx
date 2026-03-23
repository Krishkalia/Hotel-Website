import React, { useState } from 'react';
import Hero from '../components/Hero';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS logic - Using provided real keys
    const publicKey = 'XFX5g5GjKOdWowhw4'.trim();
    const serviceID = 'service_sqpdsza'.trim();
    const templateID = 'template_t0aoz65'.trim();

    emailjs.init(publicKey);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email, // Standard EmailJS variable
      phone: formData.phone,
      message: formData.message,
      to_email: 'hotelticket77@gmail.com'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      }, (err) => {
        console.error('FAILED...', err);
        setStatus('error');
      });
  };

  return (
    <div>
      <Hero 
        title="Contact Us" 
         backgroundImage="/images/hero_4.jpg" 
         blur={true}
      />

      <section className="section contact-section" id="next">
        <div className="container">
          <div className="row">
            <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
              {status === 'success' ? (
                <div className="alert alert-success p-5 text-center" role="alert">
                  <h2 className="text-success mb-3">Thank You!</h2>
                  <p>Your message has been sent successfully to <strong>krishkaliajal10@gmail.com</strong>. We will get back to you soon.</p>
                  <button className="btn btn-primary text-white mt-3" onClick={() => setStatus('')}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-md-5 p-4 mb-5 border">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="form-control" 
                        placeholder="Your Name" 
                        required 
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="phone">Phone</label>
                      <input 
                        type="text" 
                        id="phone" 
                        className="form-control" 
                        placeholder="Your Phone" 
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
            
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="form-control" 
                        placeholder="Your Email" 
                        required 
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
  
                  <div className="row mb-4">
                    <div className="col-md-12 form-group">
                      <label htmlFor="message">Write Message</label>
                      <textarea 
                        name="message" 
                        id="message" 
                        className="form-control" 
                        cols="30" 
                        rows="6" 
                        placeholder="How can we help you?"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input 
                        type="submit" 
                        value={status === 'sending' ? 'Sending...' : 'Send Message'} 
                        className="btn btn-primary text-white font-weight-bold" 
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>
                  {status === 'error' && (
                    <div className="alert alert-danger mt-3">Something went wrong. Please try again later.</div>
                  )}
                </form>
              )}
            </div>
            <div className="col-md-5" data-aos="fade-up" data-aos-delay="200">
              <div className="row">
                <div className="col-md-10 ml-auto contact-info">
                  <p>
                    <span className="d-block">
                      <span className="ion-ios-location h5 mr-3 text-primary"></span>
                      Address:
                    </span> 
                    <span>VILL-SURELA P.O-THALLI,<br /> TEH-CHURAH,<br /> DISTT-CHAMBA, H.P PIN176321</span>
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
                  <p>
                    <span className="d-block">
                      <span className="ion-ios-email h5 mr-3 text-primary"></span>
                      Email:
                    </span> 
                    <span>hotelticket77@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7">
              <h2 className="heading" data-aos="fade-up">Find Us on Map</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" data-aos="fade-up">
              <div className="map-responsive">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13444.640000000001!2d75.8604006!3d32.81664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391dd96e00000001%3A0xe0b5a1f00000000!2sHOTEL%20SHAAN!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

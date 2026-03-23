import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const getActive = (path) => location.pathname === path ? 'active' : '';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="site-header js-site-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6 col-lg-4 site-logo" data-aos="fade">
            <Link to="/">Hotel Shaan</Link>
          </div>
          <div className="col-6 col-lg-8">
            <div className={`site-menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} data-aos="fade">
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            <div className={`site-navbar js-site-navbar`} style={{ 
              display: menuOpen ? 'block' : 'none', 
              opacity: menuOpen ? 1 : 0, 
              transition: 'opacity 0.4s ease',
              height: '100dvh',
              overflowY: 'auto'
            }}>
              <nav role="navigation">
                <div className="container">
                  <div className="row full-height align-items-center justify-content-center">
                    <div className="col-md-6 mx-auto">
                      <ul className="list-unstyled menu">
                        <li className={getActive('/')}><Link to="/">Home</Link></li>
                        <li className={getActive('/rooms')}><Link to="/rooms">Rooms</Link></li>
                        <li className={getActive('/gallery')}><Link to="/gallery">Gallery</Link></li>
                        <li className={getActive('/about')}><Link to="/about">About</Link></li>
                        <li className={getActive('/contact')}><Link to="/contact">Contact</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

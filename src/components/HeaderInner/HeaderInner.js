import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './_HeaderInner.scss';

const HeaderInner = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='main-container'>
      <header id='header-inner'>
        <div className='container'>
          <nav id='mainNav'>
            <div className='logo'>
              <h4 className='portfolio-logo'>M y</h4>
              <h4 className='portfolio-logo'>P o r t f o l i o</h4>
            </div>
            <ul>
              <li>
                <Link
                  to='/'
                  className={activeLink === '/' ? 'current' : ''}
                  onClick={() => handleLinkClick('/')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className={activeLink === '/about' ? 'current' : ''}
                  onClick={() => handleLinkClick('/about')}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/work'
                  className={activeLink === '/work' ? 'current' : ''}
                  onClick={() => handleLinkClick('/work')}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className={activeLink === '/contact' ? 'current' : ''}
                  onClick={() => handleLinkClick('/contact')}
                >
                  Contact
                </Link>
              </li>

              <li>
                <a
                  href={
                    process.env.PUBLIC_URL + '../../assets/cv/Joelle_CV-01.pdf'
                  }
                  download='Integrator_web_cv.pdf'
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderInner;
 
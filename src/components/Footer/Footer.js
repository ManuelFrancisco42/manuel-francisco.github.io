/****************** Footer js ***********************/

import React from 'react';
import './_Footer.scss';

const Footer = () => {
  return (
    <div className='main-container'>
      <footer id='mainFooter'>
        <div className='footerContent container'>
          <p>Copyright &copy; 2023. All Rights Reserved</p>
          <div className='social'>
            <a
              href='https://twitter.com/yourtwitterprofile'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter'></i>
            </a>
            <a
              href='https://www.facebook.com/yourfacebookprofile'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook'></i>
            </a>
            <a
              href='https://www.instagram.com/yourinstagramprofile'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/yourlinkedinprofile'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

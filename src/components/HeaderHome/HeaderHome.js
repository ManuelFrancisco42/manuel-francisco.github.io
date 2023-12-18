/**************** HeaderHome js *****************/

import React from 'react';
import { Link } from 'react-router-dom';
import './_HeaderHome.scss';
import Writer from '../Writer/WriterComponent';
const Header = () => {
  return (
    <div className='main-container'>
      <header id='headerHome'>
        <div className='container'>
          <nav id='mainNav'>
            <div className='logo'>
              <h4 className='portfolio-logo'>M y</h4>
              <h4 className='portfolio-logo'>P o r t f o l i o</h4>
            </div>
            <ul>
              <li>
                <Link to='/' className='current'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/work'>Work</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <a href='../../assets/cv/Joelle_CV-01.pdf' download>
                  CV
                </a>
              </li>
            </ul>
          </nav>
          <div className='headerContent'>
            <h1 id='littlewords'>
              à Saint-Étienne.
              <Writer
                words={['Integrateur Web', 'Developpeur Web']}
                wait={3000}
              />
            </h1>
            <p className='lead'>
              Venez créer l'avenir en ligne avec un jeune intégrateur web
              passionné à Saint-Étienne.
            </p>
            <Link to='/work' className='button-light'>
              View my Work
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

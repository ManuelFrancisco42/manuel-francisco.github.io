import React from 'react';
import './_About.scss';

const About = () => {
  return (
    <div>
      <div className='main-container'>
        {/* About Section */}
        <section id='aboutPage' className='text-center paddElement-3'>
          <div className='container'>
            <h2 className='section-title'>About Me</h2>

            <p>VOTRE VISION, MON ENGAGEMENT</p>
            <p className='lead'>
              Bienvenue dans l'univers où la créativité rencontre la
              fonctionnalité, où vos idées prennent vie sur le web. En tant
              qu'intégrateur web passionné, je m'engage à donner vie à votre
              projet avec une expertise méticuleuse et une passion inébranlable.
            </p>
            <div className='about-info'>
              <img src='img/about.jpg' alt='' className='biografi-image' />
              <div className='biografi background-light'>
                <h4>TRANSFORMEZ VOS IDÉES EN RÉALITÉ</h4>
                <p>
                  Laissez-moi transformer vos concepts en une présence web
                  percutante. Chaque détail compte, et je m'assure que votre
                  site internet non seulement répond à vos attentes, mais les
                  dépasse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id='aboutProgress' className='background-dark paddElement-3'>
          <div className='container'>
            <h2 className='section-title'>My Technical Skills</h2>

            {/* Add technical skills and progress bars */}
            <h4>HTML:</h4>
            <div className='progress'>
              <div style={{ width: '90%' }}></div>
            </div>
            <h4>CSS / SASS:</h4>
            <div className='progress'>
              <div style={{ width: '80%' }}></div>
            </div>
            <h4>JavaScript:</h4>
            <div className='progress'>
              <div style={{ width: '60%' }}></div>
            </div>
            <h4>React:</h4>
            <div className='progress'>
              <div style={{ width: '40%' }}></div>
            </div>
            <h4>Git / Github:</h4>
            <div className='progress'>
              <div style={{ width: '30%' }}></div>
            </div>
          </div>
        </section>

        {/* About Logo Section */}
        <section id='aboutLogo' className='paddElement-4 background-light'>
          <div className='container'>
            {/* Add content for the About Logo section */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

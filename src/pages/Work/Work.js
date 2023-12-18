/************ Work Page *************/

import React from 'react';
import './_Work.scss';
import ohmyfoodImage from '../../assets/images/ohmyfood_final_1.webp';
import printItJSImage from '../../assets/images/print-it-JS.webp';
import bookiImage from '../../assets/images/Booki.webp';
import statsPreview from '../../assets/images/stats-preview-component.webp';

const Work = () => {
  const projects = [
    {
      title: 'Ohmyfood website',
      category: 'project 4',
      imageSrc: ohmyfoodImage,

      link: 'https://manuelfrancisco42.github.io/ohmyfood_final/',
      description:
        'Créer un environnement de développement, décomposer une conception web, implémenter des composants variés, maîtriser le design responsive, et assurer la qualité du code pour acquérir des compétences complètes en développement web.',
    },
    {
      title: 'Print-it-JS website',
      category: 'project 5',
      imageSrc: printItJSImage,
      link: 'https://manuelfrancisco42.github.io/Print-it-JS-main/',
      description:
        "Le projet vise à enseigner le langage JavaScript en créant un carrousel interactif pour un site web, incluant l'ajout d'éléments statiques, d'écouteurs d'événements, de points de repère, la modification dynamique des diapositives, et l'implémentation d'un défilement infini.",
    },
    {
      title: 'Booki website',
      category: 'OpenClassRooms',
      imageSrc: bookiImage,
      link: 'https://manuelfrancisco42.github.io/Booki/',
      description:
        "Le projet implique le développement de la version mobile de la page d'accueil, l'ajout d'animations, la création du responsive, l'intégration de pages de restaurant, une revue complète du projet, et éventuellement, une veille sur l'utilisation de JavaScript pour les animations.",
    },
    {
      title: 'Stats Preview',
      category: 'FrontEnd Masters',
      imageSrc: statsPreview,
      link: 'https://manuelfrancisco42.github.io/Stats-Preview-Component/',
      description: '',
    },
    {
      title: 'Project placeholder',
      category: 'project 5',
      imageSrc: bookiImage,
      link: 'https://manuelfrancisco42.github.io/Booki/',
      description: '',
    },
    {
      title: 'Project placeholder',
      category: 'project 6',
      imageSrc: bookiImage,
      link: 'https://manuelfrancisco42.github.io/Booki/',
      description: '',
    },
  ];

  return (
    <div>
      <div className='main-container'>
        <section id='work-a' className='text-center paddElement-3'>
          <div className='container'>
            <h2 className='section-title'>My Work</h2>
            <p className='lead'>
              Jetez un coup d'œil de plus près à certains de mes projets.
            </p>
          </div>
          <div className='items'>
            {projects.map((project, index) => (
              <div className='item' key={index}>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='item-image'>
                    <img src={project.imageSrc} alt={`Project ${index + 1}`} />
                  </div>
                  <div className='item-text'>
                    <div className='item-text-wrap'>
                      <p className='item-text-category'>{project.category}</p>
                      <h2 className='item-text-title'>{project.title}</h2>
                      <p className='learned-ocr'>{project.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;

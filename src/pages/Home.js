/************ Home Page *************/

import React from 'react';
import './_Home.scss';

const Home = () => {
  return (
    <div>
      <div className='main-container'>
        {/* Section 1 */}
        <section id='marginSpecials' className='text-center paddElement-2'>
          <div className='container'>
            <h2 className='section-title'>FORMÉ EN INTÉGRATION WEB</h2>

            <p className='lead'>
              Créateur d'expériences numériques uniques pour sites web et
              applications.
            </p>

            <div className='specials'>
              <div>
                <i className='fas fa-comments fa-3x'></i>

                <h3>Discutions de Votre Project</h3>
                <p>
                  Donnons vie à votre projet avec dévouement et
                  professionnalisme.
                </p>
              </div>
              <div>
                <i className='fas fa-lightbulb fa-3x'></i>

                <h3>Brainstorming et Concept</h3>
                <p>
                  Définissons ensemble le concept unique de votre projet lors
                  d'une session où chaque idée prend vie.
                </p>
              </div>
              <div>
                <i className='fas fa-calendar-check fa-3x'></i>

                <h3>Planification et Discussion</h3>
                <p>
                  Discutons des détails et établissons des plans solides pour
                  assurer le succès de votre projet.
                </p>
              </div>
              <div>
                <i className='fas fa-handshake fa-3x'></i>
                <h3>Interaction au CŒUR </h3>
                <p>
                  Collaborons étroitement à chaque étape pour un processus
                  transparent et des résultats qui dépassent vos attentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id='homeStats' className='text-center paddElement-2'>
          <div className='stats'>
            <div className='formation-objective'>
              <ul>
                <li>
                  <i className='far fa-clock fa-4x'></i>
                </li>
                <li className='stats-title'>Heures de Formation</li>
                <li className='stats-number'>1125</li>
              </ul>
            </div>
            <div className='formation-objective'>
              <ul>
                <li>
                  <i className='fas fa-check-circle fa-4x'></i>
                </li>
                <li className='stats-title'>Projets Terminés</li>
                <li className='stats-number'>12</li>
              </ul>
            </div>
            <div className='formation-objective'>
              <ul>
                <li>
                  <i className='fas fa-award fa-4x'></i>
                </li>
                <li className='stats-title'>Certificat</li>
                <li className='stats-number'>+ 20</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id='homeWork' className='text-center paddElement-2'>
          <div className='container'>
            <h2 className='section-title'>Mon Processus Créatif</h2>

            <p className='lead'>
              Chaque projet UI/UX et design dans mon univers créatif suit une
              formule éprouvée pour atteindre les résultats recherchés.
            </p>
            <div className='process'>
              <div>
                <i className='fas fa-book fa-4x process-icon marginElement-2'>
                  {' '}
                </i>
                <h3>Discussion du Projet</h3>
                <p>
                  Nous entamons chaque projet par une discussion approfondie,
                  explorant ensemble les détails cruciaux pour une mise en œuvre
                  réussie.
                </p>
              </div>
              <div>
                <i className='fas  fa-desktop  fa-4x process-icon marginElement-2'>
                  {' '}
                </i>
                <h3>Brainstorming du Concept</h3>
                <p>
                  Le processus créatif prend vie lors d'une session de
                  brainstorming dynamique, où chaque idée trouve sa place pour
                  définir le concept unique de votre projet.
                </p>
              </div>
              <div>
                <i className='fas fa-calendar-alt fa-4x process-icon marginElement-2'></i>
                <h3>Planification UI/UX:</h3>
                <p>
                  Notre planification méticuleuse assure une expérience
                  utilisateur fluide sur votre site ou application.
                </p>
              </div>
              <div>
                <i className='fas fa-exchange-alt  fa-4x process-icon marginElement-2'>
                  {' '}
                </i>
                <h3>INTERACTION AU CŒUR</h3>
                <p>
                  Chaque étape respire l'interaction. Des icônes de qualité
                  transforment vos idées en une interface interactive, ajustée
                  en collaboration étroite avec votre approbation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

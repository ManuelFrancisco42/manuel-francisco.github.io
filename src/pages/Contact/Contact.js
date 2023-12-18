/************** Contact Page *************/

import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import './_Contact.scss';
import ContactInfo from '../../components/Contact/contactInfo';

function Contact() {
  const [state, handleSubmit] = useForm('xrgwvyqd');

  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowThankYou(true);

      // Automatically clear the form and hide the thank-you message after 5 seconds
      const timeoutId = setTimeout(() => {
        setShowThankYou(false);
      }, 5000);

      // Clear the timeout when the component unmounts or when a new message is sent
      return () => clearTimeout(timeoutId);
    }
  }, [state.succeeded]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Submit the form using Formspree
    handleSubmit(e);

    // Reset the showThankYou state immediately after form submission
    setShowThankYou(false);
  };

  return (
    <div>
      <div className='main-container'>
        {/* Contact Form Section */}
        <section id='contactForm' className='text-center paddElement-3'>
          <div className='container'>
            <h2 className='section-title'>Contact Me</h2>
            <p className='lead'>Stay in touch</p>

            {showThankYou ? (
              <div className='thank-you-message'>
                <p>Thank you for your message!</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className='text-fields'>
                  {/* ... Your input fields ... */}
                  <label htmlFor='name'>Name</label>
                  <input id='name' type='text' name='name' required />
                  <label htmlFor='subject'>Subject</label>
                  <input id='subject' type='text' name='subject' required />
                  <label htmlFor='_replyto'>Email Address</label>
                  <input id='_replyto' type='email' name='_replyto' required />
                  <label htmlFor='phone'>Phone Number</label>
                  <input id='phone' type='tel' name='phone' />
                  <label htmlFor='message'>Message</label>
                  <textarea id='message' name='message' required></textarea>
                  <div className='marginElement-2'>
                    <div data-netlify-recaptcha='true'></div>
                  </div>
                </div>
                <button
                  type='submit'
                  className='button-dark'
                  disabled={state.submitting}
                >
                  Submit
                </button>
                {state.errors && state.errors.length > 0 && (
                  <div className='error-message'>
                    {state.errors.map((error, index) => (
                      <div key={index}>{error.message}</div>
                    ))}
                  </div>
                )}
              </form>
            )}
          </div>
          <ContactInfo />
        </section>

        {/* Contact Heading Section */}
        <section id='contactHeading' className='background-main paddElement-4'>
          <div className='container'>
            <h1>
              Votre vision. Mon engagement. Ensemble, créons la toile de demain.
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;

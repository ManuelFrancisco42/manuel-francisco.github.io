/************ ContactInfo js Page *************/

import React from 'react';
import './_contactInfo.scss';
const ContactInfo = () => {
  return (
    <section id='personalContact' className='py-3 background-dark'>
      <div className='container'>
        <div className='infoContact'>
          <div>
            <i className='fas fa-envelope fa-2x'></i>
            <h3>Email</h3>
            <p>ciesafrancisco@hotmail.com</p>
          </div>
          <div>
            <i className='fas fa-phone fa-2x'></i>
            <h3>Phone</h3>
            <p>(0033) 0611878144 </p>
          </div>
          <div>
            <i className='fas fa-address-card fa-2x'></i>
            <h3>Address</h3>
            <p>61, rue Vaillant Couturier</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

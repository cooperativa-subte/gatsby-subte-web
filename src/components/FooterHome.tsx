import React from 'react';

import InstagramIcon from '../images/instagram.svg';
import TwitterIcon from '../images/twitter.svg';
import FacebookIcon from '../images/facebook.svg';

const FooterHome = () => {
  return (
    <div>
      <div className="desktop-container">
        <p>
          San Salvador 1510, Montevideo | <a href="mailto:hola@subte.uy">hola@subte.uy</a>
        </p>
        <a
          className="img-container"
          href="https://instagram.com/subteuy/"
          rel="noreferrer"
          target="_blank"
        >
          <img alt="Icono de Instagram" src={InstagramIcon} />
        </a>
        <a
          className="img-container"
          href="https://twitter.com/subte_uy"
          rel="noreferrer"
          target="_blank"
        >
          <img alt="Icono de Twitter" src={TwitterIcon} />
        </a>
        <a
          className="img-container"
          href="https://facebook.com/subteuy"
          rel="noreferrer"
          target="_blank"
        >
          <img alt="Icono de Facebook" src={FacebookIcon} />
        </a>
      </div>
    </div>
  );
};

export default FooterHome;

import React from 'react';
import styled from 'styled-components';

import InstagramIcon from '../images/instagram.svg';
import TwitterIcon from '../images/twitter.svg';
import FacebookIcon from '../images/facebook.svg';

const StyledFooterHomeContainer = styled.footer`
  position: fixed;
  bottom: 1rem;
  width: 100%;
  .desktop-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1100px;
    margin: 0 auto;
    font-size: 1rem;
    border-top: 1px solid var(--border-dark-gray);
    padding-top: 0.5rem;
    a {
      width: 1.25rem;
      height: 1.25rem;
      margin-left: 1rem;
      img {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
`;

const FooterHome = () => {
  return (
    <StyledFooterHomeContainer>
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
    </StyledFooterHomeContainer>
  );
};

export default FooterHome;

import React from 'react';
import styled from 'styled-components';

import InstagramIcon from '../images/instagram.svg';
import TwitterIcon from '../images/twitter.svg';
import FacebookIcon from '../images/facebook.svg';

const StyledFooterContainer = styled.footer`
  margin-top: 3rem;
  .desktop-container {
    max-width: 1100px;
    margin: 0 auto;
    border-top: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    font-size: 0.85rem;
    .contact-info-container {
      display: flex;
      a {
        text-decoration: none;
        color: black;
        &.img-container {
          display: flex;
        }
      }
      img {
        width: 1rem;
        height: 1rem;
        margin-left: 1rem;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooterContainer>
      <div className="desktop-container">
        <div>
          <p>
            <strong>Cooperar.</strong> Una idea simple y potente que elegimos para trabajar juntes
          </p>
        </div>
        <div className="contact-info-container">
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
    </StyledFooterContainer>
  );
};

export default Footer;

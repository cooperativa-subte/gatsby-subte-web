import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import SEO from '../components/seo';
import FCPULogo from '../images/fcpu-logo.svg';
import CICLogo from '../images/cic-logo.svg';
import ComunaLogo from '../images/comuna-logo.svg';
import PedalLogo from '../images/pedal-logo.svg';

const StyledNosotresPageContainer = styled.div`
  border-top: 1px solid var(--border-gray);
  .desktop-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 0 6rem;
    h1 {
      padding-right: 1rem;
    }
    p {
      margin-bottom: 2rem;
    }
    .row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .row-5 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      align-items: center;
      justify-items: center;
    }
    .photos-container {
      gap: 1rem 1rem;
      margin-bottom: 5rem;
      p {
        font-family: 'HelveticaMedium';
      }
    }
  }
`;

const Nosotres = () => {
  return (
    <>
      <SEO
        description="Somos una cooperativa de trabajo enfocada en la comunicación, con una perspectiva popular y colaborativa. Trabajamos con organizaciones sociales, culturales, sindicatos, cooperativas y emprendimientos."
        title="Nosotres"
      />
      <StyledNosotresPageContainer>
        <div className="desktop-container">
          <section className="row">
            <h1>No somos una agencia</h1>
            <div>
              <p>
                Somos una cooperativa de trabajo enfocada en la comunicación, con una perspectiva
                popular y colaborativa. Trabajamos con organizaciones sociales, culturales,
                sindicatos, cooperativas y emprendimientos.
              </p>
              <p>
                Tenemos la convicción de que la construcción de alternativas que aporten a
                transformaciones sociales se da en el plano económico, político y cultural, pero
                también en el simbólico y estético. Conformamos este espacio para trabajar y
                reflexionar articulando estas dimensiones.
              </p>
            </div>
          </section>
          <section className="row photos-container">
            <div>
              <StaticImage
                alt="Foto de Mari en blanco y negro"
                src="../images/Nosotres-Mari-Web-700x700.webp"
              />
              <p>Mariana Escobar</p>
            </div>
            <div>
              <StaticImage
                alt="Foto de Cata en blanco y negro"
                src="../images/Nosotres-Cata-Web-700x700.webp"
              />
              <p>Catalina Alonso</p>
            </div>
            <div>
              <StaticImage
                alt="Foto de Nati en blanco y negro"
                src="../images/Nosotres-Nati-Web-700x700.webp"
              />
              <p>Natalia Acosta</p>
            </div>
            <div>
              <StaticImage
                alt="Foto de Pancho en blanco y negro"
                src="../images/Nosotres-Pancho-Web-700x700.webp"
              />
              <p>Francisco Cobas</p>
            </div>
            <div>
              <StaticImage
                alt="Foto de Vale en blanco y negro"
                src="../images/Nosotres-Vale-Web-700x700.webp"
              />
              <p>Valentina Lasalvia</p>
            </div>
            <div>
              <StaticImage
                alt="Foto de Joaco en blanco y negro"
                src="../images/Nosotres-Joaco-Web-700x700.webp"
              />
              <p>Joaquín Cabrera</p>
            </div>
          </section>
          <section className="row">
            <h2>Proyectos aliados</h2>
            <p>
              Subte es una cooperativa que busca crecer practicando la intercooperación. Estos son
              los proyectos con los que venimos alcanzando acuerdos de trabajo conjunto.
            </p>
          </section>
          <section className="row-5 proyectos-aliados-logos-container">
            <img alt="Logo de la Federación de Cooperativas del Uruguay" src={FCPULogo} />
            <img alt="Logo de Pedal" src={PedalLogo} />
            <img alt="Logo de la Cooperativa de trabajo Comuna" src={ComunaLogo} />
            <img alt="Logo de la Cooperativa de trabajo Comuna" src={ComunaLogo} />
            <img alt="Logo de Cooperativa Integral Consultora (CIC)" src={CICLogo} />
          </section>
        </div>
      </StyledNosotresPageContainer>
    </>
  );
};

export default Nosotres;

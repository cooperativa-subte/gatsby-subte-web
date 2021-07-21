import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Menu from './Menu';

import LogoSUBTE from '../images/LogoSUBTE_horizontal.svg';
import SearchIcon from '../images/search.svg';

const StyledHeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  background: white;
  height: 4rem;
  display: flex;
  .desktop-container {
    max-width: 1100px;
    display: flex;
    flex-grow: 1;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }
`;

const Header = () => {
  return (
    <StyledHeaderContainer>
      <div className="desktop-container">
        <Link to="/">
          <img
            src={LogoSUBTE}
            width="200"
            height="50"
            alt="Logo de la cooperativa de trabajo SUBTE"
          />
        </Link>
        <Menu />
        <img src={SearchIcon} alt="Icono de busqueda" />
      </div>
    </StyledHeaderContainer>
  );
};

export default Header;

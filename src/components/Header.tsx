import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import LogoSUBTE from '../images/LogoSUBTE_horizontal.svg';
import SearchIcon from '../images/search.svg';

import Menu from './Menu';

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
            alt="Logo de la cooperativa de trabajo SUBTE"
            height="50"
            src={LogoSUBTE}
            width="200"
          />
        </Link>
        <Menu />
        <img alt="Icono de busqueda" src={SearchIcon} />
      </div>
    </StyledHeaderContainer>
  );
};

export default Header;

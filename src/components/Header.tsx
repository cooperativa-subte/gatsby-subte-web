import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Menu from './Menu';

import LogoSUBTE from '../images/LogoSUBTE_horizontal.svg';

const StyledHeaderContainer = styled.header`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeaderContainer>
      <Link to="/">
        <img
          src={LogoSUBTE}
          width="200"
          height="50"
          alt="Logo de la cooperativa de trabajo SUBTE"
        />
      </Link>
      <Menu />
    </StyledHeaderContainer>
  );
};

export default Header;

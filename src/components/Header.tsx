import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

import LogoSUBTE from '../images/LogoSUBTE_horizontal.svg';

const StyledHeaderContainer = styled.header`
  display: flex;
`;

const Header = () => {
  return (
    <StyledHeaderContainer>
      <img src={LogoSUBTE} width="200" height="50" />
      <Menu />
    </StyledHeaderContainer>
  );
};

export default Header;

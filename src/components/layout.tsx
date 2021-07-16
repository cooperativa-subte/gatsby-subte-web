import React, { ElementType } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';

const StyledOuterContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <StyledOuterContainer>
      <Header />

      <main>{children}</main>

      <footer></footer>
    </StyledOuterContainer>
  );
};

export default Layout;

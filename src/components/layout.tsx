import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const StyledOuterContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <StyledOuterContainer>
      <Header />

      <main>{children}</main>

      <Footer />
    </StyledOuterContainer>
  );
};

export default Layout;

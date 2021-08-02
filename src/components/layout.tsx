import React, { ReactDOM } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import FooterHome from './FooterHome';

const StyledOuterContainer = styled.div`
  margin: 0 auto;
`;

type LayoutTypes = {
  path: string;
  children: ReactDOM;
};

const Layout = ({ path, children }: LayoutTypes) => {
  return (
    <StyledOuterContainer>
      <Header />

      <main>{children}</main>

      {path === '/' ? <FooterHome /> : <Footer />}
    </StyledOuterContainer>
  );
};

export default Layout;

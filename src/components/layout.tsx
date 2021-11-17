import React, { ReactDOM } from 'react';
import { Container } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';
import FooterHome from './FooterHome';

type LayoutTypes = {
  path: string;
  children: ReactDOM;
};

const Layout = ({ path, children }: LayoutTypes) => {
  return (
    <>
      {path !== '/' ? (
        <>
          <Header path={path} />
          <main>{children}</main>
          <Footer />
        </>
      ) : (
        <>
          <Header path={path} />
          <main>{children}</main>
          <FooterHome />
        </>
      )}
    </>
  );
};

export default Layout;

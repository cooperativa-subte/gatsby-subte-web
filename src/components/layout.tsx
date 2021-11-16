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
  console.log(path);

  return (
    <>
      {path !== '/' ? (
        <>
          <Header path={path} />
          <Container maxW="container.xl">
            <main>{children}</main>
            <Footer />
          </Container>
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

import React, { ReactDOM } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FooterHome from '../components/FooterHome';
import FooterBlog from '../components/FooterBlog';

type LayoutTypes = {
  path: string;
  children: ReactDOM;
};

const Layout = ({ path, children }: LayoutTypes) => {
  return (
    <>
      {/\/conversatorios\/.*/.test(path) || /\/subsuelo\/.*/.test(path) ? (
        <>
          <Header path={path} />
          <main>{children}</main>
          <FooterBlog />
        </>
      ) : (
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
              {/* <FooterHome /> */}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Layout;

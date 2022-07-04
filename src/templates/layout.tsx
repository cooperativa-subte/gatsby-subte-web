import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

type LayoutTypes = {
  path: string;
  children: React.ReactNode;
};

const pagesWithoutFooter = ['/', '/links/'];

const Layout = ({ path, children }: LayoutTypes) => {
  return (
    <>
      {!pagesWithoutFooter.includes(path) ? (
        <>
          <Header path={path} />
          <main style={{ display: 'flex' }}>{children}</main>
          <Footer path={path} />
        </>
      ) : (
        <>
          <Header path={path} />
          <main style={{ display: 'flex' }}>{children}</main>
        </>
      )}
    </>
  );
};

export default Layout;

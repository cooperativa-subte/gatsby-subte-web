import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

type LayoutTypes = {
  path: string;
  children: React.ReactNode;
  location: any;
};

const Layout = ({ path, children, location }: LayoutTypes) => {
  const pagesWithoutFooter = ['/', '/links/'];

  return (
    <>
      <Header path={path} />
      <main style={{ display: 'flex' }}>{children}</main>
      {!pagesWithoutFooter.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;

import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

type NotFoundPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: {};
};

const NotFoundPage = ({ data, location }: NotFoundPageProps) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <Seo title="404: Not Found" />
      <Layout location={location} title={siteTitle}>
        <div>
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

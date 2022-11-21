import React from 'react';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import logo from '../images/PerfilSubte.jpg';

const SEO = ({
  title,
  description,
  image,
  article,
}: {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || logo}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <>
      <meta content={seo.description} name="description" />
      <meta content={seo.image} name="image" />

      {seo.url && <meta content={seo.url} property="og:url" />}

      {(article ? true : null) && <meta content="article" property="og:type" />}

      {seo.title && <meta content={seo.title} property="og:title" />}

      {seo.description && <meta content={seo.description} property="og:description" />}

      {seo.image && <meta content={seo.image} property="og:image" />}
      {seo.image && <meta content="800" property="og:image:width" />}
      {seo.image && <meta content="800" property="og:image:height" />}
      {seo.image && <meta content="image/jpeg" property="og:image:type" />}
      <meta content="website" property="og:type" />

      <meta content="summary_large_image" name="twitter:card" />

      {seo.title && <meta content={seo.title} name="twitter:title" />}

      {seo.description && <meta content={seo.description} name="twitter:description" />}

      {seo.image && <meta content={seo.image} name="twitter:image" />}
      <title>{seo.title} | Cooperativa de trabajo SUBTE</title>
    </>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`;

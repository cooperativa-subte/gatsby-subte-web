require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  siteMetadata: {
    title: 'Cooperativa de trabajo SUBTE',
    titleTemplate: '%s | Cooperativa de trabajo SUBTE',
    description: 'Cooperativa de comunicación visual, programación y formación',
    url: process.env.SITE_URL,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        type: {
          MediaItem: {
            localFile: {
              excludeByMimeTypes: [`video/mp4`, 'audio/mpeg', 'audio/mpeg3', 'image/gif'],
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cooperativa de trabajo SUBTE`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        isUsingColorMode: true,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-EV7G1LME9D',
        head: false,
      },
    },
  ],
};

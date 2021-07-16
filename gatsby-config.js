/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || `https://subtedesarrollo.xyz/graphql`,
        searchAndReplace: [
          {
            search: 'wp-content/uploads/',
            replace: 'wp-content/uploads-webpc/uploads/',
          },
          {
            search: '.jpg',
            replace: '.jpg.webp',
          },
        ],
        type: {
          MediaItem: {
            lazyNodes: true,
            localFile: {
              excludeByMimeTypes: [
                `video/mp4`,
                'audio/mpeg',
                'audio/mpeg3',
                'image/gif',
              ],
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
};

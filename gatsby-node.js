const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const projectTemplate = path.resolve(`./src/templates/project.tsx`);
  const blogTemplate = path.resolve(`./src/templates/blogTemplate.tsx`);
  const conversatorioTemplate = path.resolve('./src/templates/conversatorioTemplate.tsx');
  const result = await graphql(`
    query {
      proyectosPosts: allWpPost(
        filter: { categories: { nodes: { elemMatch: { slug: { eq: "proyectos" } } } } }
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
      blogPosts: allWpPost(
        filter: { categories: { nodes: { elemMatch: { slug: { eq: "blog" } } } } }
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
      podcastsPosts: allWpPost(
        filter: { categories: { nodes: { elemMatch: { slug: { eq: "podcasts" } } } } }
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
      conversatoriosPosts: allWpPost(
        sort: { fields: date, order: DESC }
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { in: ["conversatorio-0", "conversatorio-1"] } } }
          }
        }
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (!result.data) return;

  await result.data.proyectosPosts.edges.forEach((project) => {
    createPage({
      path: `/proyectos/${project.node.slug}`,
      component: projectTemplate,
      context: {
        id: project.node.id,
      },
    });
  });
  await result.data.blogPosts.edges.forEach((post) => {
    createPage({
      path: `${post.node.slug}`,
      component: blogTemplate,
      context: {
        id: post.node.id,
      },
    });
  });
  await result.data.podcastsPosts.edges.forEach((post) => {
    createPage({
      path: `${post.node.slug}`,
      component: blogTemplate,
      context: {
        id: post.node.id,
      },
    });
  });
  await result.data.conversatoriosPosts.edges.forEach((post) => {
    createPage({
      path: `/conversatorios/${post.node.slug}`,
      component: conversatorioTemplate,
      context: {
        id: post.node.id,
      },
    });
  });
};

exports.createResolvers = ({ actions, cache, createNodeId, createResolvers, store, reporter }) => {
  const { createNode } = actions;

  createResolvers({
    WpMediaItem: {
      imageFile: {
        type: `File`,
        resolve(source) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
  });
};

const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const projectTemplate = path.resolve(`./src/templates/project.tsx`);
  const blogTemplate = path.resolve(`./src/templates/blogTemplate.tsx`);
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
    }
  `);

  if (!result.data) return;

  await result.data.proyectosPosts.edges.forEach((project) => {
    createPage({
      path: `${project.node.slug}`,
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
};

const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const projectTemplate = path.resolve(`./src/templates/project.tsx`);
  const result = await graphql(`
    query {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "proyectos" } } } }
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

  await result.data.allWpPost.edges.forEach((project) => {
    createPage({
      path: `${project.node.slug}`,
      component: projectTemplate,
      context: {
        id: project.node.id,
      },
    });
  });
};

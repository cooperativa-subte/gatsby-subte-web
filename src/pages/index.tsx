import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';
import { Stack } from '@chakra-ui/react';

import SEO from '../components/seo';
import CustomWrappterGatsbyImage from '../components/CustomWrappterGatsbyImage';

type ProyectoType = {
  id: string;
  slug: string;
  title: string;
  featuredImage: {
    node: {
      altText: string;
      localFile: FileNode;
    };
  };
};

type IndexQueryProps = {
  proyectosPortada: {
    nodes: ProyectoType[];
  };
};

type IndexPageProps = PageProps<IndexQueryProps>;

const IndexPage = ({ data: { proyectosPortada } }: IndexPageProps) => (
  <>
    <SEO />
    <Stack maxW="1440px" mx="auto">
      {proyectosPortada.nodes.length > 0 &&
        proyectosPortada.nodes.map((project: ProyectoType) => (
          <Link
            key={project.slug}
            aria-label={`Link a la página del proyecto de ${project.title}`}
            to={`/proyectos/${project.slug}`}
          >
            {project.featuredImage && (
              <CustomWrappterGatsbyImage
                altText={proyectosPortada.nodes[0].featuredImage.node.altText}
                localFile={project.featuredImage.node.localFile}
              />
            )}
          </Link>
        ))}
    </Stack>
  </>
);

export default IndexPage;

export const query = graphql`
  query MyIndexQuery {
    proyectosPortada: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "proyectos-portada" } } } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

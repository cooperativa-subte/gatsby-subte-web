import React, { useEffect, useState } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';

import SEO from '../components/seo';

type ProyectoType = {
  id: string;
  slug: string;
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

const IndexPage = ({ data: { proyectosPortada } }: IndexPageProps) => {
  const [imgsPortada, setImgsPortada] = useState<{
    [slug: string]: IGatsbyImageData;
  }>();

  useEffect(() => {
    const tmpImages: { [slug: string]: IGatsbyImageData } = {};

    proyectosPortada.nodes.map((proyecto: ProyectoType) => {
      const img = getImage(proyecto.featuredImage.node.localFile);

      if (img) tmpImages[proyecto.slug] = img;
    });
    setImgsPortada(tmpImages);
  }, []);

  if (!imgsPortada) return null;

  return (
    <>
      <SEO />
      <div>
        {Object.keys(imgsPortada).length > 0 &&
          Object.keys(imgsPortada).map((imgPortadaKey: string) => (
            <Link key={imgPortadaKey} to={`/${imgPortadaKey}`}>
              <GatsbyImage
                alt={proyectosPortada.nodes[0].featuredImage.node.altText}
                image={imgsPortada[imgPortadaKey]}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

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
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 11100)
              }
            }
          }
        }
      }
    }
  }
`;

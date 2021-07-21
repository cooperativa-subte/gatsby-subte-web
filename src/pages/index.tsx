import React, { useEffect, useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

type ProyectoType = {
  id: string;
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
  const [imgsPortada, setImgsPortada] = useState<IGatsbyImageData[] | []>([]);
  useEffect(() => {
    const tmpImages: IGatsbyImageData[] = [];
    proyectosPortada.nodes.map((proyecto: ProyectoType) => {
      const img = getImage(proyecto.featuredImage.node.localFile);
      if (img) tmpImages.push(img);
    });
    setImgsPortada(tmpImages);
  }, []);
  return (
    <div>
      {imgsPortada.length > 0 &&
        imgsPortada.map((image: IGatsbyImageData) => (
          <GatsbyImage
            image={image}
            alt={proyectosPortada.nodes[0].featuredImage.node.altText}
          />
        ))}
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    proyectosPortada: allWpPost(
      filter: {
        categories: {
          nodes: { elemMatch: { slug: { eq: "proyectos-portada" } } }
        }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
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

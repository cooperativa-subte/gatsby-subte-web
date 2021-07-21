import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';

export type TagsType = {
  id: string;
  slug: string;
  name: string;
};

export type ProjectType = {
  id: string;
  datos_proyecto: {
    cliente: string;
    descripcionCorta: string;
    fecha: string;
    nombre: string;
    sector: string;
  };
  content: string;
  tags: {
    nodes: TagsType[];
  };
  featuredImage: {
    node: {
      altText: string;
      localFile: {
        childImageSharp: {
          gatsbyImageData: FileNode;
        };
      };
    };
  };
};

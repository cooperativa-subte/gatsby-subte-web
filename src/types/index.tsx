import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';

export type PostType = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
};

export type TagsType = {
  id: string;
  slug: string;
  name: string;
};

export type ProjectType = {
  id: string;
  slug: string;
  content: string;
  datosProyecto: {
    cliente: string;
    descripcionCorta: string;
    fecha: string;
    nombre: string;
    sector: string;
    imagenesComplementarias: string;
    featuredVideo: string;
    fraseDestacada: string;
  };
  tags: {
    nodes: TagsType[];
  };
  featuredImage: {
    node: {
      altText: string;
      localFile: FileNode;
    };
  };
};

export interface BlogPostType extends PostType {
  subsueloFields: {
    featuredTitleWord: string;
  };
}

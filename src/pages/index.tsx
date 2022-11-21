import React, { useEffect, useState } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';
import { Box, Stack, Text } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import SEO from '../components/seo';

type ProyectoType = {
  id: string;
  slug: string;
  title: string;
  datos_proyecto_portada: {
    imagenPortadaDesktop: {
      altText: string;
      sourceUrl: string;
      localFile: FileNode;
    };
    imagenPortadaMobile: {
      altText: string;
      sourceUrl: string;
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
  const [randomProjects, setRandomProjects] = useState<ProyectoType[]>([]);

  useEffect(() => {
    setRandomProjects([...proyectosPortada.nodes].sort(() => 0.5 - Math.random()));
  }, [proyectosPortada.nodes]);

  return (
    <>
      <Stack
        height="calc(100vh - 72.5px)"
        mx="auto"
        overflowY="scroll"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {randomProjects.length > 0 &&
          randomProjects.map((project: ProyectoType) => (
            <Box
              key={project.slug}
              h="calc(100vh - 72.5px)"
              position="relative"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Link
                aria-label={`Link a la página del proyecto de ${project.title}`}
                style={{
                  marginTop: 0,
                  position: 'relative',
                  width: '100vw',
                  display: 'inline-block',
                }}
                to={`/proyectos/${project.slug}`}
              >
                {project.datos_proyecto_portada.imagenPortadaDesktop && (
                  <Box
                    display={['none', 'block']}
                    height="calc(100vh - 72.5px)"
                    maxH="1000vh"
                    sx={{
                      '& img': {
                        objectPosition: '0 -50px',
                      },
                    }}
                  >
                    <GatsbyImage
                      alt={project.datos_proyecto_portada.imagenPortadaDesktop.altText}
                      //@ts-ignore
                      image={getImage(
                        project.datos_proyecto_portada.imagenPortadaDesktop.localFile,
                      )}
                    />
                  </Box>
                )}
                {project.datos_proyecto_portada.imagenPortadaMobile && (
                  <Box display={['block', 'none']}>
                    <GatsbyImage
                      alt={project.datos_proyecto_portada.imagenPortadaMobile.altText}
                      // @ts-ignore
                      image={getImage(project.datos_proyecto_portada.imagenPortadaMobile.localFile)}
                      style={{ height: 'calc(100vh - 72px)' }}
                    />
                  </Box>
                )}
                <Box
                  left="0"
                  mx="auto"
                  position="absolute"
                  right="0"
                  top="0"
                  w={['auto', 'container.xl']}
                >
                  <Text
                    color="white"
                    fontSize="md"
                    mt={[5, 10]}
                    mx="auto"
                    paddingInlineEnd="1rem"
                    paddingInlineStart="1rem"
                    w={['auto', 'container.xl']}
                  >
                    Proyectos
                  </Text>
                  <Text
                    color="white"
                    fontFamily="helveticaBold"
                    fontSize="2xl"
                    mx="auto"
                    paddingInlineEnd="1rem"
                    paddingInlineStart="1rem"
                    w={['auto', 'container.xl']}
                  >
                    {project.title}
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
      </Stack>
    </>
  );
};

export default IndexPage;

export function Head() {
  return <SEO title="Inicio" />;
}

export const query = graphql`
  query MyIndexQuery {
    proyectosPortada: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "proyectos-portada" } } } } }
      sort: { date: DESC }
    ) {
      nodes {
        id
        slug
        title
        datos_proyecto_portada {
          imagenPortadaDesktop {
            sourceUrl
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(transformOptions: { fit: CONTAIN })
              }
            }
          }
          imagenPortadaMobile {
            sourceUrl
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

import React, { useEffect, useState } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';
import { Box, Stack, Text } from '@chakra-ui/react';

import SEO from '../components/seo';
import CustomWrappterGatsbyImage from '../components/CustomWrappterGatsbyImage';

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
      <SEO />
      <Stack
        height="calc(100vh - 72px)"
        mx="auto"
        overflowY="scroll"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {randomProjects.length > 0 &&
          randomProjects.map((project: ProyectoType) => (
            <Box
              key={project.slug}
              h="100vh"
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
                  <Box display={['none', 'block']} height="100vh" maxH="1000vh">
                    <CustomWrappterGatsbyImage
                      altText={project.datos_proyecto_portada.imagenPortadaDesktop.altText}
                      localFile={project.datos_proyecto_portada.imagenPortadaDesktop.localFile}
                    />
                  </Box>
                )}
                {project.datos_proyecto_portada.imagenPortadaMobile && (
                  <Box display={['block', 'none']}>
                    <CustomWrappterGatsbyImage
                      altText={project.datos_proyecto_portada.imagenPortadaMobile.altText}
                      localFile={project.datos_proyecto_portada.imagenPortadaMobile.localFile}
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
                    mt={['10', '20']}
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

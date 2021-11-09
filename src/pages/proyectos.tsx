import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  ListItem,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { graphql, Link, PageProps } from 'gatsby';
import React, { useState } from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';

import { ProjectType } from '../types';
import SEO from '../components/seo';

type Tag = {
  name: string;
  slug: string;
};

type ProyectosQueryProps = {
  allWpPost: {
    nodes: ProjectType[];
  };
  allWpTag: {
    nodes: Tag[];
  };
};

type ProyectosPageProps = PageProps<ProyectosQueryProps>;

const ImageComponent = ({ localFile, altText }: { localFile: FileNode; altText: string }) => {
  const [image] = useState<IGatsbyImageData | undefined>(getImage(localFile));

  return <>{image && <GatsbyImage alt={altText} image={image} />}</>;
};

const Proyectos = ({ data: { allWpPost, allWpTag } }: ProyectosPageProps) => {
  return (
    <>
      <SEO
        article={false}
        description="Navegá por los proyectos creados por la cooperativa y enterate de todos los servicios que ofrecemos"
        title="Proyectos"
      />
      <Flex
        alignItems="center"
        as="section"
        borderBottom="0.5px"
        borderBottomColor="blackAlpha.500"
        borderBottomStyle="solid"
        justifyContent="space-between"
        mb={8}
        pb={3}
      >
        <Heading>Proyectos</Heading>
        <Box>
          {allWpTag.nodes.length > 0 && (
            <List display="flex" flexDirection="row">
              <ListItem>
                <Link to="/">Todos</Link>
              </ListItem>
              {allWpTag.nodes.map((tag: Tag) => (
                <ListItem key={tag.slug} ml={5}>
                  <Link to={`/${tag.slug}`}>{tag.name}</Link>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Flex>
      {allWpPost.nodes.length > 0 && (
        <Grid gridColumnGap={8} gridRowGap={8} gridTemplateColumns="repeat(2, 1fr)">
          {allWpPost.nodes.map((project: ProjectType) => (
            <GridItem key={project.id}>
              {project.featuredImage && (
                <Link to={`/proyectos/${project.slug}`}>
                  <ImageComponent
                    altText={project.featuredImage.node.altText}
                    localFile={project.featuredImage.node.localFile}
                  />
                </Link>
              )}
              <Heading as="h4" fontFamily="helveticaExtraBold" fontSize="xl" mt={3}>
                {project.datos_proyecto.nombre}
              </Heading>
              <Stack
                direction="row"
                divider={<StackDivider borderColor="gray.200" />}
                mt={3}
                spacing={3}
              >
                <Box>
                  <Text color="blackAlpha.500" fontSize="sm">
                    Cliente:
                  </Text>
                  <Text color="blackAlpha.500" fontSize="sm">
                    {project.datos_proyecto.cliente}
                  </Text>
                </Box>
                <Box>
                  <Text color="blackAlpha.500" fontSize="sm">
                    Sector:
                  </Text>
                  <Text color="blackAlpha.500" fontSize="sm">
                    {project.datos_proyecto.sector}
                  </Text>
                </Box>
                <Box>
                  <Text color="blackAlpha.500" fontSize="sm">
                    Tipo de proyecto:
                  </Text>
                  <Text color="blackAlpha.500" fontSize="sm">
                    {project.tags.nodes.reduce((currentText, tag, i) => {
                      currentText +=
                        i === project.tags.nodes.length - 1 ? tag.name : `${tag.name}, `;

                      return currentText;
                    }, '')}
                  </Text>
                </Box>
              </Stack>
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Proyectos;

export const query = graphql`
  query ProyectosPage {
    allWpTag {
      nodes {
        name
        slug
      }
    }
    allWpPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        slug
        title
        datos_proyecto {
          cliente
          sector
          nombre
        }
        tags {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    }
  }
`;

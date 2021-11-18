import React, { useState } from 'react';
import {
  AspectRatio,
  Box,
  Container,
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

import { ProjectType } from '../types';
import SEO from '../components/seo';
import CustomWrappterGatsbyImage from '../components/CustomWrappterGatsbyImage';

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

const Proyectos = ({ data: { allWpPost, allWpTag } }: ProyectosPageProps) => {
  const [selectedTag, setSelectedTag] = useState<string>('todos');
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(allWpPost.nodes);

  function filterProjects(slug: string) {
    setSelectedTag(slug);
    if (slug === 'todos') {
      setFilteredProjects(allWpPost.nodes);
    } else {
      setFilteredProjects(
        allWpPost.nodes.filter((p: ProjectType) =>
          p.tags.nodes.map((t: Tag) => t.slug).includes(slug),
        ),
      );
    }
  }

  return (
    <>
      <SEO
        article={false}
        description="Navegá por los proyectos creados por la cooperativa y enterate de todos los servicios que ofrecemos"
        title="Proyectos"
      />
      <Container maxW="container.xl">
        <Flex
          alignItems="center"
          as="section"
          borderBottom="0.5px"
          borderBottomColor="blackAlpha.500"
          borderBottomStyle="solid"
          flexWrap="wrap"
          justifyContent="space-between"
          mb={8}
          mt={10}
          pb={3}
        >
          <Heading>Proyectos</Heading>
          <Box>
            {allWpTag.nodes.length > 0 && (
              <List display="flex" flexDirection="row" flexWrap="wrap">
                <ListItem
                  bgColor={selectedTag === 'todos' ? 'gray.200' : 'white'}
                  borderRadius={15}
                  mr={2}
                  px="3"
                  py="1"
                >
                  <Text cursor="pointer" onClick={() => filterProjects('todos')}>
                    Todos
                  </Text>
                </ListItem>
                {allWpTag.nodes.map((tag: Tag) => (
                  <ListItem
                    key={tag.slug}
                    bgColor={selectedTag === tag.slug ? 'gray.200' : 'white'}
                    borderRadius={15}
                    mr={2}
                    px="3"
                    py="1"
                  >
                    <Text cursor="pointer" onClick={() => filterProjects(tag.slug)}>
                      {tag.name}
                    </Text>
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        </Flex>
        {filteredProjects.length > 0 && (
          <Grid
            as="section"
            gridColumnGap={8}
            gridRowGap={8}
            gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
            mb={10}
          >
            {filteredProjects.map((project: ProjectType) => (
              <GridItem key={project.id}>
                {project.featuredImage && (
                  <AspectRatio ratio={16 / 9}>
                    <Link to={`/proyectos/${project.slug}`}>
                      <CustomWrappterGatsbyImage
                        altText={project.featuredImage.node.altText}
                        localFile={project.featuredImage.node.localFile}
                      />
                    </Link>
                  </AspectRatio>
                )}
                <Heading as="h4" fontFamily="HelveticaMedium" fontSize="3xl" mt={3}>
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
      </Container>
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
    allWpPost(
      sort: { fields: date, order: DESC }
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "proyectos" } } } } }
    ) {
      nodes {
        id
        slug
        title
        datos_proyecto {
          cliente
          sector
          nombre
          featuredVideo
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

import React from 'react';
import { Box, Grid, Heading, Text, Container, GridItem, Center } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import { PostType } from '../types';

type SubsueloPageTypes = {
  data: {
    blogPosts: {
      nodes: PostType[];
    };
  };
};

const Subsuelo = ({ data: { blogPosts } }: SubsueloPageTypes) => {
  return (
    <>
      <SEO
        description="En este espacio presentamos reflexiones, podcasts, artículos y más contentido que hemos estado generando con la cooperativa."
        title="Subsuelo"
      />
      <Center bg="black">
        <Container maxW="container.xl" my={14}>
          <Grid color="white" gridColumnGap={52} gridTemplateColumns={['1fr', '1fr 1fr']}>
            <GridItem mb={[8, 0]}>
              <Heading fontFamily="HelveticaBlack">Subsuelo</Heading>
              <Text fontSize={'xl'}>Apuntes cooperativos</Text>
            </GridItem>
            <GridItem>
              <Text>
                Reflexiones sobre nuestra experiencia cooperativa, sobre las experiencias de
                autogestión, los proyectos de trabajo y los procesos colaborativos.
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Center>
      <Container maxW="container.xl">
        <Grid gridColumnGap={52} gridTemplateColumns={['1fr', '1fr 1fr']} my={10}>
          {blogPosts.nodes.map((blog: PostType) => (
            <Box key={blog.id} mb="12">
              <Heading>
                <Link to={`/subsuelo/${blog.slug}`}>{blog.title}</Link>
              </Heading>
              <Box dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
              <Link to={`/subsuelo/${blog.slug}`}>Leer</Link>
            </Box>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Subsuelo;

export const query = graphql`
  query SubsueloPostQuery {
    blogPosts: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "blog" } } } } }
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        id
        slug
        title
        excerpt
      }
    }
  }
`;

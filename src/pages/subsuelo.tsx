import React from 'react';
import { Box, Grid, Heading, Text, Container, GridItem, Center } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import { BlogPostType } from '../types';

type SubsueloPageTypes = {
  data: {
    blogPosts: {
      nodes: BlogPostType[];
    };
  };
};

const Subsuelo = ({ data: { blogPosts } }: SubsueloPageTypes) => {
  return (
    <>
      <Center bg="black">
        <Container maxW="container.xl" my={14}>
          <Grid color="white" gridColumnGap={52} gridTemplateColumns={['1fr', '1fr 1fr']}>
            <GridItem mb={[8, 0]}>
              <Heading fontFamily="HelveticaBlack" fontSize="5xl">
                Subsuelo
              </Heading>
              <Text color="alternative" fontFamily="helveticaBold" fontSize={'2xl'}>
                Apuntes cooperativos
              </Text>
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
        <Grid gridColumnGap={42} gridTemplateColumns={['1fr', 'repeat(3, 1fr)']} my={10}>
          {blogPosts.nodes.map((blog: BlogPostType) => (
            <Box key={blog.id} mb="12">
              <Heading fontFamily="helveticaBold" fontSize="2xl" mb={6}>
                <Link to={`/subsuelo/${blog.slug}`}>
                  <Box as="span" color="alternative">
                    {blog.subsueloFields.featuredTitleWord}
                  </Box>{' '}
                  {blog.title}
                </Link>
              </Heading>
              <Box dangerouslySetInnerHTML={{ __html: blog.excerpt }} mb={3} />
              <Link to={`/subsuelo/${blog.slug}`}>
                <Box as="span" color="alternative">
                  Leer
                </Box>
              </Link>
            </Box>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Subsuelo;

export function Head() {
  return (
    <SEO
      description="En este espacio presentamos reflexiones, podcasts, artículos y más contentido que hemos estado generando con la cooperativa."
      title="Subsuelo"
    />
  );
}

export const query = graphql`
  query SubsueloPostQuery {
    blogPosts: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "blog" } } } } }
      sort: { date: DESC }
    ) {
      nodes {
        id
        slug
        title
        excerpt
        subsueloFields {
          featuredTitleWord
        }
      }
    }
  }
`;

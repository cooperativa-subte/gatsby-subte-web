import React from 'react';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';

type PostType = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
};

type PodcastPostType = PostType & {
  podcasts_fields: {
    autoraPodcast: string;
  };
};

type BlogPageTypes = {
  data: {
    blogPosts: {
      nodes: PostType[];
    };
    podcastsPosts: {
      nodes: PodcastPostType[];
    };
  };
};

const Blog = ({ data: { blogPosts, podcastsPosts } }: BlogPageTypes) => {
  return (
    <>
      <SEO
        description="En este espacio presentamos reflexiones, podcasts, artículos y más contentido que hemos estado generando con la cooperativa."
        title="Blog"
      />
      <Grid gridColumnGap={52} gridTemplateColumns={['1fr', 'repeat(2, 1fr)']} my={10}>
        <Box>
          <video
            autoPlay
            controls
            loop
            muted
            poster="https://subtedesarrollo.xyz/wp-content/uploads/2021/07/Conversatorios_imagen.webp"
            src="https://res.cloudinary.com/subteuy/video/upload/v1610826241/subte.uy/Conversatorios/SPOTCS_C4_baja_u82811.mp4"
          />
          <Heading mt={[8, 0]}>Conversatorios subterráneos</Heading>
          <Text>
            Los Conversatorios Subterráneos son espacios donde nos proponemos reflexionar
            colectivamente sobre los principales problemas de la comunicación en las cooperativas,
            organizaciones sociales, culturales y políticas.
          </Text>
          <Flex align="center" my={8}>
            <Flex
              align="center"
              bg="black"
              color="white"
              fontFamily="helveticaExtraBold"
              fontSize="5xl"
              h={20}
              justify="center"
              mr={3}
              w={20}
            >
              <Box as="span">#0</Box>
            </Flex>
            <Heading as="h3" fontSize="2xl">
              Los problemas de
              <br /> comunicación de las
              <br /> organizaciones populares
            </Heading>
          </Flex>
          {podcastsPosts.nodes.map((post: PodcastPostType) => (
            <Box key={post.id}>
              <Link to={`/${post.slug}`}>
                <Heading as="h3">{post.title}</Heading>
              </Link>
              <Text fontFamily="helveticaBold" my={3}>
                {post.podcasts_fields.autoraPodcast}
              </Text>
              <Box dangerouslySetInnerHTML={{ __html: post.excerpt }} mb={3} />
              <Link to={`/${post.slug}`}>Leer</Link>
            </Box>
          ))}
        </Box>
        <Box>
          <Heading as="h2" fontSize="4xl" mb={8}>
            Subsuelo. Apuntes cooperativos
          </Heading>
          <Text>
            Abrimos este espacio para registrar y compartir algunas reflexiones sobre nuestra
            experiencia cooperativa, sobre las experiencias de autogestión, los proyectos de
            trabajo, los procesos colaborativos, las tristezas y las alegrías que atravesamos en
            este espacio autogestionado que estamos creando.
          </Text>
          {blogPosts.nodes.map((post: PostType) => (
            <Box key={post.id} mt={5}>
              <Heading as="h3">{post.title}</Heading>
              <Box dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <Link to={`/${post.slug}`}>Leer</Link>
            </Box>
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default Blog;

export const query = graphql`
  query MyBlogPostQuery {
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
    podcastsPosts: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "podcasts" } } } } }
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        id
        slug
        title
        excerpt
        podcasts_fields {
          autoraPodcast
        }
      }
    }
  }
`;

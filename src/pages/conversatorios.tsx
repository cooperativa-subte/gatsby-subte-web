import React from 'react';
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import ConversatoriosSubterraneosIcon from '../icons/ConversatoriosSubterraneos';
import { PostType } from '../types';

type PodcastPostType = PostType & {
  podcasts_fields: {
    autoraPodcast: string;
    urlDePodcast: string;
  };
};

type ConversatoriosPageTypes = {
  data: {
    conversatorioCeroPosts: {
      nodes: PodcastPostType[];
    };
    conversatorioUnoPosts: {
      nodes: PodcastPostType[];
    };
  };
};

function ConversatoriosPage({
  data: { conversatorioCeroPosts, conversatorioUnoPosts },
}: ConversatoriosPageTypes): JSX.Element {
  return (
    <>
      <SEO title="Conversatorios subterráneos #1" />
      <Center bg="black">
        <Grid
          gridColumnGap={52}
          gridTemplateColumns={['1fr', '1fr 1fr']}
          maxW="container.xl"
          my={10}
          paddingInlineEnd={4}
          paddingInlineStart={4}
        >
          <GridItem display="flex" justifyContent={['center', 'flex-start']} mb={[8, 0]}>
            <ConversatoriosSubterraneosIcon h={24} w={60} />
          </GridItem>
          <GridItem>
            <Text color="white">
              Los Conversatorios Subterráneos son espacios donde nos proponemos reflexionar
              colectivamente sobre los principales problemas de la comunicación en las cooperativas,
              organizaciones sociales, culturales y políticas.
            </Text>
          </GridItem>
        </Grid>
      </Center>
      <Container maxW="container.xl">
        <Grid
          alignItems="flex-start"
          gridColumnGap={52}
          gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
          my={10}
        >
          <GridItem>
            <AspectRatio ratio={1}>
              <Box autoPlay controls loop muted as="video">
                <source
                  src="https://res.cloudinary.com/subteuy/video/upload/v1610826241/subte.uy/Conversatorios/SPOTCS_C4_baja_u82811.mp4"
                  type="video/mp4"
                />
              </Box>
            </AspectRatio>
            <Flex alignItems="center" my={10}>
              <Center
                as="span"
                bg="black"
                boxSize={8}
                color="white"
                fontFamily="HelveticaExtraBold"
                fontSize="5xl"
                p={12}
              >
                #0
              </Center>
              <Heading fontSize="2xl" ml="4">
                Los problemas de <br />
                comunicación de las
                <br /> organizaciones populares
              </Heading>
            </Flex>

            {conversatorioCeroPosts.nodes.length > 0 &&
              conversatorioCeroPosts.nodes.map((post: PodcastPostType) => (
                <Box key={post.id} mb="12">
                  <Link to={`/conversatorios/${post.slug}`}>
                    <Heading as="h3">{post.title}</Heading>
                  </Link>
                  <Text fontFamily="helveticaBold" my={3}>
                    {post.podcasts_fields.autoraPodcast}
                  </Text>
                  <Box dangerouslySetInnerHTML={{ __html: post.excerpt }} mb={3} />
                  <Text>
                    <Link to={`/conversatorios/${post.slug}`}>Leer</Link> |{' '}
                    <ChakraLink
                      href={post.podcasts_fields.urlDePodcast}
                      rel="nonoopener noreferrer"
                      target="_blank"
                    >
                      Escuchar en Spotify
                    </ChakraLink>
                  </Text>
                </Box>
              ))}
          </GridItem>
          <GridItem>
            <AspectRatio ratio={1}>
              <video autoPlay controls loop muted>
                <source
                  src="https://res.cloudinary.com/subteuy/video/upload/v1635955826/subte.uy/Conversatorios/Conversatorios_SPOTcuadrado_2021_brjgwl.mp4"
                  type="video/mp4"
                />
              </video>
            </AspectRatio>
            <Flex alignItems="center" my={10}>
              <Center
                as="span"
                bg="black"
                boxSize={8}
                color="white"
                fontFamily="HelveticaExtraBold"
                fontSize="5xl"
                p={12}
              >
                #1
              </Center>
              <Heading fontSize="2xl" ml="4">
                Comunicación y <br /> Cooperativas
              </Heading>
            </Flex>
            {conversatorioUnoPosts.nodes.length > 0 &&
              conversatorioUnoPosts.nodes.map((post: PodcastPostType) => (
                <Box key={post.id} mb="12">
                  <Link to={`/${post.slug}`}>
                    <Heading as="h3">{post.title}</Heading>
                  </Link>
                  <Text fontFamily="helveticaBold" my={3}>
                    {post.podcasts_fields.autoraPodcast}
                  </Text>
                  <Box dangerouslySetInnerHTML={{ __html: post.excerpt }} mb={3} />
                  <Text>
                    <Link to={`/${post.slug}`}>Leer</Link> |{' '}
                    <ChakraLink
                      href={post.podcasts_fields.urlDePodcast}
                      rel="nonoopener noreferrer"
                      target="_blank"
                    >
                      Escuchar en Spotify
                    </ChakraLink>
                  </Text>
                </Box>
              ))}
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export default ConversatoriosPage;

export const query = graphql`
  query ConversatoriosPageQuery {
    conversatorioCeroPosts: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "conversatorio-0" } } } } }
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        id
        slug
        title
        excerpt
        podcasts_fields {
          autoraPodcast
          urlDePodcast
        }
      }
    }
    conversatorioUnoPosts: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "conversatorio-1" } } } } }
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        id
        slug
        title
        excerpt
        podcasts_fields {
          autoraPodcast
          urlDePodcast
        }
      }
    }
  }
`;

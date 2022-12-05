import React from 'react';
import { graphql } from 'gatsby';
import { Box, Container, Flex, Grid, Heading, Link, Text } from '@chakra-ui/react';
import { GiSpeaker } from 'react-icons/gi';

import SEO from '../components/seo';
import Share from '../components/Share';
interface Props {
  data: {
    conversatorioPost: {
      id: string;
      content: string;
      title: string;
      slug: string;
      podcastsFields: {
        autoraPodcast: string;
        urlDePodcast: string;
      };
      tags: {
        nodes: {
          id: string;
          slug: string;
          name: string;
        }[];
      };
      categories: {
        nodes: {
          slug: string;
        }[];
      };
    };
  };
}

function ConversatorioPage({ data: { conversatorioPost } }: Props): JSX.Element {
  return (
    <>
      <Container maxW="container.xl" my={10}>
        <Container maxW="container.lg">
          <Grid gridTemplateColumns={['75px 300px', '75px 650px']} mb={4}>
            <Box />
            <Text fontFamily="helveticaBold">Blog</Text>
          </Grid>
          <Grid gridTemplateColumns={['75px 300px', '75px 650px']}>
            <Box
              alignItems="center"
              as="span"
              backgroundColor="black"
              color="white"
              display="flex"
              fontFamily="helveticaExtraBold"
              fontSize="4xl"
              height="75px"
              justifyContent="center"
              marginLeft="-4"
              width="75px"
            >
              {conversatorioPost.categories.nodes.map((c) => c.slug).includes('conversatorio-1')
                ? '#1'
                : '#0'}
            </Box>
            <Box>
              <Text lineHeight={1} mb={1}>
                Conversatorios subterráneos
              </Text>

              {conversatorioPost.categories.nodes.map((c) => c.slug).includes('conversatorio-1') ? (
                <Text fontFamily="helveticaBold">Comunicación y Cooperativas</Text>
              ) : (
                <Text fontFamily="helveticaBold" lineHeight={1.25}>
                  Los problemas de comunicación de las
                  <br /> orgnizaciones populares
                </Text>
              )}
            </Box>
          </Grid>
          <Grid gridTemplateColumns={['1fr', '75px 650px']} mt={16}>
            <Box />
            <Box>
              <Heading fontSize="2rem" mb={2}>
                {conversatorioPost.title}
              </Heading>
              <Text color="alternative" fontFamily="helveticaBold" fontSize="20px">
                {conversatorioPost.podcastsFields.autoraPodcast}
              </Text>
              <Flex alignItems="center" mb="8" mt={3}>
                <Link
                  _hover={{ background: 'white' }}
                  alignItems="center"
                  border="1px solid black"
                  borderRadius="15px"
                  display="inline-flex"
                  h={6}
                  href={conversatorioPost.podcastsFields.urlDePodcast}
                  mr={2}
                  pl="4"
                  pr="3"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Escuchar
                  <GiSpeaker
                    fontSize="1.25rem"
                    style={{ display: 'inline', marginLeft: '0.25rem' }}
                  />
                </Link>
                <Share
                  placement="bottom-start"
                  slug={`conversatorios/${conversatorioPost.slug}`}
                  title={conversatorioPost.title}
                />
              </Flex>
              <Box
                dangerouslySetInnerHTML={{ __html: conversatorioPost.content }}
                sx={{
                  '> p': {
                    marginBottom: '2rem',
                    fontSize: '20px',
                  },
                }}
              />
              <Share
                placement="top-start"
                slug={`converstaorios/${conversatorioPost.slug}`}
                title={conversatorioPost.title}
              />
            </Box>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default ConversatorioPage;

export function Head({ data: { conversatorioPost } }: Props) {
  return <SEO title={conversatorioPost.title} />;
}

export const pageQuery = graphql`
  query ConversatorioPost($id: String!) {
    conversatorioPost: wpPost(id: { eq: $id }) {
      id
      content
      title
      slug
      podcastsFields {
        autoraPodcast
        urlDePodcast
      }
      tags {
        nodes {
          id
          slug
          name
        }
      }
      categories {
        nodes {
          slug
        }
      }
    }
  }
`;

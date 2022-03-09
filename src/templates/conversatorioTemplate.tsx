import React from 'react';
import { graphql } from 'gatsby';
import { Box, Container, Grid, Heading, Link, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { GiSpeaker } from 'react-icons/gi';

import SEO from '../components/seo';

const StyledContent = styled.div`
  & > p {
    margin-bottom: 0.5rem;
  }
`;

interface Props {
  data: {
    conversatorioPost: {
      id: string;
      content: string;
      title: string;
      podcasts_fields: {
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
      <SEO title={conversatorioPost.title} />
      <Container maxW="container.xl" my={10}>
        <Container maxW="container.lg">
          <Grid gridTemplateColumns={['75px 300px', '75px 650px']}>
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
              <Text>Conversatorios subterráneos</Text>

              {conversatorioPost.categories.nodes.map((c) => c.slug).includes('conversatorio-1') ? (
                <Text fontFamily="helveticaBold">Comunicación y Cooperativas</Text>
              ) : (
                <Text fontFamily="helveticaBold">
                  Los problemas de comunicación de las
                  <br /> orgnizaciones populares
                </Text>
              )}
            </Box>
          </Grid>
          <Grid gridTemplateColumns={['1fr', '75px 650px']} mt={16}>
            <Box />
            <Box>
              <Heading mb={8}>{conversatorioPost.title}</Heading>
              <Text fontFamily="helveticaBold">
                {conversatorioPost.podcasts_fields.autoraPodcast}
              </Text>
              <Box mb="8" mt={3}>
                <Link
                  _hover={{ background: 'white' }}
                  alignItems="center"
                  border="1px solid black"
                  borderRadius="15px"
                  display="inline-flex"
                  href={conversatorioPost.podcasts_fields.urlDePodcast}
                  pl="4"
                  pr="3"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Escuchar
                  <GiSpeaker style={{ display: 'inline', marginLeft: '0.25rem' }} />
                </Link>
              </Box>
              <StyledContent dangerouslySetInnerHTML={{ __html: conversatorioPost.content }} />
            </Box>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default ConversatorioPage;

export const pageQuery = graphql`
  query ConversatorioPost($id: String!) {
    conversatorioPost: wpPost(id: { eq: $id }) {
      id
      content
      title
      podcasts_fields {
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

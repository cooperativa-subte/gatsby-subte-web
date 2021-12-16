import React from 'react';
import { graphql } from 'gatsby';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

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
      tags: {
        nodes: {
          id: string;
          slug: string;
          name: string;
        }[];
      };
    };
  };
}

function ConversatorioPage({ data: { conversatorioPost } }: Props): JSX.Element {
  return (
    <Container maxW="container.xl" my={10}>
      <Grid gridColumnGap={20} gridTemplateColumns={['1fr', '1fr 2fr']}>
        <Heading mb={8}>{conversatorioPost.title}</Heading>
        <StyledContent dangerouslySetInnerHTML={{ __html: conversatorioPost.content }} />
      </Grid>
    </Container>
  );
}

export default ConversatorioPage;

export const pageQuery = graphql`
  query ConversatorioPost($id: String!) {
    conversatorioPost: wpPost(id: { eq: $id }) {
      id
      content
      title
      tags {
        nodes {
          id
          slug
          name
        }
      }
    }
  }
`;

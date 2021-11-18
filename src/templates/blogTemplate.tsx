import React from 'react';
import { graphql } from 'gatsby';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';

type BlogPostPageType = {
  data: {
    blogPost: {
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
};

const BlogTemplatePage = ({ data: { blogPost } }: BlogPostPageType) => {
  return (
    <Container maxW="container.xl" my={10}>
      <Grid gridColumnGap={20} gridTemplateColumns={['1fr', '1fr 2fr']}>
        <Heading mb={8}>{blogPost.title}</Heading>
        <Box dangerouslySetInnerHTML={{ __html: blogPost.content }} />
      </Grid>
    </Container>
  );
};

export default BlogTemplatePage;

export const pageQuery = graphql`
  query BlogPost($id: String!) {
    blogPost: wpPost(id: { eq: $id }) {
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

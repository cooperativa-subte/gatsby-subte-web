import React from 'react';
import { graphql } from 'gatsby';
import { Container, Grid, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

import SEO from '../components/seo';

const StyledContent = styled.div`
  & > p {
    margin-bottom: 0.5rem;
  }
`;

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
    <>
      <SEO title={blogPost.title} />
      <Container maxW="container.xl" my={10}>
        <Grid gridColumnGap={20} gridTemplateColumns={['1fr', '1fr 2fr']}>
          <Heading mb={8}>{blogPost.title}</Heading>
          <StyledContent dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </Grid>
      </Container>
    </>
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

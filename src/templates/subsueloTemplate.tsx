import React from 'react';
import { graphql } from 'gatsby';
import { Box, Container, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

import SEO from '../components/seo';
import Share from '../components/Share';

const StyledContent = styled.div`
  & > p {
    margin-bottom: 2rem;
    font-size: 18px;
  }
`;

type BlogPostPageType = {
  data: {
    blogPost: {
      id: string;
      content: string;
      title: string;
      subsueloFields: {
        featuredTitleWord: string;
      };
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
        <Container marginInlineStart={'200px'} maxW="container.sm">
          <Box
            as="small"
            color="alternative"
            display="inline-block"
            fontFamily="helveticaBold"
            fontSize="md"
            mb={8}
          >
            Subsuelo
          </Box>
          <Heading mb={8}>
            <Box as="span" color="alternative">
              {blogPost.subsueloFields.featuredTitleWord}{' '}
            </Box>
            {blogPost.title}
          </Heading>
          <Share />
          <StyledContent dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </Container>
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
      subsueloFields {
        featuredTitleWord
      }
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

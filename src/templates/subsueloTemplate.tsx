import React from 'react';
import { graphql, Link } from 'gatsby';
import { Box, Container, Heading } from '@chakra-ui/react';

import SEO from '../components/seo';
import Share from '../components/Share';

type BlogPostPageType = {
  data: {
    blogPost: {
      id: string;
      content: string;
      title: string;
      slug: string;
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
      <Container maxW="container.xl" my={10}>
        <Container marginInlineStart={['inherit', '200px']} maxW="container.sm">
          <Box
            as="small"
            color="alternative"
            display="inline-block"
            fontFamily="helveticaBold"
            fontSize="md"
            mb={8}
          >
            <Link to="/subsuelo">Subsuelo</Link>
          </Box>
          <Heading mb={2}>
            <Box as="span" color="alternative">
              {blogPost.subsueloFields.featuredTitleWord}{' '}
            </Box>
            {blogPost.title}
          </Heading>
          <Box mb={14}>
            <Share
              placement="bottom-start"
              slug={`subsuelo/${blogPost.slug}`}
              title={blogPost.title}
            />
          </Box>
          <Box
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
            sx={{
              '> p': { marginBottom: '2rem', fontSize: '20px' },
              a: { textDecoration: 'underline' },
            }}
          />
          <Box mb={20}>
            <Share
              placement="top-start"
              slug={`subsuelo/${blogPost.slug}`}
              title={blogPost.title}
            />
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default BlogTemplatePage;

export function Head({data: {blogPost}}: BlogPostPageType) {
  return (
    <SEO title={blogPost.title} />
  )
}

export const pageQuery = graphql`
  query BlogPost($id: String!) {
    blogPost: wpPost(id: { eq: $id }) {
      id
      content
      title
      slug
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

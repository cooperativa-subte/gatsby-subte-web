import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const StyledBlogPostContainer = styled.div``;

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
  pageContext: {
    id: string;
  };
};

const BlogTemplatePage = ({ data: { blogPost } }: BlogPostPageType) => {
  return (
    <StyledBlogPostContainer>
      <h1>{blogPost.title}</h1>
    </StyledBlogPostContainer>
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

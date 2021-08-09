import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const StyledBlogPostContainer = styled.div`
  border-top: 1px solid var(--border-gray);
  padding: 2rem 0;
  .desktop-container {
    max-width: 1100px;
    margin: 0 auto;
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
  pageContext: {
    id: string;
  };
};

const BlogTemplatePage = ({ data: { blogPost } }: BlogPostPageType) => {
  return (
    <StyledBlogPostContainer>
      <div className='desktop-container'>
        <h1>{blogPost.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: blogPost.content }}></p>
      </div>
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

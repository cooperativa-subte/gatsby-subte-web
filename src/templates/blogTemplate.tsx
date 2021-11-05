import React from 'react';
import { graphql } from 'gatsby';

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
    <div>
      <div className="desktop-container">
        <h1>{blogPost.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: blogPost.content }} />
      </div>
    </div>
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

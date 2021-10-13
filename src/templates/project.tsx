import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { ProjectType } from '../types';

const StyledProjectPageContainer = styled.div``;

type ProjectPageType = {
  data: {
    project: ProjectType;
  };
  pageContext: {
    id: string;
  };
};

const ProjectPage = ({ data: { project } }: ProjectPageType) => {
  const [featureImage, setFeatureImage] = useState<IGatsbyImageData>();

  useEffect(() => {
    if (project.featuredImage)
      setFeatureImage(
        getImage(project.featuredImage.node.localFile.childImageSharp.gatsbyImageData),
      );
  }, []);

  return (
    <StyledProjectPageContainer>
      <div className="project-header">
        <h1>{project.datos_proyecto.nombre}</h1>
        <h2>{project.datos_proyecto.descripcionCorta}</h2>
      </div>
      {featureImage && (
        <GatsbyImage alt={project.featuredImage.node.altText} image={featureImage} />
      )}
      <div className="project-details-container">
        <div className="content" dangerouslySetInnerHTML={{ __html: project.content }} />
        <p>
          <span>Cliente:{` `}</span>
          {project.datos_proyecto.cliente}
        </p>
        <p>
          <span>Sector:{` `}</span>
          {project.datos_proyecto.sector}
        </p>
        <p>
          <span>Tipo de Proyecto:{` `}</span>
          {project.datos_proyecto.cliente}
        </p>
        <p>
          <span>Mes/Año:{` `}</span>
          {project.datos_proyecto.cliente}
        </p>
      </div>
    </StyledProjectPageContainer>
  );
};

export default ProjectPage;

export const pageQuery = graphql`
  query ProjectPost($id: String!) {
    project: wpPost(id: { eq: $id }) {
      id
      datos_proyecto {
        descripcionCorta
        fecha
        fieldGroupName
        nombre
        sector
      }
      content
      tags {
        nodes {
          id
          slug
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

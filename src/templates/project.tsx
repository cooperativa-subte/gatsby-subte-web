import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { AspectRatio, Box, Container, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { ProjectType } from '../types';
import CustomWrappterGatsbyImage from '../components/CustomWrappterGatsbyImage';
import SEO from '../components/seo';

const StyledProjectContent = styled.div`
  a {
    text-decoration: underline;
  }
`;

type ProjectPageType = {
  data: {
    project: ProjectType;
  };
  pageContext: {
    id: string;
  };
};

const IMAGES_DISTRIBUTION = {
  firstGroup: 3,
};

const ProjectPage = ({ data: { project } }: ProjectPageType) => {
  const [complementaryImages, setComplementaryImages] = useState<string[]>([]);

  useEffect(() => {
    if (project.datos_proyecto.imagenesComplementarias) {
      setComplementaryImages(JSON.parse(project.datos_proyecto.imagenesComplementarias));
    }
  }, [project.datos_proyecto]);

  return (
    <>
      <SEO title={`Proyecto ${project.datos_proyecto.nombre}`} />
      <Container maxW="container.xl">
        <Grid
          bg="white"
          gridTemplateColumns={['1fr', 'repeat(3, 1fr)']}
          pb={6}
          position="relative"
          pt={10}
          zIndex={1}
        >
          <GridItem as="h1" colSpan={2} fontFamily="helveticaBold" fontSize="5xl" lineHeight="1">
            {project.datos_proyecto.nombre}
          </GridItem>
          <GridItem as="h2" fontFamily="helveticaMedium" fontSize="xl" maxW={96}>
            {project.datos_proyecto.descripcionCorta}
          </GridItem>
        </Grid>
        {project.datos_proyecto.featuredVideo ? (
          <>
            <AspectRatio ratio={16 / 9}>
              <iframe
                allowFullScreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                id="cover-video"
                src={project.datos_proyecto.featuredVideo}
                title="cover-video"
                width="100%"
              />
            </AspectRatio>
          </>
        ) : (
          <Box mb={[4, 0]}>
            {project.featuredImage && (
              <Box position="relative" zIndex="1">
                <CustomWrappterGatsbyImage
                  altText={project.featuredImage.node.altText}
                  localFile={project.featuredImage.node.localFile}
                />
              </Box>
            )}
          </Box>
        )}
        <Container
          maxW="container.xl"
          paddingInlineStart={0}
          position={['static', 'fixed']}
          top={[20, 32]}
          zIndex={0}
        >
          <Grid gridColumnGap={8} gridTemplateColumns={['1fr', '1fr 1fr']} mr={4}>
            <Box fontSize="lg">
              <StyledProjectContent dangerouslySetInnerHTML={{ __html: project.content }} />
            </Box>
            <Box />
          </Grid>
        </Container>
        <Grid gridColumnGap={8} gridTemplateColumns={['1fr', 'repeat(2, 1fr)']} mt={10}>
          <Box />
          <Grid gridRowGap={5} gridTemplateColumns="1fr">
            {complementaryImages
              .filter((e, i) => i < IMAGES_DISTRIBUTION.firstGroup)
              .map((imageSrc: string, i: number) => (
                <Image
                  key={`img_project_${i}`}
                  alt="Imagen complementaria del proyecto"
                  src={imageSrc}
                />
              ))}
          </Grid>
        </Grid>
        <Grid
          gridColumnGap={8}
          gridRowGap={8}
          gridTemplateColumns={['1fr', '1fr 1fr']}
          position="relative"
          pt={8}
          zIndex="1"
        >
          {complementaryImages
            .filter(
              (e, i) =>
                i >= IMAGES_DISTRIBUTION.firstGroup && i < IMAGES_DISTRIBUTION.firstGroup + 2,
            )
            .map((imageSrc: string, i: number) => (
              <Image
                key={`img_project_${i}`}
                alt="Imagen complementaria del proyecto"
                src={imageSrc}
              />
            ))}
        </Grid>
        <Grid
          alignItems="center"
          bg="white"
          gridColumnGap={8}
          gridTemplateColumns={['1fr', '1fr 1fr']}
          position="relative"
          pt={8}
          zIndex="1"
        >
          {project.datos_proyecto.fraseDestacada ? (
            <Text
              dangerouslySetInnerHTML={{ __html: project.datos_proyecto.fraseDestacada }}
              fontFamily="helveticaBold"
              fontSize="x-large"
              mb={[8, 0]}
              mr={[0, 32]}
            />
          ) : (
            <Text />
          )}

          {complementaryImages[IMAGES_DISTRIBUTION.firstGroup + 2] && (
            <Image
              alt="Imagen complementaria del proyecto"
              src={complementaryImages[IMAGES_DISTRIBUTION.firstGroup + 2]}
            />
          )}
        </Grid>
        <Grid
          alignItems="flex-end"
          bg="white"
          columnGap={8}
          gridTemplateAreas={["'remainingPhotos' 'projectData'", "'projectData remainingPhotos'"]}
          gridTemplateColumns={['1fr', '1fr 1fr']}
          mb={[10, 20]}
          position="relative"
          pt={8}
          zIndex={1}
        >
          <Box gridArea="projectData" mt={[8, 0]}>
            <Text fontSize="lg">
              <Text as="span" fontFamily="helveticaBold">
                Cliente:{` `}
              </Text>
              {project.datos_proyecto.cliente}
            </Text>
            <Text fontSize="lg">
              <Text as="span" fontFamily="helveticaBold">
                Sector:{` `}
              </Text>
              {project.datos_proyecto.sector}
            </Text>
            <Text fontSize="lg">
              <Text as="span" fontFamily="helveticaBold">
                Tipo de Proyecto:{` `}
              </Text>
              {project.datos_proyecto.cliente}
            </Text>
            <Text fontSize="lg">
              <Text as="span" fontFamily="helveticaBold">
                Mes/Año:{` `}
              </Text>
              {project.datos_proyecto.cliente}
            </Text>
          </Box>
          <Box gridArea="remainingPhotos">
            {complementaryImages
              .filter((src, i) => i > IMAGES_DISTRIBUTION.firstGroup + 2)
              .map((src, i) => (
                <Image
                  key={`img_project_${i}`}
                  _last={{ marginBottom: 0 }}
                  alt="Imagen complementaria del proyecto"
                  mb={8}
                  src={src}
                />
              ))}
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectPage;

export const pageQuery = graphql`
  query ProjectPost($id: String!) {
    project: wpPost(id: { eq: $id }) {
      id
      datos_proyecto {
        cliente
        descripcionCorta
        fecha
        fieldGroupName
        nombre
        sector
        imagenesComplementarias
        featuredVideo
        fraseDestacada
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

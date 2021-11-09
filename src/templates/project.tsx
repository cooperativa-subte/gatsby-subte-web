import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Box, Container, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

import { ProjectType } from '../types';
import CustomWrappterGatsbyImage from '../components/CustomWrappterGatsbyImage';
import SEO from '../components/seo';

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
  }, []);

  return (
    <>
      <SEO title={`Proyecto ${project.datos_proyecto.nombre}`} />
      <Flex bg="white" justify="space-between" pb={6} pt={10}>
        <Heading fontSize="xxx-large" maxW={96}>
          {project.datos_proyecto.nombre}
        </Heading>
        <Heading as="h2" fontSize="xl" maxW={96}>
          {project.datos_proyecto.descripcionCorta}
        </Heading>
      </Flex>
      {project.featuredImage && (
        <CustomWrappterGatsbyImage
          altText={project.featuredImage.node.altText}
          localFile={project.featuredImage.node.localFile}
        />
      )}
      <Container maxW="container.xl" paddingInlineStart={0} position="fixed" top={32} zIndex={-1}>
        <Grid gridColumnGap={8} gridTemplateColumns="1fr 1fr" mr={4}>
          <Box
            className="content"
            dangerouslySetInnerHTML={{ __html: project.content }}
            fontSize="lg"
          />
          <Box />
        </Grid>
      </Container>
      <Grid gridColumnGap={8} gridTemplateColumns="repeat(2, 1fr)" mt={10}>
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
      <Grid gridColumnGap={8} gridTemplateColumns="1fr 1fr" pt={8}>
        {complementaryImages
          .filter(
            (e, i) => i >= IMAGES_DISTRIBUTION.firstGroup && i < IMAGES_DISTRIBUTION.firstGroup + 2,
          )
          .map((imageSrc: string, i: number) => (
            <Image
              key={`img_project_${i}`}
              alt="Imagen complementaria del proyecto"
              src={imageSrc}
            />
          ))}
      </Grid>
      <Grid alignItems="center" bg="white" gridColumnGap={8} gridTemplateColumns="1fr 1fr" pt={8}>
        <Text fontFamily="helveticaBold" fontSize="x-large" mr={32}>
          Militan con el objetivo de brindar asesoramiento y acompañamiento a mujeres en el proceso
          de interrupción voluntaria del embarazo, y también defienden y luchan por los derechos
          humanos.
        </Text>
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
        gridTemplateColumns="1fr 1fr"
        mb={32}
        pt={8}
      >
        <Box>
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
        <Box>
          {complementaryImages
            .filter((src, i) => i > IMAGES_DISTRIBUTION.firstGroup + 2)
            .map((src, i) => (
              <Image key={`img_project_${i}`} alt="Imagen complementaria del proyecto" src={src} />
            ))}
        </Box>
      </Grid>
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

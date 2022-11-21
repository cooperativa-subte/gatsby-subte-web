import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Container, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react';

import SEO from '../components/seo';
import FCPULogo from '../images/fcpu-logo.svg';
import ComunaLogo from '../images/comuna-logo.svg';
import PedalLogo from '../images/pedal-logo.svg';

const fotosNosotres = [
  <Box key="mariana">
    <StaticImage
      alt="Foto de Mari en blanco y negro"
      src="../images/Nosotres-Mari-Web-700x700.webp"
    />
    <Text fontFamily="helveticaBold" mt={3}>
      Mariana Escobar
    </Text>
  </Box>,
  <Box key="cata">
    <StaticImage
      alt="Foto de Cata en blanco y negro"
      src="../images/Nosotres-Cata-Web-700x700.webp"
    />
    <Text fontFamily="helveticaBold" mt={3}>
      Catalina Alonso
    </Text>
  </Box>,
  <Box key="nati">
    <StaticImage
      alt="Foto de Nati en blanco y negro"
      src="../images/Nosotres-Nati-Web-700x700.webp"
    />
    <Text fontFamily="helveticaBold" mt={3}>
      Natalia Acosta
    </Text>
  </Box>,
  <Box key="pancho">
    <StaticImage
      alt="Foto de Pancho en blanco y negro"
      src="../images/Nosotres-Pancho-Web-700x700.webp"
    />
    <Text fontFamily="helveticaBold" mt={3}>
      Francisco Cobas
    </Text>
  </Box>,
  <Box key="vale">
    <StaticImage
      alt="Foto de Vale en blanco y negro"
      src="../images/Nosotres-Vale-Web-700x700.webp"
    />
    <Text fontFamily="helveticaBold" mt={3}>
      Valentina Lasalvia
    </Text>
  </Box>,
  <Box key="joaco">
    <StaticImage
      alt="Foto de Joaco en blanco y negro"
      src="../images/Nosotres-Joaco-Web-700x700.webp"
    />
    <Text fontFamily="helveticaBold" mt={3}>
      Joaquín Cabrera
    </Text>
  </Box>,
];

const Nosotres = () => {
  const [fotosRandomNosotres, setFotosRandomNosotres] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Randomize the order of the images
    setFotosRandomNosotres([...fotosNosotres].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <>
      <Container maxW="container.xl" mb="10">
        <Box as="section">
          <Grid gridColumnGap={5} my="10" templateColumns={['1fr', 'repeat(3, 1fr)']}>
            <Heading
              fontFamily="helveticaBold"
              fontSize={['6xl', '4xl']}
              maxW={['100%', 56]}
              mb={[5, 0]}
            >
              No somos una agencia
            </Heading>
            <Box>
              <Text mb={5}>
                Somos una cooperativa de trabajo enfocada en la comunicación, con una perspectiva
                popular y colaborativa. Trabajamos con organizaciones sociales, culturales,
                sindicatos, cooperativas y emprendimientos.
              </Text>
              <Text>
                Tenemos la convicción de que la construcción de alternativas que aporten a
                transformaciones sociales se da en el plano económico, político y cultural, pero
                también en el simbólico y estético. Conformamos este espacio para trabajar y
                reflexionar articulando estas dimensiones.
              </Text>
            </Box>
            <Box>
              <Text>
                Nos hemos propuesto construir un vínculo con las organizaciones basado en el diálogo
                y la reflexión colectiva, buscando que el desarrollo de cada pieza de comunicación
                sea un proceso de aprendizaje que aporte al fortalecimiento de capacidades
                autónomas. Esto ha significado un motor para la propia cooperativa que se ha
                propuesto registrar y sistematizar las experiencias desarrolladas, al mismo tiempo
                en que se comenzó un proceso de formación interno, incorporando lecturas y
                discusiones que aporten y nutran los fundamentos de esta práctica.
              </Text>
            </Box>
          </Grid>
        </Box>
        <Grid
          as="section"
          gridColumnGap={5}
          gridRowGap={5}
          gridTemplateColumns={['1fr', 'repeat(3, 1fr)']}
        >
          {fotosRandomNosotres.map((foto) => foto)}
        </Grid>
        <Grid
          as="section"
          gridColumnGap={5}
          gridTemplateColumns={['1fr', 'repeat(3, 1fr)']}
          mt={20}
        >
          <GridItem>
            <Heading as="h2" mb={[5, 4]}>
              Proyectos aliados
            </Heading>
            <Text>
              Subte es una cooperativa que busca crecer practicando la intercooperación. Estos son
              los proyectos con los que venimos alcanzando acuerdos de trabajo conjunto.
            </Text>
          </GridItem>
          <GridItem
            alignItems="center"
            colSpan={2}
            display="grid"
            gridColumnGap={5}
            gridRowGap={3}
            gridTemplateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            mt={[8, 0]}
          >
            <Link href="https://fcpu.coop/" rel="noopener noreferrer" target="_blank">
              <Image
                alt="Logo de la Federación de Cooperativas del Uruguay"
                mx="auto"
                src={FCPULogo}
              />
            </Link>
            <Link href="https://radiopedal.uy" rel="noopener noreferrer" target="_blank">
              <Image alt="Logo de Pedal" mt={[4, 0]} mx="auto" src={PedalLogo} />
            </Link>
            <Link href="https://cooperativacomuna.uy/" rel="noopener noreferrer" target="_blank">
              <Image
                alt="Logo de la Cooperativa de trabajo Comuna"
                mt={[4, 0]}
                mx="auto"
                src={ComunaLogo}
              />
            </Link>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Nosotres;

export function HEAD() {
  return (
    <SEO
      description="Somos una cooperativa de trabajo enfocada en la comunicación, con una perspectiva popular y colaborativa. Trabajamos con organizaciones sociales, culturales, sindicatos, cooperativas y emprendimientos."
      title="Nosotres"
    />
  );
}

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';

import SEO from '../components/seo';
import FCPULogo from '../images/fcpu-logo.svg';
import CICLogo from '../images/cic-logo.svg';
import ComunaLogo from '../images/comuna-logo.svg';
import PedalLogo from '../images/pedal-logo.svg';

const Nosotres = () => {
  return (
    <>
      <SEO
        description="Somos una cooperativa de trabajo enfocada en la comunicación, con una perspectiva popular y colaborativa. Trabajamos con organizaciones sociales, culturales, sindicatos, cooperativas y emprendimientos."
        title="Nosotres"
      />
      <section>
        <Grid gridColumnGap={5} my="10" templateColumns={['1fr', 'repeat(3, 1fr)']}>
          <Heading
            fontFamily="helveticaLight"
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
              Nos hemos propuesto construir un vínculo con las organizaciones basado en el diálogo y
              la reflexión colectiva, buscando que el desarrollo de cada pieza de comunicación sea
              un proceso de aprendizaje que aporte al fortalecimiento de capacidades autónomas. Esto
              ha significado un motor para la propia cooperativa que se ha propuesto registrar y
              sistematizar las experiencias desarrolladas, al mismo tiempo en que se comenzó un
              proceso de formación interno, incorporando lecturas y discusiones que aporten y nutran
              los fundamentos de esta práctica.
            </Text>
          </Box>
        </Grid>
      </section>
      <Grid
        as="section"
        gridColumnGap={5}
        gridRowGap={5}
        gridTemplateColumns={['1fr', 'repeat(3, 1fr)']}
      >
        <Box>
          <StaticImage
            alt="Foto de Mari en blanco y negro"
            src="../images/Nosotres-Mari-Web-700x700.webp"
          />
          <Text fontFamily="helveticaBold" mt={3}>
            Mariana Escobar
          </Text>
        </Box>
        <Box>
          <StaticImage
            alt="Foto de Cata en blanco y negro"
            src="../images/Nosotres-Cata-Web-700x700.webp"
          />
          <Text fontFamily="helveticaBold" mt={3}>
            Catalina Alonso
          </Text>
        </Box>
        <Box>
          <StaticImage
            alt="Foto de Nati en blanco y negro"
            src="../images/Nosotres-Nati-Web-700x700.webp"
          />
          <Text fontFamily="helveticaBold" mt={3}>
            Natalia Acosta
          </Text>
        </Box>
        <Box>
          <StaticImage
            alt="Foto de Pancho en blanco y negro"
            src="../images/Nosotres-Pancho-Web-700x700.webp"
          />
          <Text fontFamily="helveticaBold" mt={3}>
            Francisco Cobas
          </Text>
        </Box>
        <Box>
          <StaticImage
            alt="Foto de Vale en blanco y negro"
            src="../images/Nosotres-Vale-Web-700x700.webp"
          />
          <Text fontFamily="helveticaBold" mt={3}>
            Valentina Lasalvia
          </Text>
        </Box>
        <Box>
          <StaticImage
            alt="Foto de Joaco en blanco y negro"
            src="../images/Nosotres-Joaco-Web-700x700.webp"
          />
          <Text fontFamily="helveticaBold" mt={3}>
            Joaquín Cabrera
          </Text>
        </Box>
      </Grid>
      <Grid as="section" gridColumnGap={5} gridTemplateColumns={['1fr', 'repeat(3, 1fr)']} mt={20}>
        <Heading as="h2" mb={[5, 0]}>
          Proyectos aliados
        </Heading>
        <Text>
          Subte es una cooperativa que busca crecer practicando la intercooperación. Estos son los
          proyectos con los que venimos alcanzando acuerdos de trabajo conjunto.
        </Text>
      </Grid>
      <Grid
        alignItems="center"
        as="section"
        gridColumnGap={5}
        gridTemplateColumns={['repeat(2, 1fr)', 'repeat(5, 1fr)']}
        mb={32}
        mt={20}
        rowGap={3}
      >
        <Image alt="Logo de la Federación de Cooperativas del Uruguay" src={FCPULogo} />
        <Image alt="Logo de Pedal" src={PedalLogo} />
        <Image alt="Logo de la Cooperativa de trabajo Comuna" src={ComunaLogo} />
        <Image alt="Logo de la Cooperativa de trabajo Comuna" src={ComunaLogo} />
        <Image alt="Logo de Cooperativa Integral Consultora (CIC)" src={CICLogo} />
      </Grid>
    </>
  );
};

export default Nosotres;

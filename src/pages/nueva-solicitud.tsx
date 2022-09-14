import { Center, Container, Grid, Heading, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import * as React from 'react';

import SEO from '../components/seo';

const NuevaSolicitudPage = () => {
  return (
    <>
      <SEO />
      <Container maxW="container.xl">
        <Center flexDirection="column" mb="40px" mt="100px">
          <Heading>¡Creemos algo juntes!</Heading>
          <Text fontFamily="helveticaBold" mt="10px">
            ¿Con qué tipo de proyecto podemos ayudarte?
          </Text>
        </Center>
        <Grid gridGap="20px" gridTemplateColumns={['1fr 1fr 1fr']} maxW="container.sm" mx="auto">
          <Link
            style={{
              textAlign: 'center',
              background: '#E2E2E2',
              borderRadius: '50px',
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            to="grafico"
          >
            Gráfico
          </Link>
          <Link
            style={{
              textAlign: 'center',
              background: '#E2E2E2',
              borderRadius: '50px',
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            to="audiovisual"
          >
            Audiovisual
          </Link>
          <Link
            style={{
              textAlign: 'center',
              background: '#E2E2E2',
              borderRadius: '50px',
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            to="web"
          >
            Web
          </Link>
          <Link
            style={{
              textAlign: 'center',
              background: '#E2E2E2',
              borderRadius: '50px',
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            to="editorial"
          >
            Editorial
          </Link>
          <Link
            style={{
              textAlign: 'center',
              background: '#E2E2E2',
              borderRadius: '50px',
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            to="ilustracion"
          >
            Ilustración
          </Link>
          <Link
            style={{
              textAlign: 'center',
              background: '#E2E2E2',
              borderRadius: '50px',
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            to="sonido"
          >
            Sonido
          </Link>
        </Grid>
      </Container>
    </>
  );
};

export default NuevaSolicitudPage;

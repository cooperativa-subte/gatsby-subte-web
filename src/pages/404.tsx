import React from 'react';
import { Link } from 'gatsby';
import { Center, Container, Heading } from '@chakra-ui/react';

import Seo from '../components/seo';

const NotFoundPage = () => {
  return (
    <>
      <Seo title="404: Página no encontrada" />
      <Container maxW="container.xl">
        <Center minH="80vh">
          <Heading textAlign="center">
            Ups, la página que estás buscando no existe. Verificá la URL o dirigite a la{' '}
            <Link style={{ textDecoration: 'underline' }} to="/">
              página de inicio
            </Link>
            .
          </Heading>
        </Center>
      </Container>
    </>
  );
};

export default NotFoundPage;

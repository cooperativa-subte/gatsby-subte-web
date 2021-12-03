import React from 'react';
import { graphql, Link } from 'gatsby';
import { Center, Container, Heading, Text } from '@chakra-ui/react';

import Seo from '../components/seo';

type NotFoundPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: {};
};

const NotFoundPage = ({ data, location }: NotFoundPageProps) => {
  return (
    <>
      <Seo title="404: Not Found" />
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

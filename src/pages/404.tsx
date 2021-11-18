import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container, Text } from '@chakra-ui/react';

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
        <Text>
          Ups, la página que estás buscando no existe. Verificá la URL o dirigite a la{' '}
          <Link to="/">página de inicio</Link>.
        </Text>
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

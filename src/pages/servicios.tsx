import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import React from 'react';

import SEO from '../components/seo';

type ServicioType = {
  id: string;
  title: string;
  content: string;
};

type ServicioPropTypes = {
  allWpServicio: {
    nodes: ServicioType[];
  };
};

type ServicioPageProps = PageProps<ServicioPropTypes>;

function ServiciosPage({ data: { allWpServicio } }: ServicioPageProps): JSX.Element {
  return (
    <>
      <Center background="black" h={['350px', '550px']}>
        <Container color="white" maxW="container.xl" p={['10', '0']}>
          <Heading as="h1" fontFamily="HelveticaLight" fontSize="2xl">
            Servicios
          </Heading>
          <Heading fontSize={['4xl', '6xl']}>
            Cooperar, una idea simple y potente que elegimos para trabajar juntes
          </Heading>
        </Container>
      </Center>

      <Accordion allowToggle mt="10">
        {allWpServicio.nodes.map((servicio: ServicioType) => (
          <AccordionItem key={servicio.id}>
            <Heading as="h4">
              <AccordionButton
                _expanded={{ background: 'blackAlpha.50' }}
                _focus={{ boxShadow: 'none', background: 'blackAlpha.50' }}
                py="5"
              >
                <Flex alignItems="center" flex="1" maxW="container.xl" mx="auto">
                  <Box
                    flex={1}
                    fontFamily="HelveticaRegular"
                    fontSize={['3xl', '4xl']}
                    textAlign="left"
                  >
                    {servicio.title}
                  </Box>
                  <AccordionIcon fontSize="3xl" />
                </Flex>
              </AccordionButton>
            </Heading>
            <AccordionPanel background="blackAlpha.50" p="0">
              <Box
                dangerouslySetInnerHTML={{ __html: servicio.content }}
                maxW="container.xl"
                mx="auto"
                p={['4', '0 0 1.25rem 0']}
                pb="5"
                sx={{
                  '& h5': {
                    fontSize: '2xl',
                    fontFamily: 'HelveticaRegular',
                    padding: '20px 0 5px',
                  },
                  '& h5:first-child': {
                    paddingTop: '0',
                  },
                  '& p': {
                    fontSize: 'xl',
                    fontFamily: 'HelveticaLight',
                    maxW: '650px',
                  },
                }}
              />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default ServiciosPage;

export function HEAD() {
  return (
    <SEO
      description="Somos una cooperativa de trabajo enfocada en la comunicación, con una perspectiva popular y colaborativa. Trabajamos con organizaciones sociales, culturales, sindicatos, cooperativas y emprendimientos."
      title="Servicios"
    />
  );
}

export const query = graphql`
  query ServiciosPage {
    allWpServicio(sort: { date: ASC }) {
      nodes {
        id
        title
        content
      }
    }
  }
`;

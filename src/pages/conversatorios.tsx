import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon, AddIcon } from '@chakra-ui/icons';

import SEO from '../components/seo';

function ConversatoriosPage(): JSX.Element {
  return (
    <>
      <SEO title="Conversatorios subterráneos #1" />
      <Grid
        alignItems="flex-start"
        gridColumnGap={8}
        gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
        my={10}
      >
        <Box order={[2, 1]}>
          <Heading fontFamily="helveticaLight" fontSize="6xl" mb={[0, 6]} mt={[5, 0]}>
            QUÉ SON
          </Heading>
          <Text>
            Los Conversatorios Subterráneos son espacios donde nos proponemos reflexionar
            colectivamente sobre los principales problemas de la comunicación en las cooperativas,
            organizaciones sociales, culturales y políticas. Este año nos propusimos realizar la
            edición #1 centrándonos en los problemas de comunicación de las cooperativas. La
            invitación es abierta y gratuita.
          </Text>
          <Box as="hr" my={8} />
          <Heading as="h4" mb={3}>
            Próximo conversatorio
          </Heading>
          <Flex>
            <Box
              alignItems="center"
              as="span"
              bg="black"
              color="white"
              display="flex"
              fontFamily="helveticaBold"
              fontSize="4xl"
              h={20}
              justifyContent="center"
              mr={3}
              w={20}
            >
              #1
            </Box>
            <Box>
              <Text fontFamily="helveticaBold" fontSize="lg">
                Sábado 13 de noviembre 2021, 19 h
              </Text>
              <Text fontSize="md">Casa en el Aire (San Salvador 1510)</Text>
              <Box as="span" mr={3}>
                <ArrowForwardIcon h={7} w={7} />
              </Box>
              <Link textDecor="underline">Inscribirse</Link>
            </Box>
          </Flex>
          <Box as="hr" my={8} />
          <Text mb={8}>
            En esta oportunidad nos preguntamos cuáles son los principales problemas y estrategias
            de comunicación de las cooperativas de trabajo y qué experiencias y soluciones a los
            problemas de comunicación pueden servir de referencia para pensarnos. En esta edición
            contaremos con la participación de:
          </Text>
          <Accordion allowToggle>
            <AccordionItem _first={{ borderTop: 'none' }}>
              {({ isExpanded }: { isExpanded: boolean }) => (
                <>
                  <AccordionButton
                    _focus={{ boxShadow: 'none' }}
                    _hover={{ backgroundColor: 'transparent' }}
                    display="grid"
                    gridTemplateColumns={['2fr 1fr ', '1fr 1fr']}
                    paddingInlineEnd={[0, 2]}
                    paddingInlineStart={[0, 2]}
                  >
                    <Box textAlign="left">
                      <Box as="span" fontFamily="HelveticaBold">
                        Andrés Roel
                      </Box>
                      <Box as="span" color="blackAlpha.500" fontSize="xs" mx={2}>
                        &gt;
                      </Box>
                      <Box as="span" color="blackAlpha.500" w={28}>
                        Intergalactic
                      </Box>
                    </Box>
                    <Box textAlign="left">
                      <AddIcon
                        color="blackAlpha.500"
                        fontSize="14px"
                        mr={2}
                        transform={isExpanded ? 'rotate(45deg)' : 'rotate(0)'}
                        transition="transform 0.3s"
                      />
                      <Box as="span" color="blackAlpha.500" fontSize="sm">
                        Ampliar info
                      </Box>
                    </Box>
                  </AccordionButton>
                  <AccordionPanel px={0}>
                    Es integrante de Intergalactic, una productora audiovisual cooperativa. Está
                    integrada por cuatro socios que comparten todas las tareas, desde las técnicas
                    hasta las administrativas. Somos generadores de contenidos y resolvemos las
                    necesidades de comunicación de nuestros clientes por medio de la realización de
                    piezas audiovisuales. Orientamos nuestros servicios a la mejora permanente.
                    Nuestra misión es fortalecer el desarrollo; la producción y distribución
                    audiovisual en el medio uruguayo y permitir el acceso democrático de la
                    información a distintos actores de la sociedad.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem borderColor="black" borderTopWidth="0.5px">
              {({ isExpanded }: { isExpanded: boolean }) => (
                <>
                  <AccordionButton
                    _focus={{ boxShadow: 'none' }}
                    _hover={{ backgroundColor: 'transparent' }}
                    display="grid"
                    gridTemplateColumns={['2fr 1fr ', '1fr 1fr']}
                    paddingInlineEnd={[0, 2]}
                    paddingInlineStart={[0, 2]}
                  >
                    <Box textAlign="left">
                      <Box as="span" fontFamily="HelveticaBold">
                        Dulcinea Cardozo
                      </Box>
                      <Box as="span" color="blackAlpha.500" fontSize="xs" mx={2}>
                        &gt;
                      </Box>
                      <Box as="span" color="blackAlpha.500" w={28}>
                        Udelar
                      </Box>
                    </Box>
                    <Box textAlign="left">
                      <AddIcon
                        color="blackAlpha.500"
                        fontSize="14px"
                        mr={2}
                        transform={isExpanded ? 'rotate(45deg)' : 'rotate(0)'}
                        transition="transform 0.3s"
                      />
                      <Box as="span" color="blackAlpha.500" fontSize="sm">
                        Ampliar info
                      </Box>
                    </Box>
                  </AccordionButton>
                  <AccordionPanel px={0}>
                    Poeta, editora, militante antimanicomial, docente universitaria, con formación
                    en psicología. Trabaja en la Universidad de la República, en el Área de
                    Cooperativismo y economía social y solidaria en el Servicio Central de Extensión
                    y Actividades en el Medio. También integra el Espacio Cultural Bibliobarrio, un
                    colectivo autogestionado cultural y antimanicomial. Además es integrante de
                    Sancocho, colectivo de editoriales autogestionadas y la Tienda Ecosol, tienda de
                    gestión colectiva de emprendimientos de economía social y solidaria.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem _last={{ borderBottom: '0' }} borderColor="black" borderTopWidth="0.5px">
              {({ isExpanded }: { isExpanded: boolean }) => (
                <>
                  <AccordionButton
                    _focus={{ boxShadow: 'none' }}
                    _hover={{ backgroundColor: 'transparent' }}
                    display="grid"
                    gridTemplateColumns={['2fr 1fr ', '1fr 1fr']}
                    paddingInlineEnd={[0, 2]}
                    paddingInlineStart={[0, 2]}
                  >
                    <Box textAlign="left">
                      <Box as="span" fontFamily="HelveticaBold">
                        Juan Manuel Chaves
                      </Box>
                      <Box as="span" color="blackAlpha.500" fontSize="xs" mx={2}>
                        &gt;
                      </Box>
                      <Box as="span" color="blackAlpha.500" w={28}>
                        FCPU
                      </Box>
                    </Box>
                    <Box textAlign="left">
                      <AddIcon
                        color="blackAlpha.500"
                        fontSize="14px"
                        mr={2}
                        transform={isExpanded ? 'rotate(45deg)' : 'rotate(0)'}
                        transition="transform 0.3s"
                      />
                      <Box as="span" color="blackAlpha.500" fontSize="sm">
                        Ampliar info
                      </Box>
                    </Box>
                  </AccordionButton>
                  <AccordionPanel px={0}>
                    Juan Manuel Chaves es Licenciado en Ciencias de la Comunicación (Udelar) y
                    Técnico en Comunicación Social opción Prensa (UTU). Desde 2012 forma parte del
                    staff del Semanario Brecha (Cooperativa LaBrecha). Ha participado en varios
                    proyectos de periodismo escrito sobre todo vinculado al sector cultural, además
                    se ha desempeñado como responsable de prensa de numerosos eventos de alcance
                    nacional. En los últimos años se desempeñó como productor periodístico para
                    programas de televisión en TNU, Canal 4 y TV Ciudad. Desde 2017 trabaja en la
                    Federación de Cooperativas de Producción del Uruguay (FCPU), en un principio
                    como comunicador del proyecto Cooperación Con Equidad financiado por la Unión
                    Europea, y desde 2019 como responsable del área de Comunicación.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
        <AspectRatio order={[1, 2]} ratio={1}>
          <video autoPlay controls loop muted className="video-conversatorios">
            <source
              src="https://res.cloudinary.com/subteuy/video/upload/v1635955826/subte.uy/Conversatorios/Conversatorios_SPOTcuadrado_2021_brjgwl.mp4"
              type="video/mp4"
            />
          </video>
        </AspectRatio>
      </Grid>
    </>
  );
}

export default ConversatoriosPage;

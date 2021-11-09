import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box, Input, useDisclosure, SlideFade, Image, Container } from '@chakra-ui/react';

import LogoSUBTE from '../images/LogoSUBTE_horizontal.svg';
import SearchIcon from '../images/search.svg';

import Menu from './Menu';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      borderBottomColor="blackAlpha.300"
      borderBottomStyle="solid"
      borderBottomWidth="0.5px"
      position="sticky"
      top={0}
      zIndex={1}
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" bg="white" justifyContent="space-between" py={4}>
          <Link to="/">
            <Image
              alt="Logo de la cooperativa de trabajo SUBTE"
              height="50"
              maxW={40}
              src={LogoSUBTE}
            />
          </Link>
          <Menu />
          <Box display="flex" w={72}>
            <SlideFade in={isOpen} offsetX={10} offsetY={0}>
              <Input />
            </SlideFade>
            <Image alt="Icono de busqueda" cursor="pointer" src={SearchIcon} onClick={onToggle} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

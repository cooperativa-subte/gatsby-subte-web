import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box, Input, useDisclosure, SlideFade, Image, Button } from '@chakra-ui/react';

import LogoSUBTE from '../images/LogoSUBTE_horizontal.svg';
import SearchIcon from '../images/search.svg';

import Menu from './Menu';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex alignItems="center" justifyContent="space-between" my="5">
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
  );
};

export default Header;

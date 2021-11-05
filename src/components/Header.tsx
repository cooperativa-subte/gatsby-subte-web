import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box, Input, useDisclosure, SlideFade } from '@chakra-ui/react';

import LogoSUBTE from '../images/LogoSUBTE_horizontal.svg';
import SearchIcon from '../images/search.svg';

import Menu from './Menu';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex justifyContent="space-between" mt="5">
      <Link to="/">
        <img
          alt="Logo de la cooperativa de trabajo SUBTE"
          height="50"
          src={LogoSUBTE}
          width="200"
        />
      </Link>
      <Menu />
      <Box display="flex" w={72}>
        <SlideFade in={isOpen} offsetX={10} offsetY={0}>
          <Input />
        </SlideFade>
        <img alt="Icono de busqueda" src={SearchIcon} onClick={onToggle} />
      </Box>
    </Flex>
  );
};

export default Header;

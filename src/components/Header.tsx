import React from 'react';
import { Link } from 'gatsby';
import { Box, useDisclosure, Image, Container, Button, Grid, GridItem } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import LogoSUBTE from '../images/LogoSUBTE_horizontal.svg';
import SearchIcon from '../images/search.svg';

import Menu from './Menu';
import SearchModal from './SearchModal';

const Header = () => {
  const { isOpen: isSearchDialogOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isMenuOpen, onToggle: onToggleMenuOpen } = useDisclosure();

  return (
    <Box
      bg="white"
      borderBottomColor="blackAlpha.300"
      borderBottomStyle="solid"
      borderBottomWidth="0.5px"
      position="sticky"
      top={0}
      zIndex={1}
    >
      <Container maxW="container.xl">
        <Grid
          alignItems="center"
          bg="white"
          gridTemplateColumns={['repeat(12, 1fr)', 'repeat(3, 1fr)']}
          py={4}
        >
          <GridItem colSpan={[6, 1]}>
            <Link to="/">
              <Image
                alt="Logo de la cooperativa de trabajo SUBTE"
                height="40px"
                maxW={40}
                src={LogoSUBTE}
              />
            </Link>
          </GridItem>
          {/* Botón de menú para Mobile */}
          <GridItem colEnd={11} colstart={10} display={['flex', 'none']} justifyContent="flex-end">
            <Button
              _active={{ backgroundColor: 'transparent', boxShadow: 'none' }}
              _focus={{ boxShadow: 'none' }}
              _hover={{ backgroundColor: 'transparent' }}
              bg="transparent"
              justifyContent="flex-end"
              onClick={onToggleMenuOpen}
            >
              <HamburgerIcon fontSize={22} />
            </Button>
          </GridItem>
          {/* Botón de buscar  */}
          <GridItem colEnd={[12, 'auto']} colStart={[11, 'auto']} order={[1, 2]}>
            <SearchModal isOpen={isSearchDialogOpen} onClose={onClose} />
            <Box display="flex" justifyContent={['center', 'flex-end']} ml="auto">
              <Image
                alt="Icono de busqueda"
                cursor="pointer"
                ml={3}
                src={SearchIcon}
                onClick={onOpen}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={[12, 1]} order={[2, 1]}>
            <Menu isMenuOpen={isMenuOpen} />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;

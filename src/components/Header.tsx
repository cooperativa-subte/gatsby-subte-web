import React from 'react';
import { Link } from 'gatsby';
import {
  Box,
  Input,
  useDisclosure,
  SlideFade,
  Image,
  Container,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import LogoSUBTE from '../images/LogoSUBTE_horizontal.svg';
import SearchIcon from '../images/search.svg';

import Menu from './Menu';

const Header = () => {
  const { isOpen: isSearchOpen, onToggle: onToggleSearchOpen } = useDisclosure();
  const { isOpen: isMenuOpen, onToggle: onToggleMenuOpen } = useDisclosure();

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
        <Grid
          alignItems={isMenuOpen ? 'flex-start' : 'center'}
          bg="white"
          gridTemplateColumns="repeat(3, 1fr)"
          py={4}
        >
          <GridItem colSpan={1}>
            <Link to="/">
              <Image
                alt="Logo de la cooperativa de trabajo SUBTE"
                height="40px"
                maxW={40}
                src={LogoSUBTE}
              />
            </Link>
          </GridItem>
          <Button
            _active={{ backgroundColor: 'transparent', boxShadow: 'none' }}
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: 'transparent' }}
            bg="transparent"
            display={['block', 'none']}
            onClick={onToggleMenuOpen}
          >
            <HamburgerIcon />
          </Button>
          <GridItem colSpan={[3, 1]}>
            <Menu isMenuOpen={isMenuOpen} />
          </GridItem>
          <GridItem colSpan={1} display={['none', 'block']}>
            <Box display="flex" ml="auto" w={64}>
              <SlideFade in={isSearchOpen} offsetX={10} offsetY={0}>
                <Input aria-label="Buscar en el sitio de SUBTE" placeholder="Buscar..." />
              </SlideFade>
              <Image
                alt="Icono de busqueda"
                cursor="pointer"
                ml={3}
                src={SearchIcon}
                onClick={onToggleSearchOpen}
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;

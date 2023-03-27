import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Box, List, ListItem } from '@chakra-ui/react';

type MenuItem = {
  url: string;
  label: string;
  id: string;
};

const query = graphql`
  query HeaderQuery {
    wpMenu(slug: { eq: "menu-principal" }) {
      menuItems {
        nodes {
          url
          label
          id
        }
      }
    }
  }
`;

type Props = {
  isMenuOpen: boolean;
  path: string;
  onToggleMenuOpen: () => void;
};

const Menu = ({ isMenuOpen, path, onToggleMenuOpen }: Props) => {
  const {
    wpMenu,
  }: {
    wpMenu: {
      menuItems: {
        nodes: MenuItem[];
      };
    };
  } = useStaticQuery(query);

  return (
    <List
      as="nav"
      display={{ base: isMenuOpen ? 'flex' : 'none', md: 'flex' }}
      flexDirection={['column', 'row']}
      gridArea="menu"
      mt={{ base: isMenuOpen ? '3' : '0', sm: '0' }}
    >
      {wpMenu.menuItems.nodes.map((menuItem: MenuItem) => (
        <ListItem
          key={menuItem.id}
          _first={{ marginLeft: 0 }}
          fontFamily="menuItem"
          fontSize={['lg', 'lg']}
          marginLeft={[0, 5]}
          mb={[1, 0]}
        >
          <Link
            style={{
              paddingBottom: '2px',
              display: 'inline-block',
              width: '100%',
            }}
            to={menuItem.url}
            onClick={onToggleMenuOpen}
          >
            <Box
              _hover={{
                borderBottom: '2px solid black',
              }}
              as="span"
              borderBottom={path === `${menuItem.url}/` ? '2px solid black' : 'none'}
              pb="1"
            >
              {menuItem.label}
            </Box>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Menu;

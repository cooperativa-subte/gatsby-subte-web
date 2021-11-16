import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { List, ListItem } from '@chakra-ui/react';

type MenuItem = {
  url: string;
  label: string;
  id: string;
};

const query = graphql`
  query HeaderQuery {
    allWpMenu {
      nodes {
        menuItems {
          nodes {
            url
            label
            id
          }
        }
      }
    }
  }
`;

type Props = {
  isMenuOpen: boolean;
  path: string;
};

const Menu = ({ isMenuOpen, path }: Props) => {
  const {
    allWpMenu: { nodes },
  }: {
    allWpMenu: {
      nodes: {
        menuItems: {
          nodes: MenuItem[];
        };
      }[];
    };
  } = useStaticQuery(query);

  if (!nodes || nodes.length === 0) return null;

  return (
    <List
      display={{ base: isMenuOpen ? 'flex' : 'none', sm: 'flex' }}
      flexDirection={['column', 'row']}
      gridArea="menu"
      mt={{ base: isMenuOpen ? '3' : '0', sm: '0' }}
    >
      {nodes[0].menuItems.nodes.map((menuItem: MenuItem) => (
        <ListItem
          key={menuItem.id}
          _first={{ marginLeft: 0 }}
          borderBottom={path === `${menuItem.url}/` ? '2px solid black' : 'none'}
          fontFamily="menuItem"
          fontSize={['lg', 'lg']}
          marginLeft={[0, 5]}
          mb={[1, 0]}
        >
          <Link to={menuItem.url}>{menuItem.label}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Menu;

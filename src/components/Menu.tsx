import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Flex, List, ListItem } from '@chakra-ui/react';

type MenuItem = {
  url: string;
  label: string;
  id: string;
};

const Menu = () => {
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
  } = useStaticQuery(graphql`
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
  `);

  if (!nodes || nodes.length === 0) return null;

  return (
    <Flex>
      <List display="flex">
        {nodes[0].menuItems.nodes.map((menuItem: MenuItem) => (
          <ListItem
            key={menuItem.id}
            _first={{ marginLeft: 0 }}
            fontFamily="menuItem"
            marginLeft={5}
          >
            <Link to={menuItem.url}>{menuItem.label}</Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default Menu;

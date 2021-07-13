import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const StyledMenuContainer = styled.nav`
  ul {
    display: flex;
    li {
      list-style: none;
      margin-right: 0.5rem;
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;

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

  if (!nodes || nodes.length === 0) return undefined;

  return (
    <StyledMenuContainer>
      <ul>
        {nodes[0].menuItems.nodes.map((menuItem: MenuItem) => (
          <li key={menuItem.id}>
            <Link to={menuItem.url}>{menuItem.label}</Link>
          </li>
        ))}
      </ul>
    </StyledMenuContainer>
  );
};

export default Menu;

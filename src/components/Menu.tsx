import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const StyledMenuContainer = styled.nav`
  ul {
    display: flex;
    li {
      list-style: none;
      margin: 0 1rem;
      a {
        color: black;
        text-decoration: none;
        font-family: 'HelveticaBold';
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

  if (!nodes || nodes.length === 0) return null;

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

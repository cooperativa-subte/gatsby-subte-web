import React from 'react';
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { graphql, Link, PageProps } from 'gatsby';
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

import SEO from '../components/seo';

type MenuQueryProps = {
  wpMenu: {
    menuItems: {
      nodes: {
        url: string;
        label: string;
        id: string;
      }[];
    };
  };
};

type LinkPageProps = PageProps<MenuQueryProps>;

const whiteLinks = ['/', '/servicios'];

function LinksPage({ data: { wpMenu } }: LinkPageProps): JSX.Element {
  return (
    <>
      <SEO title="Links" />

      <Flex alignItems="center" background="black" flex="1" flexDir="column">
        <Container flex="1" maxW="400px" pt="30px">
          {wpMenu.menuItems.nodes.map((item) => {
            return item.url.startsWith('/') ? (
              <Link key={item.id} style={{ display: 'block', marginBottom: '15px' }} to={item.url}>
                <Box
                  _after={
                    item.url === '/subsuelo'
                      ? {
                          content: '""',
                          position: 'absolute',
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: '#EB6D62',
                          top: '5px',
                          right: '5px',
                        }
                      : {}
                  }
                  alignItems="center"
                  as="span"
                  background={whiteLinks.includes(item.url) ? 'white' : '#555454'}
                  borderRadius="5px"
                  color={whiteLinks.includes(item.url) ? 'black' : 'white'}
                  cursor="pointer"
                  display="flex"
                  h={10}
                  justifyContent="center"
                  position="relative"
                  w="full"
                >
                  {item.label}
                </Box>
              </Link>
            ) : (
              <ChakraLink
                key={item.id}
                _hover={{ textDecoration: 'none' }}
                alignItems="center"
                background={whiteLinks.includes(item.url) ? 'white' : '#555454'}
                borderRadius="5px"
                color={whiteLinks.includes(item.url) ? 'black' : 'white'}
                cursor="pointer"
                display="flex"
                h={10}
                href={item.url}
                justifyContent="center"
                mb="15px"
                rel="noreferrer noopener"
                target="_blank"
              >
                {item.label}
              </ChakraLink>
            );
          })}
          <HStack
            divider={<StackDivider borderColor="white" borderLeftWidth="0.5px" />}
            justifyContent="space-between"
          >
            <IconButton
              _hover={{ background: 'transparent' }}
              aria-label="Instagram Icon"
              background="transparent"
              icon={
                <ChakraLink
                  href="https://www.instagram.com/cooperativasubte/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiOutlineInstagram color="white" size={30} />
                </ChakraLink>
              }
            />
            <IconButton
              _hover={{ background: 'transparent' }}
              aria-label="Twitter Icon"
              background="transparent"
              icon={
                <ChakraLink
                  href="https://twitter.com/coop_subte"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiOutlineTwitter color="white" size={30} />
                </ChakraLink>
              }
            />
            <IconButton
              _hover={{ background: 'transparent' }}
              aria-label="Facebook Icon"
              background="transparent"
              icon={
                <ChakraLink
                  href="https://facebook.com/cooperativasubte"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFacebookF color="white" size={25} />
                </ChakraLink>
              }
            />
            <IconButton
              _hover={{ background: 'transparent' }}
              aria-label="Youtube Icon"
              background="transparent"
              icon={
                <ChakraLink
                  href="https://www.youtube.com/channel/UCCQrY9kYllFL7jALXBNbggw"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillYoutube color="white" size={30} />
                </ChakraLink>
              }
            />
          </HStack>
        </Container>
        <Container maxW="400px">
          <Text color="white" mb="50px">
            <Box as="span" fontFamily="helveticaBold">
              Cooperar.
            </Box>{' '}
            Una idea simple y potente que elegimos para trabajar juntes
          </Text>
        </Container>
      </Flex>
    </>
  );
}

export default LinksPage;

export const query = graphql`
  query Menu {
    wpMenu(slug: { eq: "linktree" }) {
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

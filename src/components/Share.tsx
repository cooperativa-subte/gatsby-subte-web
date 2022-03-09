import {
  Button,
  IconButton,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import React from 'react';
import { FiShare2 } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';

type ShareProps = {
  slug: string;
  title: string;
};

function Share({ slug, title }: ShareProps): JSX.Element {
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <Button
          _active={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none' }}
          _hover={{ bg: 'transparent' }}
          aria-label="Compartir"
          bg="transparent"
          paddingInlineStart={0}
          rightIcon={<FiShare2 />}
          role="button"
          tabIndex={0}
          w="120px"
        >
          Compartir
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Link
            aria-label="Compartir en Facebook"
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsubte.uy%2F${slug}%2F&amp;src=sdkpreparse`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebookF />
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Share;

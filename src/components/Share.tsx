import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import React from 'react';
import { FiShare2 } from 'react-icons/fi';

function Share(): JSX.Element {
  return (
    <Popover>
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
      <PopoverContent bg="tomato" color="white">
        <PopoverHeader fontWeight="semibold">Customization</PopoverHeader>
        <PopoverArrow bg="pink.500" />
        <PopoverCloseButton bg="purple.500" />
        <PopoverBody>
          Tadaa!! The arrow color and background color is customized. Check the props for each
          component.
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Share;

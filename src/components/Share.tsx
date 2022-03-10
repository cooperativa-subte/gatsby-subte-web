import {
  Box,
  Button,
  Flex,
  Link,
  PlacementWithLogical,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { FaFacebookF, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsLink } from 'react-icons/bs';

type ShareProps = {
  slug: string;
  title: string;
  placement: PlacementWithLogical | undefined;
};

function Share({ slug, title, placement }: ShareProps): JSX.Element {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  function copyToClipBoard() {
    navigator.clipboard.writeText(`https://subte.uy/${slug}`).then(
      function () {
        setTooltipOpen(true);
        setTimeout(() => {
          setTooltipOpen(false);
        }, 2000);
      },
      function () {
        console.log('Failed to copy');
      },
    );
  }

  return (
    <Popover placement={placement}>
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
      <PopoverContent w={52}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody as={Flex}>
          <Link
            aria-label="Compartir en Facebook"
            display="inline-block"
            fontSize="2xl"
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsubte.uy%2F${slug}%2F&amp;src=sdkpreparse`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebookF />
          </Link>
          <Link
            data-action="share/whatsapp/share"
            display="inline-block"
            fontSize="2xl"
            href={`whatsapp://send?text=${encodeURI(`https://subte.uy/${slug}`)}`}
            ml={2}
          >
            <FaWhatsapp />
          </Link>
          <Link
            display="inline-block"
            fontSize="2xl"
            href={`https://telegram.me/share/url?url=https://subte.uy/${slug}`}
            ml={2}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTelegram />
          </Link>
          <Link
            display="inline-block"
            fontSize="2xl"
            href={`mailto:?&body=${`https://subte.uy/${slug}`}`}
            ml={2}
          >
            <AiOutlineMail />
          </Link>
          <Tooltip hasArrow isOpen={tooltipOpen} label="Enlace copiado">
            <Box
              as="span"
              cursor="pointer"
              display="inline-block"
              fontSize="2xl"
              ml={2}
              onClick={copyToClipBoard}
            >
              <BsLink />
            </Box>
          </Tooltip>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Share;

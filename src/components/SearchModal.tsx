import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function SearchModal({ isOpen, onClose }: Props): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Buscar</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb={4} textAlign="right">
          <FormControl id="buscar">
            <FormLabel>Encuentra contenido en la página</FormLabel>
            <Input type="text" />
          </FormControl>
          <Button alignSelf="flex-end" mt={4}>
            Buscar
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SearchModal;

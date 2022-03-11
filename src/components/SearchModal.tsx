import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useBoolean,
} from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  searchTerm: string;
};

const WP_REST_ENDPOINT = `${process.env.GATSBY_BACKEND_URL}/wp-json/wp/v2`;

function SearchModal({ isOpen, onClose }: Props): JSX.Element {
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useBoolean();
  const [searchResults, setSearchResults] = useState<{ title: string; url: string }[]>([]);

  async function onSubmit(searchTerm: FormData) {
    try {
      setLoading.on();
      const response = await axios.get(`${WP_REST_ENDPOINT}/search`, {
        params: {
          search: searchTerm.searchTerm,
          per_page: 100,
          context: 'embed',
          term: 'post',
        },
      });

      if (response.data && response.data.length > 0) {
        const regex = new RegExp(process.env.GATSBY_BACKEND_URL ?? '', 'gi');

        setSearchResults(
          response.data.map((result: any) => {
            let url = result.url.replace(regex, '');
            const [category, postName] = url.split('/');

            switch (category) {
              case 'conversatorio-0':
              case 'conversatorio-1':
                url = `/conversatorios/${postName}`;
                break;
              case 'blog':
                url = `/subsuelo/${postName}`;
                break;
              default:
                url = `/proyectos/${postName}`;
                break;
            }

            return {
              title: result.title,
              url,
            };
          }),
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading.off();
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mx={[4, 0]}>
        <ModalHeader>Buscar</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb={4} textAlign="right">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="buscar" isInvalid={errors.searchTerm !== undefined}>
              <FormLabel>Encuentra contenido en nuestra página</FormLabel>
              <Input
                _focus={{ boxShadow: 'none', borderColor: 'primary' }}
                _hover={{ borderColor: '#99a9bb' }}
                borderColor="#99a9bb"
                borderRadius={0}
                borderWidth="1px"
                height="8"
                type="text"
                {...register('searchTerm', {
                  required: { value: true, message: 'El campo es requerido' },
                })}
              />
              <FormErrorMessage>{errors.searchTerm && errors.searchTerm.message}</FormErrorMessage>
            </FormControl>
            <Button
              _hover={{ color: 'gray.200', backgroundColor: 'gray.800' }}
              alignSelf="flex-end"
              bgColor="primary"
              borderRadius={0}
              color="secondary"
              mt={4}
              type="submit"
            >
              Buscar
            </Button>
          </form>

          {loading && (
            <Center>
              <Spinner />
            </Center>
          )}
          {searchResults.length > 0 && (
            <List mt={4}>
              {searchResults.map((result: { title: string; url: string }) => (
                <ListItem key={result.url} mb={2} textAlign="left">
                  <Link
                    to={result.url}
                    onClick={() => {
                      setSearchResults([]);
                      resetField('searchTerm');
                      onClose();
                    }}
                  >
                    {result.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SearchModal;

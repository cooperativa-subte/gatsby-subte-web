import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';

import SEO from '../components/seo';

type FormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
};

const Contacto = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  function onSubmit(values: FormData) {
    console.log(values);
  }

  return (
    <>
      <SEO
        description="Contactanos por los siguientes servicios: Diseño Gráfico, Programación, Ilustración, Marketing Digital, Producción audiovisual y formación"
        title="Contacto"
      />
      <Container maxW="container.lg" mt={12} p={0}>
        <Stack direction={['column', 'column', 'row']} spacing="2rem">
          <Box flex={1}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.fullName !== undefined}>
                <FormLabel color="primary" htmlFor="fullName">
                  Nombre y Apellido: *
                </FormLabel>
                <Input
                  _focus={{ boxShadow: 'none', borderColor: 'primary' }}
                  _hover={{ borderColor: '#99a9bb' }}
                  borderColor="#99a9bb"
                  borderRadius={0}
                  borderWidth="1px"
                  height="8"
                  id="fullName"
                  type="text"
                  variant="outline"
                  {...register('fullName', {
                    required: { value: true, message: 'El nombre es un campo requerido' },
                    minLength: {
                      value: 3,
                      message: 'El nombre debe tener al menos 3 caracteres',
                    },
                  })}
                />
                <FormErrorMessage>{errors.fullName && errors.fullName.message}</FormErrorMessage>
              </FormControl>
              <FormControl mt={2}>
                <FormLabel color="primary">Teléfono: *</FormLabel>
                <Input
                  _focus={{ boxShadow: 'none', borderColor: 'primary' }}
                  _hover={{ borderColor: '#99a9bb' }}
                  borderColor="#99a9bb"
                  borderRadius={0}
                  borderWidth="1px"
                  height="8"
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors.email !== undefined} mt={2}>
                <FormLabel color="primary">Email: *</FormLabel>
                <Input
                  _focus={{ boxShadow: 'none', borderColor: 'primary' }}
                  _hover={{ borderColor: '#99a9bb' }}
                  borderColor="#99a9bb"
                  borderRadius={0}
                  borderWidth="1px"
                  height="8"
                  type="email"
                  {...register('email', {
                    required: { value: true, message: 'El email es un campo requerido' },
                  })}
                />
                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
              </FormControl>
              <FormControl mt={2}>
                <FormLabel color="primary">Asunto:</FormLabel>
                <Input
                  _focus={{ boxShadow: 'none', borderColor: 'primary' }}
                  _hover={{ borderColor: '#99a9bb' }}
                  borderColor="#99a9bb"
                  borderRadius={0}
                  borderWidth="1px"
                  height="8"
                  type="text"
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel> Mensaje: *</FormLabel>
                <Textarea
                  _focus={{ borderColor: 'primary', boxShadow: 'none' }}
                  _hover={{ borderColor: '#99a9bb' }}
                  borderColor="#99a9bb"
                  borderRadius={0}
                />
              </FormControl>
              <Button
                _hover={{ color: 'gray.200', backgroundColor: 'gray.800' }}
                bgColor="primary"
                borderRadius={0}
                color="secondary"
                mt={5}
                type="submit"
              >
                Enviar Mensaje
              </Button>
            </form>
          </Box>
          <Box flex={1}>
            <Heading as="h1">Contactanos</Heading>
            <Text>
              Si buscás servicios de diseño, programación o ilustración no dudes en ponerte en
              contacto con nosotres. Tenemos planes especiales para cooperativas y organizaciones
              sociales.
            </Text>
            <Box>
              <iframe
                allowFullScreen
                height="450"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.784452366345!2d-56.18463988488356!3d-34.91185838038084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f815c6b7fd04f%3A0x83520e5d5391232c!2sCooperativa%20de%20trabajo%20SUBTE!5e0!3m2!1sen!2suy!4v1634234253068!5m2!1sen!2suy"
                style={{ border: 0 }}
                width="100%"
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Contacto;

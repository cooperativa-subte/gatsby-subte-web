import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';

import SEO from '../components/seo';

const Contacto = () => {
  return (
    <>
      <SEO
        description="Contactanos por los siguientes servicios: Diseño Gráfico, Programación, Ilustración, Marketing Digital, Producción audiovisual y formación"
        title="Contacto"
      />
      <Container maxW="container.lg" mt={12} p={0}>
        <Stack direction={['column', 'column', 'row']} spacing="2rem">
          <Box flex={1}>
            <FormControl>
              <FormLabel color="primary">Nombre y Apellido: *</FormLabel>
              <Input
                isFullWidth
                _focus={{ boxShadow: 'none', borderColor: 'primary' }}
                borderRadius={0}
                borderWidth="1px"
                type="text"
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel color="primary">Teléfono: *</FormLabel>
              <Input
                isFullWidth
                _focus={{ boxShadow: 'none', borderColor: 'primary' }}
                borderRadius={0}
                borderWidth="1px"
                type="text"
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel color="primary">Email: *</FormLabel>
              <Input
                isFullWidth
                _focus={{ boxShadow: 'none', borderColor: 'primary' }}
                borderRadius={0}
                borderWidth="1px"
                type="email"
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel color="primary">Asunto:</FormLabel>
              <Input
                isFullWidth
                _focus={{ boxShadow: 'none', borderColor: 'primary' }}
                borderRadius={0}
                borderWidth="1px"
                type="text"
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel> Mensaje: *</FormLabel>
              <Textarea _focus={{ borderColor: 'primary', boxShadow: 'none' }} borderRadius={0} />
            </FormControl>
            <Button
              _hover={{ color: 'gray.200' }}
              bgColor="primary"
              borderRadius={0}
              color="secondary"
              mt={5}
            >
              Enviar Mensaje
            </Button>
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

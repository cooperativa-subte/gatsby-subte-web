import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  Spinner,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

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
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const toast = useToast();

  async function sendEmail(data: FormData) {
    try {
      setIsSubmitting(true);
      const response = await axios.post(process.env.GATSBY_AWS_LAMBDA_URL ?? '', {
        email: data.email,
        tel: data.phoneNumber,
        name: data.fullName,
        message: data.message,
        subject: data.subject,
        requestType: 'contact',
      });

      if (response && response.data.statusCode >= 200 && response.data.statusCode < 300) {
        toast({
          title: '¡Gracias!',
          description: 'Tu mensaje ha sido enviado correctamente',
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
        reset();
      } else {
        toast({
          title: 'Error',
          description: 'Ha ocurrido un error al enviar el mensaje',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function onSubmit(values: FormData) {
    await sendEmail(values);
  }

  return (
    <>
      <SEO
        description="Contactanos por los siguientes servicios: Diseño Gráfico, Programación, Ilustración, Marketing Digital, Producción audiovisual y formación"
        title="Contacto"
      />
      <Container maxW="container.xl" my={10}>
        <Heading as="h1" size="xl">
          Contacto
        </Heading>
        <Box
          as="span"
          borderTopColor="blackAlpha.300"
          borderTopStyle="solid"
          borderTopWidth="0.5px"
          display="block"
          mb={6}
          mt={2}
          width="full"
        />
        <Grid gridColumnGap={40} gridTemplateColumns={['1fr', '1fr 1fr']}>
          <GridItem mb={[8, 0]}>
            <Text mb={10}>
              Si te interesa pensar y desarrollar la comunicación de tu organización ponete en
              contacto con nosotres.
            </Text>
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
                <FormLabel color="primary">Teléfono:</FormLabel>
                <Input
                  _focus={{ boxShadow: 'none', borderColor: 'primary' }}
                  _hover={{ borderColor: '#99a9bb' }}
                  borderColor="#99a9bb"
                  borderRadius={0}
                  borderWidth="1px"
                  height="8"
                  type="text"
                  {...register('phoneNumber')}
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
                  {...register('subject')}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel> Mensaje: *</FormLabel>
                <Textarea
                  _focus={{ borderColor: 'primary', boxShadow: 'none' }}
                  _hover={{ borderColor: '#99a9bb' }}
                  borderColor="#99a9bb"
                  borderRadius={0}
                  {...register('message', {
                    required: { value: true, message: 'El mensaje es un campo requerido' },
                  })}
                />
              </FormControl>
              <Button
                _hover={{ color: 'gray.200', backgroundColor: 'gray.800' }}
                bgColor="primary"
                borderRadius={0}
                color="secondary"
                mt={5}
                type="submit"
                w={36}
              >
                {isSubmitting ? 'Enviando' : 'Enviar Mensaje'}
                {isSubmitting && <Spinner ml={3} />}
              </Button>
            </form>
          </GridItem>
          <GridItem
            sx={{
              '& .gatsby-image-wrapper img': {
                aspectRatio: '1',
                objectPosition: 'bottom',
              },
            }}
          >
            <StaticImage
              alt="Foto de la fachada de casa en el aire"
              objectPosition="bottom bottom"
              src="../images/casa_en_el_aire.webp"
            />
          </GridItem>
        </Grid>
        <Box as="span" borderTop="0.5px solid black" display="block" mb={[10, 16]} mt={[10, 8]} />
        <iframe
          allowFullScreen
          height="450"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.784452366345!2d-56.18463988488356!3d-34.91185838038084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f815c6b7fd04f%3A0x83520e5d5391232c!2sCooperativa%20de%20trabajo%20SUBTE!5e0!3m2!1sen!2suy!4v1634234253068!5m2!1sen!2suy"
          style={{ border: 0 }}
          title="Mapa de la oficina de SUBTE"
          width="100%"
        />
        <Grid gridTemplateColumns={['1fr', '350px 400px']} mb="20" mt={8}>
          <GridItem mb={[8, 0]}>
            <Text fontFamily="helveticaBold" fontSize="md">
              San Salvador 1510
            </Text>
            <Text fontFamily="helveticaBold" fontSize="md">
              Montevideo, Uruguay
            </Text>
            <Link fontFamily="helveticaLight" fontSize="md" href="mailto:hola@subte.uy">
              hola@subte.uy
            </Link>
          </GridItem>
          <GridItem>
            <Text fontFamily="helveticaLight" fontSize="md">
              La oficina de SUBTE se encuentra en Casa en el aire, una casa cultural y espacio de
              trabajo colaborativo en el barrio Palermo.
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Contacto;

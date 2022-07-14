import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Heading,
  HStack,
  IconButton,
  Tag,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'gatsby';
import { useForm } from 'react-hook-form';
import { IoIosSend } from 'react-icons/io';
import { BsChevronLeft } from 'react-icons/bs';

import SubteInput from '../../components/Forms/SubteInput';
import SubteTextArea from '../../components/Forms/SubteTextArea';
import SEO from '../../components/seo';
import SubteCheckbox from '../../components/SubteCheckbox';

type Inputs = {
  solicitante: string;
  email: string;
  tituloProyecto: string;
  objetivo: string;
  plazoEntrega: string;
  tipoDePieza: string;
  cantidadPiezas: string;
  materialesImpresos: string;
  textoAIncluir: string;
  referencias: string;
  observaciones: string;
};

function SolicitudGraficoPage({ location }: { location: any }): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  console.log(location);
  function onSubmit(values: Inputs) {
    console.log(values);
  }

  return (
    <>
      <SEO />
      <Container maxW="container.md">
        <Flex my="40px">
          <Link to="/nueva-solicitud">
            <IconButton
              _hover={{ background: 'transparent' }}
              aria-label="Volver a la lista de Nueva Solicitudes"
              background="transparent"
              fontSize="4xl"
              icon={<BsChevronLeft />}
            />
          </Link>
          <HStack>
            <Tag
              background={
                location.pathname === `/nueva-solicitud/audiovisual` ? '#E2E2E2' : 'transparent'
              }
              borderRadius="full"
              cursor="pointer"
            >
              Audiovisual
            </Tag>
            <Tag
              background={
                location.pathname === `/nueva-solicitud/grafico` ? '#E2E2E2' : 'transparent'
              }
              borderRadius="full"
              cursor="pointer"
            >
              Gráfico
            </Tag>
          </HStack>
        </Flex>
        <Heading mb="30px">Solicitud de piezas gráficas</Heading>
        <Text fontFamily="helveticaBold" mb="20px">
          Información general
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.solicitante} mb="20px">
            <FormLabel fontFamily="helveticaBold" htmlFor="solicitante">
              Solicitante*
            </FormLabel>
            <SubteInput
              id="solicitante"
              placeholder="Ingrese aquí su nombre o el nombre de su organización"
              {...register('solicitante', {
                required: 'Este campo es requerido',
              })}
            />
            <FormErrorMessage>{errors.solicitante && errors.solicitante.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email} mb="20px">
            <FormLabel fontFamily="helveticaBold" htmlFor="email">
              Mail de contacto*
            </FormLabel>
            <SubteInput
              id="email"
              type="email"
              {...register('email', {
                required: 'Este campo es requerido',
              })}
            />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.tituloProyecto} mb="20px">
            <FormLabel fontFamily="helveticaBold" htmlFor="tituloProyecto">
              Título del proyecto*
            </FormLabel>
            <SubteInput
              id="tituloProyecto"
              placeholder="Ingrese aquí el nombre del proyecto"
              {...register('tituloProyecto', {
                required: 'Este campo es requerido',
              })}
            />
            <FormErrorMessage>
              {errors.tituloProyecto && errors.tituloProyecto.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.objetivo} mb="20px">
            <FormLabel fontFamily="helveticaBold" htmlFor="objetivo">
              Objectivo*
            </FormLabel>
            <SubteTextArea
              id="objetivo"
              placeholder="¿Cuál es el objetivo de la pieza?&#10;Por ejemplo: “Informar sobre un nuevo acuerdo alcanzado”"
              {...register('objetivo', {
                required: 'Este campo es requerido',
              })}
            />
            <FormErrorMessage>{errors.objetivo && errors.objetivo.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.plazoEntrega} mb="20px">
            <FormLabel fontFamily="helveticaBold" htmlFor="plazoEntrega">
              Plazo de entrega*
            </FormLabel>
            <SubteInput
              id="plazoEntrega"
              placeholder="¿Cuándo debería estar listo?"
              {...register('plazoEntrega', {
                required: 'Este campo es requerido',
              })}
              w={'33%'}
            />
            <Text color="#BFBFBF" display="inline-block" fontFamily="helveticaLight" ml="20px">
              Les agradecemos ser razonables con los plazos.
            </Text>
            <FormErrorMessage>
              {errors.plazoEntrega && errors.plazoEntrega.message}
            </FormErrorMessage>
          </FormControl>
          <Flex mb="20px">
            <FormControl isInvalid={!!errors.tipoDePieza} w="60%">
              <FormLabel fontFamily="helveticaBold">
                Tipo de pieza*{' '}
                <Box as="span" color="#BFBFBF" fontSize="xs">
                  Puede elegir una o varias opciones.
                </Box>
              </FormLabel>
              <Grid gridTemplateColumns={'80px 160px 1fr'}>
                <SubteCheckbox
                  appearance="checkbox"
                  value="afiche"
                  {...register('tipoDePieza', { required: 'Este campo es requerido' })}
                >
                  Afiche
                </SubteCheckbox>
                <SubteCheckbox
                  appearance="checkbox"
                  value="placa-redes"
                  {...register('tipoDePieza', { required: 'Este campo es requerido' })}
                >
                  Placa redes sociales
                </SubteCheckbox>
                <SubteCheckbox
                  appearance="checkbox"
                  value="historia-redes"
                  {...register('tipoDePieza', { required: 'Este campo es requerido' })}
                >
                  Historia redes sociales
                </SubteCheckbox>
                <SubteCheckbox
                  appearance="checkbox"
                  value="volante"
                  {...register('tipoDePieza', { required: 'Este campo es requerido' })}
                >
                  Volante
                </SubteCheckbox>
                <SubteCheckbox
                  appearance="checkbox"
                  value="folleto"
                  {...register('tipoDePieza', { required: 'Este campo es requerido' })}
                >
                  Folleto
                </SubteCheckbox>
              </Grid>

              <FormErrorMessage>
                {errors.tipoDePieza && errors.tipoDePieza.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.cantidadPiezas} w="40%">
              <FormLabel fontFamily="helveticaBold" htmlFor="cantidadPiezas">
                Cantidad de piezas
              </FormLabel>
              <SubteInput
                id="cantidadPiezas"
                {...register('cantidadPiezas')}
                placeholder="01"
                w="20%"
              />
              <FormErrorMessage>
                {errors.cantidadPiezas && errors.cantidadPiezas.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <FormControl isInvalid={!!errors.materialesImpresos} mb="20px">
            <FormLabel fontFamily="helveticaBold" htmlFor="materialesImpresos">
              Materiales impresos
            </FormLabel>
            <SubteTextArea
              id="materialesImpresos"
              placeholder="En el caso de estar solicitando un material que deberá imprimirse, especificar tamaño y cantidad de tintas (una tinta, dos tintas, full color, por ejemplo)"
              {...register('materialesImpresos')}
            />
            <FormErrorMessage>
              {errors.materialesImpresos && errors.materialesImpresos.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.textoAIncluir} mb="20px">
            <FormLabel fontFamily="helveticaBold" htmlFor="textoAIncluir">
              Texto a incluir en la(s) pieza(s)*
            </FormLabel>
            <SubteTextArea
              id="textoAIncluir"
              placeholder="Aquí nos interesa saber cuál es el texto que sí o sí debe visualizarse en la pieza final. Aconsejamos redactar de forma sintética, incorporando solamente loa información imprescindible."
              {...register('textoAIncluir', {
                required: 'Este campo es requerido',
              })}
              rows={6}
            />
            <FormErrorMessage>
              {errors.textoAIncluir && errors.textoAIncluir.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.referencias} mb="20px">
            <FormLabel fontFamily="helveticaBold" htmlFor="referencias">
              Referencias o imágenes a utilizar
            </FormLabel>
            <SubteTextArea
              id="referencias"
              placeholder="Aquí podes comentarnos referencias que puedan ser de utilidad para pensar la pieza gráfica. También podés subir una imagen o poner una URL."
              {...register('referencias')}
            />
            <FormErrorMessage>{errors.referencias && errors.referencias.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.observaciones}>
            <FormLabel fontFamily="helveticaBold" htmlFor="observaciones">
              Otras observaciones
            </FormLabel>
            <SubteTextArea
              id="observaciones"
              placeholder="¿A quién está dirigida la pieza?&#10;Por ejemplo: “A las y los afiliados al Sindicato”, “A los militantes sindicales de todo el país”"
              {...register('observaciones')}
            />
            <FormErrorMessage>
              {errors.observaciones && errors.observaciones.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            _hover={{
              color: 'white',
              background: 'black',
            }}
            background="black"
            color="white"
            leftIcon={<IoIosSend fontSize="30px" />}
            mt="40px"
            type="submit"
            w="full"
          >
            Enviar
          </Button>
        </form>
      </Container>
    </>
  );
}

export default SolicitudGraficoPage;

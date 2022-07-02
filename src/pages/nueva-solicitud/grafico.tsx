import {
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import SEO from '../../components/seo';

type Inputs = {
  name: string;
  email: string;
  projectTitle: string;
  goal: string;
  dueDate: string;
  type: string;
  materials: string;
};

function SolicitudGraficoPage(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  function onSubmit(values: Inputs) {
    console.log(values);
  }

  return (
    <>
      <SEO />
      <Container maxW="container.md">
        <Heading>Solicitud de piezas gráficas</Heading>
        <Text>Información general</Text>
        <form onSubmit={handleSubmit(onSubmit)} />
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor="name">Solicitante*</FormLabel>
          <Input
            id="name"
            placeholder="Ingrese aquí su nombre o el nombre de su organización"
            {...register('name', {
              required: 'Este campo es requerido',
            })}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Mail de contacto*</FormLabel>
          <Input
            id="email"
            type="email"
            {...register('email', {
              required: 'Este campo es requerido',
            })}
          />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.projectTitle}>
          <FormLabel htmlFor="projectTitle">Título del proyecto*</FormLabel>
          <Input
            id="projectTitle"
            {...register('projectTitle', {
              required: 'Este campo es requerido',
            })}
          />
          <FormErrorMessage>{errors.projectTitle && errors.projectTitle.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.goal}>
          <FormLabel htmlFor="goal">Objectivo*</FormLabel>
          <Textarea
            id="goal"
            {...register('goal', {
              required: 'Este campo es requerido',
            })}
          />
          <FormErrorMessage>{errors.goal && errors.goal.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.dueDate}>
          <FormLabel htmlFor="dueDate">Plazo de entrega*</FormLabel>
          <Textarea
            id="dueDate"
            {...register('dueDate', {
              required: 'Este campo es requerido',
            })}
          />
          <FormErrorMessage>{errors.dueDate && errors.dueDate.message}</FormErrorMessage>
        </FormControl>
      </Container>
    </>
  );
}

export default SolicitudGraficoPage;

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const VERIFICACIONES = [
  { label: '4 + 3', value: '7' },
  { label: '9 + 5', value: '14' },
  { label: '8 x 2', value: '16' },
  { label: '10 - 7 ', value: '3' },
  { label: '11 + 4', value: '15' },
  { label: '7 x 3', value: '21' },
  { label: '7 + 9', value: '16' },
  { label: '5 + 4', value: '9' },
  { label: '9 + 3', value: '12' },
  { label: '13 - 5', value: '8' },
  { label: '15 x 2', value: '30' },
  { label: '4 x 3', value: '12' },
  { label: '6 + 6', value: '12' },
  { label: '7 + 7', value: '14' },
  { label: '9 + 9', value: '18' },
];

const shuffle = (array: { label: string; value: string }[]) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

type FormData = {
  fullName: string;
  subject: string;
  email: string;
  message: string;
  question: string;
};

function RegistroConversatoriosForm(): JSX.Element {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<FormData>();
  const [operation] = useState<{ label: string; value: string }>(shuffle(VERIFICACIONES)[0]);

  function onSubmit(values: FormData) {
    if (values.question !== operation.value) {
      setError('question', { type: 'message', message: 'Respuesta inválida' });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.fullName !== undefined}>
        <FormLabel color="primary" htmlFor="fullName">
          Nombre completo: *
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
            required: { value: true, message: 'El nombre completo es un campo requerido' },
            minLength: {
              value: 3,
              message: 'El nombre completo debe tener al menos 3 caracteres',
            },
          })}
        />
        <FormErrorMessage>{errors.fullName && errors.fullName.message}</FormErrorMessage>
      </FormControl>
      <FormControl mt={2}>
        <FormLabel color="primary">Organización:</FormLabel>
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
        <FormLabel>Pregunta o problema que quieras plantear:</FormLabel>
        <Textarea
          _focus={{ borderColor: 'primary', boxShadow: 'none' }}
          _hover={{ borderColor: '#99a9bb' }}
          borderColor="#99a9bb"
          borderRadius={0}
          {...register('message')}
        />
      </FormControl>
      <FormControl isInvalid={errors.question !== undefined} mt={2}>
        <FormLabel color="primary" htmlFor="question">
          Completa para enviar: ¿Cuanto es {operation.label}?
        </FormLabel>
        <Input
          _focus={{ boxShadow: 'none', borderColor: 'primary' }}
          _hover={{ borderColor: '#99a9bb' }}
          borderColor="#99a9bb"
          borderRadius={0}
          borderWidth="1px"
          height="8"
          id="question"
          type="text"
          variant="outline"
          w={40}
          {...register('question', {
            required: { value: true, message: 'Esta pregunta es obligatoria' },
          })}
        />
        <FormErrorMessage>{errors.question && errors.question.message}</FormErrorMessage>
      </FormControl>
      <Button
        _hover={{ color: 'gray.200', backgroundColor: 'gray.800' }}
        bgColor="primary"
        borderRadius={0}
        color="secondary"
        mt={5}
        type="submit"
      >
        Inscribirse
      </Button>
    </form>
  );
}

export default RegistroConversatoriosForm;

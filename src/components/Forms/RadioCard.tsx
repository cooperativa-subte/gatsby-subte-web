import * as React from 'react';
import { Box, Flex, useRadio } from '@chakra-ui/react';

export default function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Flex
      alignItems="center"
      as="label"
      position="relative"
      sx={{
        '& > input:checked + div:after': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          border: '4px solid red',
          borderBottom: '4px solid transparent',
          borderLeft: '4px solid transparent',
          width: '14px',
          transform: 'rotate(45deg)',
        },
      }}
    >
      <input {...input} />
      <Box
        {...checkbox}
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        borderColor="black"
        borderWidth="1px"
        cursor="pointer"
        h="15px"
        mr="5px"
        w="15px"
      />
      {props.children}
    </Flex>
  );
}

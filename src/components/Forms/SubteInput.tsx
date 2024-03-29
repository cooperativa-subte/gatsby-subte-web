import { Input, InputProps } from '@chakra-ui/react';
import React from 'react';

function SubteInput(props: InputProps): JSX.Element {
  return (
    <Input
      {...props}
      _hover={{ borderColor: 'black' }}
      _placeholder={{ color: 'rgb(191, 191, 191)', fontFamily: 'helveticaLight' }}
      borderColor="#707070"
      borderRadius="5px"
    />
  );
}

export default SubteInput;

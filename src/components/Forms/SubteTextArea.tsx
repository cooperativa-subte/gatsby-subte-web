import { Textarea, TextareaProps } from '@chakra-ui/react';
import React from 'react';

function SubteTextArea(props: TextareaProps): JSX.Element {
  return (
    <Textarea
      {...props}
      _placeholder={{ color: '#BFBFBF', fontFamily: 'helveticaLight' }}
      borderColor="#707070"
      borderRadius="5px"
    />
  );
}

export default SubteTextArea;

import { Textarea, TextareaProps } from '@chakra-ui/react';
import React, { LegacyRef } from 'react';

function SubteTextArea(props: TextareaProps, ref: LegacyRef<HTMLTextAreaElement>): JSX.Element {
  return (
    <Textarea
      {...props}
      ref={ref}
      _placeholder={{ color: '#BFBFBF', fontFamily: 'helveticaLight' }}
      borderColor="#707070"
      borderRadius="5px"
    />
  );
}

export default React.forwardRef(SubteTextArea);

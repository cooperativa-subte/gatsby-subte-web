import { Input, InputProps } from '@chakra-ui/react';
import React, { LegacyRef } from 'react';

function SubteInput(props: InputProps, ref: LegacyRef<HTMLInputElement>): JSX.Element {
  return (
    <Input
      {...props}
      ref={ref}
      _hover={{ borderColor: 'black' }}
      _placeholder={{ color: 'rgb(191, 191, 191)', fontFamily: 'helveticaLight' }}
      borderColor="#707070"
      borderRadius="5px"
    />
  );
}

export default React.forwardRef(SubteInput);

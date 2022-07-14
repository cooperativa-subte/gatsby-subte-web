import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import React, { LegacyRef } from 'react';
import { Ref } from 'react-hook-form';

function SubteCheckbox(props: CheckboxProps, ref: LegacyRef<HTMLInputElement>): JSX.Element {
  return (
    <Checkbox
      ref={ref}
      appearance="checkbox"
      sx={{
        span: { fontSize: 'sm' },
        'span[data-checked]': {
          color: 'black',
          background: 'transparent',
          borderColor: 'rgb(226, 232, 240)',
        },
        'span[data-checked]:hover': {
          color: 'black',
          background: 'transparent',
          borderColor: 'rgb(226, 232, 240)',
        },
      }}
      {...props}
    >
      {props.children}
    </Checkbox>
  );
}

export default React.forwardRef(SubteCheckbox);

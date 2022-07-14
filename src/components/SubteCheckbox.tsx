import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import React from 'react';

function SubteCheckbox(props: CheckboxProps): JSX.Element {
  return (
    <Checkbox
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

export default SubteCheckbox;

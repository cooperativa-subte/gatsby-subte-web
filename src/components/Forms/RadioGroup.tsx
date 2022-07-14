import * as React from 'react';
import { CheckboxGroup, HStack, useRadioGroup } from '@chakra-ui/react';

import RadioCard from './RadioCard';

export default function RadioGroup({ options }: { options: string[] }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });

        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

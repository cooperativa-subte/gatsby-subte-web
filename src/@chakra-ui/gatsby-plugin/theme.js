import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    primary: theme.colors.black,
    secondary: 'white',
  },
  sizes: {
    container: {
      lg: '1100px',
    },
  },
});

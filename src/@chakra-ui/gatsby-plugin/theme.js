import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  fonts: {
    heading: 'HelveticaMedium',
    body: 'HelveticaLight',
  },
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

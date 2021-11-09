import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  fonts: {
    menuItem: 'HelveticaBold',
    heading: 'HelveticaMedium',
    body: 'HelveticaRegular',
    helveticaBold: 'HelveticaBold',
    helveticaExtraBold: 'HelveticaExtraBold',
  },
  colors: {
    primary: theme.colors.black,
    secondary: 'white',
  },
  sizes: {
    container: {
      xl: '1200px',
    },
  },
});

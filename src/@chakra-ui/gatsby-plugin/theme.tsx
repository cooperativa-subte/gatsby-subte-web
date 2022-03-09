import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  fonts: {
    menuItem: 'HelveticaBold',
    heading: 'HelveticaMedium',
    body: 'HelveticaRegular',
    helveticaBold: 'HelveticaBold',
    helveticaExtraBold: 'HelveticaExtraBold',
    helveticaLight: 'HelveticaLight',
  },
  colors: {
    primary: theme.colors.black,
    secondary: 'white',
    alternative: '#EB6D62',
  },
  sizes: {
    container: {
      xl: '1200px',
    },
  },
});

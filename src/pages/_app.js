import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '@styles/globals.scss';

const theme = extendTheme({
  colors: {
    primary: {
      500: "#00A298"
    }
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

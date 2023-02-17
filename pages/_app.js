import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { GlobalContext } from '../context/GlobalContext'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <GlobalContext>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </GlobalContext>
  )
}


export default App
import type { AppProps } from 'next/app'
// Importar o ChakraProvider
import { ChakraProvider } from "@chakra-ui/react"

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Envolver o app com o ChakraProvider
    <ChakraProvider resetCSS theme={theme}>
      {/* ☝🏽 adicionei o theme a propriedade theme do ChakraProvider */}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

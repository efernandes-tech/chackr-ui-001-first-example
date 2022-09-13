import type { AppProps } from 'next/app'
// Importar o ChakraProvider
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Envolver o app com o ChakraProvider
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

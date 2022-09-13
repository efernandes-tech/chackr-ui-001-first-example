import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ToogleThemeButton } from '../components/ToogleThemeButton'

const Home: NextPage = () => {
  return (
    // Ao invés de usarmos o elemento html div,
    // usaremos o componente Flex do Chakra UI, que é um container flexbox
    <Flex
      // Altura da container
      height="100vh"
      // Largura do container
      width="100vw"
      // Alinhamento vertical do container
      align="center"
      // Alinhamento horizontal do container
      justify="center"
    >
      <ToogleThemeButton />
    </Flex>
  )
}

export default Home

import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
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
      // Direção do container
      flexDirection="column"
    >
      <Text
        // Essa cor vem direto do nosso tema
        color="success.700"
        // Tamanho da fonte
        fontSize="4xl"
        // Peso da fonte
        fontWeight="bold"
        // Alinhamento da fonte
        textAlign="center"
      >
        Botão para mudar tema da aplicação na Home
      </Text>
      <ToogleThemeButton />
      {/* 👇🏽 por questòes de acessibilidade e SEO */}
      <Link href="/page2">
        <a>
          Ir para a página 2
        </a>
      </Link>
      {/* ☝🏽 devemos envolver o elemento filho do componente Link em uma tag 'a' */}
    </Flex>
  )
}

export default Home;

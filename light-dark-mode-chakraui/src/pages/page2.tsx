import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { ToogleThemeButton } from '../components/ToogleThemeButton'

const Page2: NextPage = () => {
    return (
        <Flex
            height="100vh"
            width="100vw"
            align="center"
            justify="center"
            flexDirection="column"
        >
            <Text
                color="success.700"
                fontSize="4xl"
                fontWeight="bold"
                textAlign="center"
            >
                Botão para mudar tema da aplicação na Página 2
            </Text>
            <ToogleThemeButton />
            <Link href="/">
                <a>
                    Ir para a Home
                </a>
            </Link>
        </Flex>
    )
}

export default Page2;

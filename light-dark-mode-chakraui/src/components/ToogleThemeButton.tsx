import { IconButton, useColorMode } from "@chakra-ui/react";
// Importação do icone de dentro do react-icons
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export function ToogleThemeButton() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            // Para questões de acessibilidade, explicar o que o elemento faz
            aria-label="Toogle theme"
            // Icone do botão
            icon={colorMode === 'light' ? <RiMoonLine /> : <RiSunLine />}
            // A função que será executada quando o botão for clicado
            onClick={toggleColorMode}
        />
    );
}

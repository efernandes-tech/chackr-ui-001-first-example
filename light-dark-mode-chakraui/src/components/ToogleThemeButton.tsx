import { IconButton } from "@chakra-ui/react";
// Importação do icone de dentro do react-icons
import { RiMoonLine } from "react-icons/ri";

export function ToogleThemeButton() {
    return (
        <IconButton
            // Para questões de acessibilidade, explicar o que o elemento faz
            aria-label="Toogle theme"
            // Icone do botão
            icon={<RiMoonLine />}
            // A função que será executada quando o botão for clicado
            onClick={() => console.log('Clicou no botão')}
        />
    );
}

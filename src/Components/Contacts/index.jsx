import Button from "../Button";
import { ContainerContact, GridContact, Title, Text, GridButtons } from "./styles";

const Contacts = () => {
    return(
        <ContainerContact>
            <GridContact>
                <Title>vamos trabalhar juntos?</Title>
                <Text>Estou aberto a oportunidades freelance, contratos e posições full-time. Me manda uma mensagem!</Text>
                <GridButtons>
                    <Button>✉ enviar e-mail</Button>
                    <Button>linkedin</Button>
                    <Button>github</Button>
                </GridButtons>
            </GridContact>
        </ContainerContact>
    )
}

export default Contacts
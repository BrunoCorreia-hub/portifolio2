
import Skills from "../Skills";
import { ContainerStack, GridText, SubTitle, Title, Paragraph, GridStack } from "./styles";

const Stacks = () => {
    return(
        <ContainerStack>
            <GridText>
                <SubTitle>Stack</SubTitle>
                <Title>habilidades técnicas</Title>
                <Paragraph>Tecnologias que uso no dia a dia</Paragraph>
            </GridText>
            <GridStack>
                <Skills />
            </GridStack>
        </ContainerStack>
    )
}

export default Stacks
import { ContainerMain, ContainerInfo, Grid, Title, ContainerButton, ContainerImg, Image } from "./styles";
import logo from "../../assets/logo.png";
import Button from "../Button/index";

const On = () => {
    return (
        <ContainerMain>
            <ContainerInfo>
                <Grid>✔ disponivel para projetos</Grid>
                <Title>Olá, eu sou<br />
                    <span>Bruno Correia</span> 👋
                </Title>
                <p>Desenvolvedor front-end apaixonado por criar interfaces bonitas,
                    acessíveis e de alta performance. Especializado em React,
                    JavaScript e design systems.</p>
                <ContainerButton>
                    <Button>Ver projetos</Button>
                    <Button>Baixar Curriculo</Button>
                </ContainerButton>
            </ContainerInfo>
            <ContainerImg>
                <Image src={logo} alt="Logo" />
            </ContainerImg>
        </ContainerMain>
    )
}

export default On
import CardProjects from "../CardProjects";
import { ContainerProjects, GridText, GridProjects } from "./styles";

const Projects = () => {
    return(
        <ContainerProjects>
            <GridText>
                <h2>portfólio</h2>
                <h1>projetos em destaque</h1>
                <p>Alguns dos trabalhos que tenho orgulho de ter construído</p>
            </GridText>
            <GridProjects>
                <CardProjects />
            </GridProjects>
        </ContainerProjects>
    )
}

export default Projects
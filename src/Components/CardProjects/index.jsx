import { CardContainer, CardProject, CardImage, CardInfo, CardTecnologies, CardGit, CardText } from "./styles";
import { projects } from "../../Data/projects";
import { FaGithub } from "react-icons/fa";

const CardProjects = () => {
    return (
        <CardContainer>
            {projects.map((p) => (
                <CardProject key={p.id}>
                    <CardImage>
                        <img src={p.image} alt={p.title} />
                    </CardImage>
                    <CardInfo>
                        <CardTecnologies>
                            {p.technologies.map((t) => (
                                <span key={t}>{t}</span>
                            ))}
                        </CardTecnologies>
                        <CardText>
                            <h1>{p.title}</h1>
                            <p>{p.description}</p>
                        </CardText>
                        <CardGit>
                            <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                                Código</a>
                        </CardGit>
                    </CardInfo>
                </CardProject>
            ))}
        </CardContainer>
    )
}

export default CardProjects
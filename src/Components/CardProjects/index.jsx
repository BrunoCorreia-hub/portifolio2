import { CardContainer, CardProject } from "./styles";
import { projects } from "../../Data/projects";

const CardProjects = () => {
    return (
        <CardContainer>
            {projects.map((p) => (
                <CardProject key={p.id}>
                    <div>
                        <img src={p.image} alt={p.title} />
                    </div>
                    <div>
                        <div>{p.technologies}</div>
                        <p>{p.title}</p>
                        <p>{p.description}</p>
                        <div>
                            <button>{p.github}</button>
                        </div>
                    </div>
                </CardProject>
            ))}
        </CardContainer>
    )
}

export default CardProjects
import { stacks } from "../../Data/stacks"
import { ContainerSkill, CardSkill, SkillHeader, SkillName, SkillLevel, ProgressBar, Progress } from "./styles";

const Skills = () => {
    return (
        <ContainerSkill>
            {
                stacks.map((s) => {
                    const Icon = s.icon;

                    return (
                        <CardSkill key={s.name}>
                            <SkillHeader color={s.color}>
                                <Icon />
                            </SkillHeader>
                            <SkillName>{s.name}</SkillName>
                            <SkillLevel>{s.level}</SkillLevel>

                            <ProgressBar>
                                <Progress
                                    width={`${s.progress}%`}
                                    color={s.color}
                                />
                            </ProgressBar>
                        </CardSkill>
                    )
                })
            }
        </ContainerSkill>
    )
}

export default Skills
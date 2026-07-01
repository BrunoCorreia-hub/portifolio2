import styled from "styled-components";

export const ContainerSkill = styled.div``;

export const CardSkill = styled.div``;

export const SkillHeader = styled.div`
    svg{
        color: ${({ color }) => color};
        font-size: 2rem;
    }
`;

export const SkillName = styled.h1``;

export const SkillLevel = styled.div``;

export const ProgressBar = styled.div`
    width: 100%;
    background-color: black;
`;

export const Progress = styled.div`
    width: ${({ width }) => width};
    background-color: ${({ color }) => color};
    height: 2rem;
`;
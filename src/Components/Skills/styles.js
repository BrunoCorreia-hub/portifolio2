import styled from "styled-components";

export const ContainerSkill = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
`;

export const CardSkill = styled.div`
    padding: 2rem;
    width: 500px;
`;

export const SkillHeader = styled.div`
    svg{
        color: ${({ color }) => color};
        font-size: 3rem;
        margin-bottom: 1rem;
    }
`;

export const SkillName = styled.h1`
    color: ${({ theme }) => theme.colors.text.tertiary};
    font-size: 2rem;
    margin-bottom: 0.5rem;
`;

export const SkillLevel = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 600;
`;

export const ProgressBar = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray[600]};
    border-radius: 5rem;
`;

export const Progress = styled.div`
    width: ${({ width }) => width};
    background-color: ${({ color }) => color};
    height: 0.5rem;
`;
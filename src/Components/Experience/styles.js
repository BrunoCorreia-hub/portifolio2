import styled from "styled-components";

export const ContainerExperience = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Grid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.border.light};
    border: 0.1rem solid ${({ theme }) => theme.colors.gray[100]};
    padding: 2rem 0;

    h1{
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary[600]};
        font-size: 3rem;
    }
    h2{
        background-color: transparent;
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: 2rem;
    }
`;
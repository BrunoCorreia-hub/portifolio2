import styled from "styled-components";

export const ContainerProjects = styled.div`
    padding: 5rem 15rem;
    background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const GridText = styled.div`
    background-color: transparent;

    h2{
        color: ${({ theme }) => theme.colors.primary[600]};
        background-color: transparent;
    }
    h1{
        color: ${({ theme }) => theme.colors.text.secondary};
        background-color: transparent;
        margin-top: 1rem;
        font-size: 2.5rem;
    }
    p{
        background-color: transparent;
        color: ${({ theme }) => theme.colors.gray[600]};
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

export const GridProjects = styled.div``;
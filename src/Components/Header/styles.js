import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    padding: 3rem;
    background-color: ${({ theme }) => theme.colors.gray[900]};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray[50]};
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const GridLinks = styled.div`
    display: flex;
    gap: 2rem;

    a{
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: 2rem;
    }
`;